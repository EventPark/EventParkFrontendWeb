import { useUserType } from "@/app/context/UserTypeContext";
import Image from "next/image";

const WhatToExpect = () => {
  const { userType } = useUserType();
  return (
    <div className="pt-0 md:pt-[72px] flex flex-col flex-1 gap-6 items-start md:items-center justify-center md:px-40 px-5">
      <h6 className="text-sm md:text-[20px] font-medium leading-[20px] tracking-[2.4px] md:tracking-[3.2px] text-[#8E8E93]">
        VENDORPERK • WHAT TO EXPECT!
      </h6>
      <p className="text-[22px] md:max-w-[740px]  text-left md:text-center md:text-[28px] font-normal leading-[50.4px] md:tracking-[-0.84px] tracking-[-0.66px]">
        <span className="hidden md:flex">
          VendorPerk is your go-to platform for effortless event planning.
          Discover top vendors, manage budgets, and book seamlessly. Join the
          waitlist for early access!
        </span>{" "}
        <span className="md:hidden flex">
          VendorPerk is your go-to platform for effortless event planning.
          <br />
          Discover top vendors, manage budgets, and book seamlessly. Join the
          waitlist for early access!
        </span>{" "}
      </p>

      {userType == "user" ? (
        <div className="flex flex-col md:flex-row pt-16 w-full gap-y-5 max-w-[1120px] flex-wrap">
          <div className="bg-[#FBF8F1] rounded-[14px] px-5 pt-7 pb-10 flex flex-col gap-y-14 w-full md:w-[calc(50%-20px)] lg:w-[calc(33.333%-20px)] md:mr-5 md:mb-0">
            <Image src={"/icons/stats.svg"} alt="" width={56} height={56} />
            <div>
              <h4 className="text-[28px] font-medium text-black">
                Budget Planner
              </h4>
              <p className="text-[#8E8E93] text-[16px] tracking-[-0.48px] ">
                Stay on top of your event expenses with smart, stress-free
                budgeting.
              </p>
            </div>
          </div>
          <div className="bg-[#F7F2F5] rounded-[14px] px-5 pt-7 pb-10 flex flex-col gap-y-14 w-full md:w-[calc(50%-20px)] lg:w-[calc(33.333%-20px)] md:mr-5 md:mb-0">
            <Image
              src={"/icons/users-circle.svg"}
              alt=""
              width={56}
              height={56}
            />
            <div>
              <h4 className="text-[28px] font-medium text-black">
                Guest Management
              </h4>
              <p className="text-[#8E8E93] text-[16px] tracking-[-0.48px]">
                Easily track RSVPs, send invites, and manage your guest list in
                one place.
              </p>
            </div>
          </div>
          <div className="bg-[#F7F2F5] rounded-[14px] px-5 pt-7 pb-10 flex flex-col gap-y-14 w-full md:w-[calc(50%-20px)] lg:w-[calc(33.333%-20px)] md:mr-5 md:mb-0 ">
            <Image src={"/icons/wand.svg"} alt="" width={56} height={56} />
            <div>
              <h4 className="text-[28px] font-medium text-black">
                AI Event Planning Partner
              </h4>
              <p className="text-[#8E8E93] text-[16px] tracking-[-0.48px]">
                Smart recommendations for effortless planning
              </p>
            </div>
          </div>
          <div className="bg-[#FBF8F1] rounded-[14px] px-5 pt-7 pb-10 flex flex-col gap-y-14 w-full md:w-[calc(50%-20px)] lg:w-[calc(33.333%-20px)] md:mr-5 md:mb-0">
            <Image src={"/icons/grid.svg"} alt="" width={56} height={56} />
            <div>
              <h4 className="text-[28px] font-medium text-black">
                Event Websites
              </h4>
              <p className="text-[#8E8E93] text-[16px] tracking-[-0.48px]"></p>
              <p className="text-[#8E8E93] text-[16px] tracking-[-0.48px]">
                Create a stunning, shareable event page for seamless
                coordination.
              </p>
            </div>
          </div>
          <div className="bg-[#F7F2F5] rounded-[14px] px-5 pt-7 pb-10  flex flex-col gap-y-14 w-fullmd:w-[calc(50%-20px)] lg:w-[calc(33.333%-20px)] md:mr-5">
            <Image src={"/icons/gift.svg"} alt="" width={56} height={56} />
            <div>
              <h4 className="text-[28px] font-medium text-black">
                Gifting registry
              </h4>
              <p className="text-[#8E8E93] text-[16px] tracking-[-0.48px]">
                Let guests celebrate you with the perfect gifts, hassle-free.
              </p>
            </div>
          </div>
          <div className="bg-[#F7F2F5] rounded-[14px] px-5 pt-7 pb-10  flex flex-col gap-y-14 w-fullmd:w-[calc(50%-20px)] lg:w-[calc(33.333%-20px)]  ">
            <Image src={"/icons/misc.svg"} alt="" width={56} height={56} />
            <div>
              <h4 className="text-[28px] font-medium text-black">
                So much more...
              </h4>
              <p className="text-[#8E8E93] text-[16px] tracking-[-0.48px]">
                Everything you need for stress-free event planning!
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div className="md:h-[584px] relative bg-white    overflow-hidden w-full flex gap-5 md:flex-row flex-col justify-center max-w-[1000px]">
          <div className="px-5 pt-7 bg-[#fbf8f1] rounded-[14px] flex-col justify-start items-start gap-5 inline-flex overflow-hidden">
            <div data-svg-wrapper>
              <svg
                width="56"
                height="56"
                viewBox="0 0 56 56"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="56" height="56" rx="28" fill="#F7F3E8" />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M28.0002 19.8333C31.8662 19.8333 35.0002 22.9673 35.0002 26.8333C35.0002 29.4243 33.5925 31.6865 31.5002 32.8968L31.5002 37.3333L30.3335 38.5H29.1668C29.1668 39.1443 28.6445 39.6666 28.0002 39.6666C27.3558 39.6666 26.8335 39.1443 26.8335 38.5H25.6668L24.5002 37.3333L24.5001 32.8968C22.4078 31.6865 21.0002 29.4243 21.0002 26.8333C21.0002 22.9673 24.1342 19.8333 28.0002 19.8333ZM29.1669 33.7365C28.7875 33.8002 28.3977 33.8333 28.0002 33.8333C27.6026 33.8333 27.2129 33.8002 26.8334 33.7365L26.8335 36.1666H29.1668L29.1669 33.7365ZM21.6067 31.9893L22.8442 33.2267L20.3693 35.7016L19.1319 34.4642L21.6067 31.9893ZM34.3936 31.9893L36.8685 34.4642L35.631 35.7016L33.1561 33.2267L34.3936 31.9893ZM39.6668 25.9583V27.7083H36.1668V25.9583H39.6668ZM19.8335 25.9583V27.7083H16.3335V25.9583H19.8335ZM35.631 17.965L36.8685 19.2024L34.3936 21.6773L33.1561 20.4399L35.631 17.965ZM20.3693 17.965L22.8442 20.4399L21.6067 21.6773L19.1319 19.2024L20.3693 17.965ZM28.8752 15.1666V18.6666H27.1252V15.1666H28.8752Z"
                  fill="#BDB59E"
                />
              </svg>
            </div>

            <div className="self-stretch h-[241px] flex-col justify-start items-start gap-3 inline-flex">
              <div className="text-black text-[24px] md:text-[36px] font-medium leading-9 md:leading-[48px]">
                Organised Communication Channel
              </div>
              <div className="w-full md:w-[274px] text-[#8e8e93] text-lg font-medium leading-[28.80px]">
                Seamless chats to keep every detail in check.
              </div>
            </div>
          </div>
          <div className="flex flex-wrap gap-5   ">
            <div className="px-5 pt-7 pb-10 bg-[#f7f2f5] rounded-[14px] flex-col justify-start items-start gap-14 inline-flex overflow-hidden w-full md:w-auto">
              <div data-svg-wrapper>
                <svg
                  width="56"
                  height="56"
                  viewBox="0 0 56 56"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    width="56"
                    height="56"
                    rx="28"
                    fill="black"
                    fill-opacity="0.03"
                  />
                  <path
                    d="M39.6668 39.6666H16.3335C15.8552 39.6666 15.4585 39.27 15.4585 38.7916C15.4585 38.3133 15.8552 37.9166 16.3335 37.9166H39.6668C40.1452 37.9166 40.5418 38.3133 40.5418 38.7916C40.5418 39.27 40.1452 39.6666 39.6668 39.6666Z"
                    fill="#610037"
                  />
                  <path
                    d="M25.375 18.6667V39.6667H30.625V18.6667C30.625 17.3834 30.1 16.3334 28.525 16.3334H27.475C25.9 16.3334 25.375 17.3834 25.375 18.6667Z"
                    fill="#610037"
                  />
                  <path
                    d="M17.5 25.6667V39.6667H22.1667V25.6667C22.1667 24.3834 21.7 23.3334 20.3 23.3334H19.3667C17.9667 23.3334 17.5 24.3834 17.5 25.6667Z"
                    fill="#610037"
                  />
                  <path
                    d="M33.8335 31.5V39.6666H38.5002V31.5C38.5002 30.2166 38.0335 29.1666 36.6335 29.1666H35.7002C34.3002 29.1666 33.8335 30.2166 33.8335 31.5Z"
                    fill="#610037"
                  />
                </svg>
              </div>
              <div className="self-stretch h-[100px] flex-col justify-start items-start gap-3 inline-flex ">
                <div className="self-stretch text-black text-[28px] font-medium  leading-9">
                  Analytical Insights{" "}
                </div>
                <div className="w-[274px] text-[#8e8e93] text-base font-medium  leading-relaxed">
                  Track performance and make <br />
                  data-driven decisions.
                </div>
              </div>
            </div>
            <div className="px-5 pt-7 pb-10 bg-[#f5f4fa] rounded-[14px] flex-col justify-start items-start gap-14 inline-flex overflow-hidden  w-full md:w-auto">
              <div data-svg-wrapper>
                <svg
                  width="56"
                  height="56"
                  viewBox="0 0 56 56"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    width="56"
                    height="56"
                    rx="28"
                    fill="black"
                    fill-opacity="0.03"
                  />
                  <path
                    d="M38.4652 32.76C38.1852 35.875 35.9335 37.9167 32.6668 37.9167H22.1668C18.9468 37.9167 16.3335 35.3034 16.3335 32.0834V23.9167C16.3335 20.7434 18.2468 18.5267 21.2218 18.1534C21.5252 18.1067 21.8402 18.0834 22.1668 18.0834H32.6668C32.9702 18.0834 33.2618 18.095 33.5418 18.1417C36.3302 18.4684 38.2202 20.4167 38.4652 23.24C38.5002 23.5784 38.2202 23.8584 37.8818 23.8584H36.0735C34.9535 23.8584 33.9152 24.29 33.1685 25.06C32.2818 25.9234 31.8385 27.1367 31.9435 28.35C32.1302 30.4734 33.9968 32.1417 36.2135 32.1417H37.8818C38.2202 32.1417 38.5002 32.4217 38.4652 32.76Z"
                    fill="#B2AFCD"
                  />
                  <path
                    d="M39.6666 26.7983V29.2016C39.6666 29.8433 39.1533 30.3683 38.4999 30.3916H36.2133C34.9533 30.3916 33.7983 29.4699 33.6933 28.2099C33.6233 27.4749 33.9033 26.7866 34.3933 26.3083C34.8249 25.8649 35.4199 25.6083 36.0733 25.6083H38.4999C39.1533 25.6316 39.6666 26.1566 39.6666 26.7983Z"
                    fill="#B2AFCD"
                  />
                </svg>
              </div>
              <div className="self-stretch h-[100px] flex-col justify-start items-start gap-3 inline-flex  ">
                <div className="self-stretch text-black text-[28px] font-medium  leading-9">
                  Secure wallet system
                </div>
                <div className="w-[274px] text-[#8e8e93] text-base font-medium  leading-relaxed">
                  Safe, easy transactions all <br />
                  in one place.
                </div>
              </div>
            </div>
            <div className="px-5 pt-7 pb-10 bg-[#f5f4fa] rounded-[14px] flex-col justify-start items-start gap-14 inline-flex overflow-hidden  w-full md:w-auto">
              <div data-svg-wrapper>
                <svg
                  width="56"
                  height="56"
                  viewBox="0 0 56 56"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    width="56"
                    height="56"
                    rx="28"
                    fill="black"
                    fill-opacity="0.03"
                  />
                  <path
                    d="M28.875 32.5733H29.6333C30.3917 32.5733 31.0217 31.8966 31.0217 31.08C31.0217 30.065 30.66 29.8666 30.065 29.6566L28.8867 29.2483V32.5733H28.875Z"
                    fill="black"
                  />
                  <path
                    d="M27.9652 16.2167C21.5252 16.24 16.3102 21.4784 16.3336 27.9184C16.3569 34.3584 21.5952 39.5734 28.0352 39.55C34.4752 39.5267 39.6902 34.2884 39.6669 27.8484C39.6436 21.4084 34.4052 16.205 27.9652 16.2167ZM30.6369 28C31.5469 28.315 32.7719 28.9917 32.7719 31.08C32.7719 32.8767 31.3602 34.3234 29.6336 34.3234H28.8752V35C28.8752 35.4784 28.4786 35.875 28.0002 35.875C27.5219 35.875 27.1252 35.4784 27.1252 35V34.3234H26.7052C24.7919 34.3234 23.2402 32.7134 23.2402 30.73C23.2402 30.2517 23.6369 29.855 24.1152 29.855C24.5936 29.855 24.9902 30.2517 24.9902 30.73C24.9902 31.745 25.7602 32.5734 26.7052 32.5734H27.1252V28.63L25.3636 28C24.4536 27.685 23.2286 27.0084 23.2286 24.92C23.2286 23.1234 24.6402 21.6767 26.3669 21.6767H27.1252V21C27.1252 20.5217 27.5219 20.125 28.0002 20.125C28.4786 20.125 28.8752 20.5217 28.8752 21V21.6767H29.2952C31.2086 21.6767 32.7602 23.2867 32.7602 25.27C32.7602 25.7484 32.3636 26.145 31.8852 26.145C31.4069 26.145 31.0102 25.7484 31.0102 25.27C31.0102 24.255 30.2402 23.4267 29.2952 23.4267H28.8752V27.37L30.6369 28Z"
                    fill="#807D9A"
                  />
                  <path
                    d="M24.9902 24.9316C24.9902 25.9466 25.3519 26.145 25.9469 26.355L27.1252 26.7633V23.4266H26.3669C25.6086 23.4266 24.9902 24.1033 24.9902 24.9316Z"
                    fill="#807D9A"
                  />
                </svg>
              </div>
              <div className="self-stretch h-[100px] flex-col justify-start items-start gap-3 inline-flex">
                <div className="self-stretch text-black text-[28px] font-medium  leading-9">
                  Automated Payouts
                </div>
                <div className="w-[274px] text-[#8e8e93] text-base font-medium  leading-relaxed">
                  Get paid on time, every <br />
                  time—hassle-free
                </div>
              </div>
            </div>
            <div className="px-5 pt-7 pb-10 bg-[#fbf8f1] rounded-[14px] flex-col justify-start items-start gap-14 inline-flex overflow-hidden  w-full md:w-auto">
              <div data-svg-wrapper>
                <svg
                  width="56"
                  height="56"
                  viewBox="0 0 56 56"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    width="56"
                    height="56"
                    rx="28"
                    fill="black"
                    fill-opacity="0.03"
                  />
                  <path
                    d="M24.4998 30.59H18.5732C17.8615 30.59 17.2082 30.9516 16.8348 31.5583C16.4615 32.1533 16.4265 32.865 16.7298 33.495C18.1648 36.435 20.7548 38.745 23.8348 39.83C24.0448 39.9 24.2782 39.9466 24.4998 39.9466C24.9082 39.9466 25.3165 39.8183 25.6665 39.5733C26.2148 39.1883 26.5415 38.5583 26.5415 37.8933L26.5532 32.6433C26.5532 32.095 26.3432 31.5816 25.9582 31.1966C25.5615 30.8116 25.0482 30.59 24.4998 30.59Z"
                    fill="#BDB59E"
                  />
                  <path
                    d="M40.2269 25.2C38.9202 19.46 33.8919 15.4584 28.0002 15.4584C22.1086 15.4584 17.0802 19.46 15.7736 25.2C15.6336 25.8067 15.7736 26.425 16.1702 26.915C16.5669 27.405 17.1502 27.685 17.7802 27.685H38.2319C38.8619 27.685 39.4452 27.405 39.8419 26.915C40.2269 26.425 40.3669 25.795 40.2269 25.2Z"
                    fill="#BDB59E"
                  />
                  <path
                    d="M37.4035 30.6484L31.5002 30.6367C30.9518 30.6367 30.4385 30.8467 30.0535 31.2317C29.6685 31.6167 29.4585 32.1301 29.4585 32.6784L29.4702 37.9051C29.4702 38.5701 29.7968 39.2001 30.3452 39.5851C30.6952 39.8301 31.1035 39.9584 31.5118 39.9584C31.7335 39.9584 31.9552 39.9234 32.1652 39.8417C35.2218 38.7684 37.8118 36.4701 39.2468 33.5651C39.5502 32.9467 39.5152 32.2234 39.1535 31.6401C38.7685 31.0101 38.1152 30.6484 37.4035 30.6484Z"
                    fill="#BDB59E"
                  />
                </svg>
              </div>
              <div className="self-stretch h-[100px] flex-col justify-start items-start gap-3 inline-flex">
                <div className="self-stretch text-black text-[28px] font-medium  leading-9">
                  So much more...
                </div>
                <div className="w-[274px] text-[#8e8e93] text-base font-medium  leading-relaxed">
                  We create a platform that connects <br />
                  and empowers everyone
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default WhatToExpect;
