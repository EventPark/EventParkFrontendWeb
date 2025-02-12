"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "../ui/button";

const faqs = [
  {
    question: "What is VendorPerk?",
    answer:
      "VendorPerk is an event management platform that streamlines the process of finding, booking, and managing vendors for events.",
  },
  {
    question: "How do I search for vendors on VendorPerk?",
    answer:
      "You can search for vendors by entering relevant keywords in the search bar.",
  },
  {
    question: "Can I filter vendors by budget, location, or services offered?",
    answer:
      "Yes, VendorPerk provides filtering options to help you find vendors that match your requirements.",
  },
  {
    question: "How do I book a vendor through VendorPerk?",
    answer:
      "You can book a vendor by clicking the 'Book Now' button on their profile.",
  },
  {
    question: "Can I save vendors to refer back to later?",
    answer:
      "Yes, you can add vendors to your favorites list for easy access later.",
  },
];

const FAQAccordion = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="md:max-w-[720px] mx-auto px-5 md:px-0 py-16 flex flex-col items-center ">
      <h6 className="text-[#B3B3B3] font-normal text-sm tracking-[1.68px]">
        FAQS
      </h6>
      <h2 className="text-[28px] md:text-[48px] font-normal text-center mb-6 w-[329px] md:w-[662px] tracking-[-1.26px] md:tracking-[-2.4px]">
        We answered your questions so you don&apos;t have to ask again
      </h2>
      <div className="space-y-4 md:space-y-12 my-9 w-full">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`pb-2 ${index !== faqs.length - 1 ? "border-b" : ""}`}
          >
            <button
              onClick={() => toggleFAQ(index)}
              className={`flex justify-between w-full text-left font-normal py-2 gap-x-[46px] transition duration-500`}
            >
              <div
                className={`${
                  openIndex === index
                    ? "text-primary font-medium"
                    : "text-[#808084]"
                } text-[16px] md:text-[18px] tracking-[-0.48px] transition duration-500`}
              >
                {faq.question}
              </div>
              {openIndex === index ? (
                <Image
                  src="/icons/minus.svg"
                  width={24}
                  height={24}
                  alt="minus"
                />
              ) : (
                <Image
                  src="/icons/plus.svg"
                  width={24}
                  height={24}
                  alt="plus"
                />
              )}
            </button>
            {openIndex === index && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0 }}
                className="text-[#31312F] text-sm md:text-[18px] mt-2 border rounded-lg border-[#EFE5EB] bg-[#FBF9FA] px-6 py-8 leading-normal w-full"
              >
                {faq.answer}
              </motion.div>
            )}
          </div>
        ))}
      </div>
      <Button className="bg-[#000] text-white items-center gap-3 p-[14px] w-auto h-[56px] text-lg flex">
        Check out FAQs{" "}
        <Image
          src={"/icons/arrow-circle-right.svg"}
          width={24}
          height={24}
          alt="arrow-right"
        />
      </Button>
    </div>
  );
};

export default FAQAccordion;
