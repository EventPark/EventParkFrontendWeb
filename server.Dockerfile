# Define the build stage
FROM --platform=$BUILDPLATFORM node:20.19-alpine3.21 AS builder

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package.json package-lock.json ./

# Install dependencies
RUN npm ci

# Copy the rest of the app
COPY . .

# Setup the build env variables
ARG NEXT_PUBLIC_API_URL
ENV NEXT_PUBLIC_API_URL=$NEXT_PUBLIC_API_URL

# Build the Next.js app
RUN npm run build

# Install production dependencies only
RUN npm ci --omit=dev

# Use a lightweight production image
FROM --platform=$TARGETPLATFORM node:20.19-alpine3.21 AS runner

# Set working directory
WORKDIR /app

# Copy built files and dependencies from the builder stage
COPY --from=builder /app/package.json /app/package-lock.json ./
COPY --from=builder /app/node_modules /app/node_modules
COPY --from=builder /app/.next /app/.next
COPY --from=builder /app/public /app/public

# Expose port
EXPOSE 3000

# Start the app
CMD ["npm", "run", "start"]
