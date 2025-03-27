import { Item, Vendor } from "../components/home/marketplace/types";

export const MOCK_ITEMS: Item[] = [
  {
    id: "1",
    name: "Premium Catering Service",
    price: 15000.0,
    rating: 4.5,
    image: "/images/marketplace/image.png",
    logoUrl: "/images/home/mock_vendor_logo.svg",
    vendorName: "Gourmet Delights",
    vendorImage: "/images/vendors/vendor1.jpg",
    categories: ["Catering", "Utensils"],
    reviews: [
      {
        id: "r1",
        rating: 5,
        comment:
          "My skin has never felt this smooth!  The facial treatment was amazing, and I left feeling refreshed and confident. Thank you, DivaGlow!",
        serviceId: "2",
      },
      {
        id: "r2",
        rating: 4,
        comment:
          "My skin has never felt this smooth!  The facial treatment was amazing, and I left feeling refreshed and confident. Thank you, DivaGlow!",
        serviceId: "1",
      },
      {
        id: "r2",
        rating: 4,
        comment:
          "My skin has never felt this smooth!  The facial treatment was amazing, and I left feeling refreshed and confident. Thank you, DivaGlow!",
        serviceId: "1",
      },
      {
        id: "r2",
        rating: 4,
        comment:
          "My skin has never felt this smooth!  The facial treatment was amazing, and I left feeling refreshed and confident. Thank you, DivaGlow!",
        serviceId: "1",
      },
      {
        id: "r2",
        rating: 4,
        comment:
          "My skin has never felt this smooth!  The facial treatment was amazing, and I left feeling refreshed and confident. Thank you, DivaGlow!",
        serviceId: "1",
      },
      {
        id: "r2",
        rating: 4,
        comment:
          "My skin has never felt this smooth!  The facial treatment was amazing, and I left feeling refreshed and confident. Thank you, DivaGlow!",
        serviceId: "1",
      },
    ],
  },
  {
    id: "2",
    name: "Event Photography Package",
    price: 25000.0,
    rating: 4.8,
    image: "/images/home/carousel/02.png",
    logoUrl: "/images/home/mock_vendor_logo.svg",
    vendorName: "Capture Moments",
    vendorImage: "/images/vendors/vendor2.jpg",
    categories: ["Photography"],
    reviews: [],
  },
  {
    id: "3",
    name: "Deluxe Decoration Set",
    price: 18000.0,
    rating: 4.3,
    image: "/images/home/carousel/02.png",
    logoUrl: "/images/home/mock_vendor_logo.svg",
    vendorName: "Event Elegance",
    vendorImage: "/images/vendors/vendor3.jpg",
    categories: ["Event Decoration"],
    reviews: [],
  },
  {
    id: "4",
    name: "Professional DJ Service",
    price: 22000.0,
    rating: 4.7,
    image: "/images/home/carousel/02.png",
    logoUrl: "/images/home/mock_vendor_logo.svg",
    vendorName: "Sound Masters",
    vendorImage: "/images/vendors/vendor4.jpg",
    categories: ["Music", "Entertainment"],
    reviews: [],
  },
  {
    id: "5",
    name: "Wedding Cake Package",
    price: 12000.0,
    rating: 4.6,
    image: "/images/home/carousel/02.png",
    logoUrl: "/images/home/mock_vendor_logo.svg",
    vendorName: "Sweet Creations",
    vendorImage: "/images/vendors/vendor5.jpg",
    categories: ["Catering", "Bakery"],
    reviews: [],
  },
];

