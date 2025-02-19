import { useUserType } from "@/app/context/UserTypeContext";

export default function GuestSection() {
  const { userType } = useUserType();

  return (
    <div className="px-5 md:px-40 rounded-[16px] md:rounded-[24px]">
      <div
        className={`${
          userType == "user"
            ? "bg-[url('/images/home/guest_mobile.png')] md:bg-[url('/images/home/guest.png')] md:h-[720px] xl:h-[1024] h-[498px] md:bg-center"
            : "bg-[url('/images/vendor/analytics_mobile.png')] md:bg-[url('/images/vendor/analytics.png')] md:h-[960px] xl:h-[1024] sm: h-760px] h-[650px]  bg-left md:bg-center"
        }    flex flex-col items-start md:items-center gap-3 rounded-[16px] py-10 md:py-20 px-5  bg-cover bg-bottom bg-no-repeat `}
      >
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
          } text-[28px] font-medium leading-[132%] tracking-[-1.26px]  md:tracking-[-2.8px] md:text-[56px]`}
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
            {" "}
            {userType == "user" ? "send invites with ease." : "Your Business"}
          </span>
        </h3>
        {userType == "vendor" && (
          <div className="text-start md:text-center text-[#808080] text-base md:text-2xl max-w-[292px] md:max-w-[547px]">
            Track performance and uncover trends to grow your business.
          </div>
        )}
      </div>
    </div>
  );
}
