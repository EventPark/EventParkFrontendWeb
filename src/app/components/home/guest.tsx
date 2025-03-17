import { useUserType } from "@/app/context/UserTypeContext";
import Image from "next/image";

export default function GuestSection() {
  const { userType } = useUserType();

  return (
    <div className="px-5 md:px-40 rounded-[16px] md:rounded-[24px]">
      <div
        className={` ${
          userType == "user"
            ? "md:bg-center md:bg-contain  bg-gradient-to-br from-[#48001E] to-[#81335F]"
            : "bg-white"
        }    flex flex-col items-start md:items-center gap-3 rounded-[16px] justify-between  pt-10 md:pt-20 pl-5 pr-0 md:px-[72px] bg-cover bg-bottom bg-no-repeat`}
      >
        <>
          <p
            className={`${
              userType == "user" ? "text-white " : "text-black"
            } text-sm md:text-[18px] font-normal tracking-[1.68px] md:tracking-[2.16px]`}
          >
            {userType == "user" ? "  GUEST MANAGEMENT" : "ANALYTICS & INSIGHTS"}
          </p>
          <h3
            className={`${
              userType == "user"
                ? "text-primary-lighter text-start"
                : "text-primary text-start md:text-center"
            } text-[28px] font-medium leading-[132%] tracking-[-1.26px] md:tracking-[-2.8px] md:text-[56px]`}
          >
            {userType == "user"
              ? "Manage guests, RSVPs,"
              : "Analytical Insights For "}

            <br />
            <span
              className={
                userType == "user" ? "text-[#F7F2F5]" : "text-primary-lighter"
              }
            >
              {userType == "user" ? "send invites with ease." : "Your Business"}
            </span>
          </h3>
        </>
        {userType == "vendor" && (
          <div className="text-start md:text-center text-[#808080] text-base md:text-2xl max-w-[292px] md:max-w-[547px]">
            Track performance and uncover trends to grow your business.
          </div>
        )}
        <div
          className={`w-full min-h-[310px] ${
            userType != "user" ? "md:min-h-[720px]" : "md:min-h-[380px]"
          } relative`}
        >
          <Image
            src={
              userType == "user"
                ? "/images/home/guest.svg"
                : "/images/vendor/analytics.png"
            }
            alt="Guest management illustration"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="w-full h-auto hidden md:block object-contain"
            priority={false}
            loading="lazy"
          />
          <Image
            src={
              userType == "user"
                ? "/images/home/guest_mobile.svg"
                : "/images/vendor/analytics_mobile.png"
            }
            alt="Guest management illustration"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="block md:hidden w-full h-auto object-contain"
            priority={false}
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
}
