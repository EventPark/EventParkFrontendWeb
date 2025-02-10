"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const testimonials = [
  {
    name: "Sophia Hamilton",
    text: "VendorPerk made planning my wedding such an enjoyable experience! I was overwhelmed at first, but the platform's AI-powered matchmaker matched me with the perfect caterers, decorators, and even a live band.",
    rating: 5,
  },
  {
    name: "Olivia Martinez",
    text: "As an event coordinator, I’m constantly on the lookout for reliable vendors, and VendorPerk exceeded all my expectations. AI tools matched  me with the best vendors, and reviews boosted  my confidence.",
    rating: 4,
  },
  {
    name: "Lila Johnson",
    text: "VendorPerk’s user-friendly interface and secure payment system made booking vendors incredibly easy. I used it to organise a baby shower for my best friend, and everything turned out perfect.",
    rating: 5,
  },
  {
    name: "Aaron Cooper",
    text: "VendorPerk’s budgeting tools were a game-changer for our nonprofit's charity gala. I stayed on track financially and booked amazing vendors without any stress",
    rating: 4,
  },
  {
    name: "Jason Taylor",
    text: "I’ve planned everything from concerts to community festivals, and VendorPerk is now my go-to platform. It’s so intuitive, awide range of vendor categories ensures I always find exactly what I need.",
    rating: 5,
  },
  {
    name: "Ololade Johnson",
    text: "Planning my daughter’s 10th birthday was so much fun thanks to VendorPerk. I found a magician, party decorators, and even a cake artist all in one place. I loved being able to check availability and book everything instantly.",
    rating: 5,
  },
];

interface TestimonialCardProps {
  name: string;
  text: string;
  rating: number;
  rotate: string;
}
const TestimonialCard = ({
  name,
  text,
  rating,
  rotate,
}: TestimonialCardProps) => (
  <div className={`bg-white p-4 rounded-xl shadow-lg min-w-[340px] ${rotate}`}>
    <div className="flex">
      <Image src={"/icons/user-circle.svg"} width={40} height={40} alt="User" />
      <div className="flex flex-col space-x-2 items-start justify-start">
        <span className="whitespace-nowrap text-[#727272] text-sm uppercase tracking-[1.68px]">
          {name}
        </span>
        <div className="flex ">
          {Array.from({ length: rating }, (_, i) => (
            <Image
              key={i}
              src="/icons/star-yellow.svg"
              width={16}
              height={16}
              alt="Filled Star"
            />
          ))}
          {Array.from({ length: 5 - rating }, (_, i) => (
            <Image
              key={i}
              src="/icons/star-fill.svg"
              width={16}
              height={16}
              alt="Empty Star"
            />
          ))}
        </div>
      </div>
    </div>
    <p className="text-sm mt-2 text-gray-600">{text}</p>
  </div>
);

const TestimonialSection = () => {
  return (
    <div className="bg-[#FAFAFD] py-[90px] md:px-40 flex flex-col items-center ">
      <h6 className="text-[#B3B3B3] font-normal text-sm tracking-[1.68px]">
        TESTEMONIALS
      </h6>
      <h2 className="text-center md:text-[56px] text-[28px] font-medium">
        Trusted by Event Planners
      </h2>
      <p className="text-center text-[#8E8E93] mb-8 md:text-[56px] text-[28px] font-medium">
        Anytime, Anywhere.
      </p>

      <div className="relative overflow-hidden py-8 space-y-8 w-full">
        {/* Upper Row - Moves Right */}
        <motion.div
          className="flex space-x-6 mb-4"
          animate={{ x: ["-100%", "0%"] }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
        >
          {[...testimonials, ...testimonials].map((t, index) => (
            <TestimonialCard key={index} {...t} rotate="md:-rotate-2" />
          ))}
        </motion.div>

        <motion.div
          className="flex space-x-6"
          animate={{ x: ["0%", "-100%"] }} // Change "100%" to "0%" for seamless looping
          transition={{ repeat: Infinity, duration: 20, ease: "easeIn" }}
        >
          {[...testimonials, ...testimonials].map(
            (
              t,
              index // Duplicate array
            ) => (
              <TestimonialCard key={index} {...t} rotate="md:-rotate-2" />
            )
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default TestimonialSection;