export const MOCK_VENDORS: Vendor[] = [
  {
    id: "1",
    name: "Glitz & Glam Events",
    location: "Lekki, Lagos Nigeria",
    rating: 4.5,
    tags: [{ label: "Makeup" }, { label: "Nail Fixing" }],
    imageUrl: "/images/home/carousel/02.png",
    logoUrl: "/images/home/mock_vendor_logo.svg",
    services: [
      {
        id: "1",
        title: "Catering",
        description: "Catering services",
        price: 15000.0,
        rating: 4.5,
        reviewCount: 100,
        image: "/images/home/carousel/02.png",
      },
      {
        id: "2",
        title: "Facial Makeups",
        description: "Flawless makeup for your big day.",
        price: 15000.0,
        rating: 4.5,
        reviewCount: 100,
        image: "/images/home/carousel/02.png",
      },
      {
        id: "3",
        title: "Facial Makeups",
        description: "Flawless makeup for your big day.",
        price: 15000.0,
        rating: 4.5,
        reviewCount: 100,
        image: "/images/home/carousel/02.png",
      },
    ],
    reviews: [
      {
        id: "r1",
        rating: 5,
        comment:
          "Amazing makeup service! Made me look stunning on my wedding day.",
        serviceId: "2",
      },
      {
        id: "r2",
        rating: 4,
        comment: "Great catering, food was delicious.",
        serviceId: "1",
      },
      {
        id: "r1",
        rating: 5,
        comment:
          "Amazing makeup service! Made me look stunning on my wedding day.",
        serviceId: "2",
      },
      {
        id: "r1",
        rating: 5,
        comment:
          "Amazing makeup service! Made me look stunning on my wedding day.",
        serviceId: "2",
      },
      {
        id: "r1",
        rating: 5,
        comment:
          "Amazing makeup service! Made me look stunning on my wedding day.",
        serviceId: "2",
      },
      {
        id: "r1",
        rating: 5,
        comment:
          "Amazing makeup service! Made me look stunning on my wedding day.",
        serviceId: "2",
      },
    ],
  },
  {
    id: "2",
    name: "Perfect Touch Decor",
    location: "Lekki, Lagos Nigeria",
    rating: 4.5,
    tags: [{ label: "Event Planning" }, { label: "Decoration" }],
    imageUrl: "/images/home/carousel/02.png",
    logoUrl: "/images/home/mock_vendor_logo.svg",
    services: [
      {
        id: "1",
        title: "Catering",
        description: "Catering services",
        price: 15000.0,
        rating: 4.5,
        reviewCount: 100,
        image: "/images/home/carousel/02.png",
      },
    ],
    reviews: [
      {
        id: "r3",
        rating: 5,
        comment:
          "The decoration was absolutely beautiful! Exceeded expectations.",
        serviceId: "1",
      },
    ],
  },
  {
    id: "3",
    name: "Dreamscape Planners",
    location: "Lekki, Lagos Nigeria",
    rating: 4.5,
    tags: [{ label: "Event Planning" }, { label: "Decoration" }],
    imageUrl: "/images/home/carousel/02.png",
    logoUrl: "/images/home/mock_vendor_logo.svg",
    services: [
      {
        id: "1",
        title: "Catering",
        description: "Catering services",
        price: 15000.0,
        rating: 4.5,
        reviewCount: 100,
        image: "/images/home/carousel/02.png",
      },
    ],
    reviews: [
      {
        id: "r4",
        rating: 4,
        comment: "Very professional team, great attention to detail.",
        serviceId: "1",
      },
    ],
  },
  {
    id: "4",
    name: "Jollof & Beyond",
    location: "Lekki, Lagos Nigeria",
    rating: 4.5,
    tags: [{ label: "Food" }, { label: "Catering" }],
    imageUrl: "/images/home/carousel/02.png",
    logoUrl: "/images/home/mock_vendor_logo.svg",
    services: [
      {
        id: "1",
        title: "Catering",
        description: "Catering services",
        price: 15000.0,
        rating: 4.5,
        reviewCount: 100,
        image: "/images/home/carousel/02.png",
      },
    ],
    reviews: [
      {
        id: "r5",
        rating: 5,
        comment: "Best jollof rice in Lagos! Everyone at the party loved it.",
        serviceId: "1",
      },
    ],
  },
  {
    id: "5",
    name: "Tasty Treats NG",
    location: "Lekki, Lagos Nigeria",
    rating: 4.5,
    tags: [{ label: "Snack" }, { label: "Drinks" }],
    imageUrl: "/images/home/carousel/02.png",
    logoUrl: "/images/home/mock_vendor_logo.svg",
    services: [
      {
        id: "1",
        title: "Catering",
        description: "Catering services",
        price: 15000.0,
        rating: 4.5,
        reviewCount: 100,
        image: "/images/home/carousel/02.png",
      },
    ],
    reviews: [
      {
        id: "r6",
        rating: 4,
        comment: "Great selection of snacks and drinks. Very reliable service.",
        serviceId: "1",
      },
    ],
  },
  {
    id: "6",
    name: "Naija Bites Catering",
    location: "Lekki, Lagos Nigeria",
    rating: 4.5,
    tags: [{ label: "Pastries" }, { label: "Catering" }],
    imageUrl: "/images/home/carousel/02.png",
    logoUrl: "/images/home/mock_vendor_logo.svg",
    services: [
      {
        id: "1",
        title: "Catering",
        description: "Catering services",
        price: 15000.0,
        rating: 4.5,
        reviewCount: 100,
        image: "/images/home/carousel/02.png",
      },
    ],
    reviews: [
      {
        id: "r7",
        rating: 5,
        comment: "Their pastries are to die for! Highly recommend.",
        serviceId: "1",
      },
    ],
  },
  {
    id: "7",
    name: "Lens Master Studios",
    location: "Lekki, Lagos Nigeria",
    rating: 4.5,
    tags: [{ label: "Pictures" }, { label: "Photography" }],
    imageUrl: "/images/home/carousel/02.png",
    logoUrl: "/images/home/mock_vendor_logo.svg",
    services: [
      {
        id: "1",
        title: "Catering",
        description: "Catering services",
        price: 15000.0,
        rating: 4.5,
        reviewCount: 100,
        image: "/images/home/carousel/02.png",
      },
    ],
    reviews: [
      {
        id: "r8",
        rating: 5,
        comment: "Captured our special moments beautifully. Very professional.",
        serviceId: "1",
      },
    ],
  },
  {
    id: "8",
    name: "Golden Frame Visuals",
    location: "Lekki, Lagos Nigeria",
    rating: 4.5,
    tags: [{ label: "Photography" }, { label: "Videography" }],
    imageUrl: "/images/home/carousel/02.png",
    logoUrl: "/images/home/mock_vendor_logo.svg",
    services: [
      {
        id: "1",
        title: "Catering",
        description: "Catering services",
        price: 15000.0,
        rating: 4.5,
        reviewCount: 100,
        image: "/images/home/carousel/02.png",
      },
    ],
    reviews: [
      {
        id: "r9",
        rating: 4,
        comment: "Great video quality and editing. Would use again.",
        serviceId: "1",
      },
    ],
  },
  {
    id: "9",
    name: "Bella Wears NG",
    location: "Lekki, Lagos Nigeria",
    rating: 4.5,
    tags: [{ label: "Fashion" }, { label: "Shoes" }],
    imageUrl: "/images/home/carousel/02.png",
    logoUrl: "/images/home/mock_vendor_logo.svg",
    services: [
      {
        id: "1",
        title: "Catering",
        description: "Catering services",
        price: 15000.0,
        rating: 4.5,
        reviewCount: 100,
        image: "/images/home/carousel/02.png",
      },
    ],
    reviews: [
      {
        id: "r10",
        rating: 5,
        comment: "Amazing quality outfits and shoes. Perfect fit!",
        serviceId: "1",
      },
    ],
  },
];
