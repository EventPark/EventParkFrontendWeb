export default function GuestSection() {
  return (
    <div className="px-5 md:px-40 rounded-[16px] md:rounded-[24px]">
      <div className="flex flex-col items-start md:items-center gap-3 rounded-[16px] py-10 md:py-20 px-5 bg-[url('/images/home/guest_mobile.png')] md:bg-[url('/images/home/guest.png')] bg-cover   bg-top  bg-no-repeat h-[498px] md:h-[720px] xl:h-[1024] md:bg-center">
        <p className="text-sm md:text-[18px] font-normal text-white tracking-[1.68px] md:tracking-[2.16px]">
          GUEST MANAGEMENT
        </p>
        <h3 className="text-[28px] font-medium leading-[132%] tracking-[-1.26px]  md:tracking-[-2.8px]  text-[#C099AF] md:text-[56px]">
          Manage guests, RSVPs,
          <br />
          <span className="text-[#F7F2F5]">send invites with ease.</span>
        </h3>
      </div>
    </div>
  );
}
