import Image from "next/image";

export default function PersonalisedWebsitesSection() {
  return (
    <div className="px-5 md:px-40">
      <div className="py-10 px-5 md:px-20 md:py-[95px] flex gap-3 flex-col bg-cover bg-no-repeat h-[498px] md:h-[720px] bg-[url('/images/home/personalised_mobile.png')] md:bg-[url('/images/home/personalised.png')]">
        <h3 className="text-[#7F7F7F80] text-sm font-medium tracking-[1.68px] md:tracking-[2.16px] md:text-[18px]">
          PREBUILT EVENT WEBSITES
        </h3>
        <h2 className="text-primary font-medium text-[28px] md:text-[56px] tracking-[-1.26px]">
          Personalised
          <span className="text-primary-lighter block">
            Event Websites, <span className="block">Just for You</span>
          </span>
        </h2>

        <Image
          className="opacity-0"
          src={"/images/home/personalised_vector.svg"}
          alt=""
          width={330}
          height={400}
        />
      </div>
    </div>
  );
}
