import Image from "next/image";

export default function GiftSection() {
  return (
    <div
      className="overflow-hidden bg-gradient-to-b from-[#F7F2F5] from-[28.59%] to-[#F0EFF8] to-[95.65%] font-medium gap-2 flex flex-col items-center pt-10 md:pt-[122px] relative"
      style={{
        backgroundPosition: "bottom center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <h6 className="text-[#7f7f7f] text-sm tracking-[1.68px] md:text-lg">
        GIFT REGISTRIES
      </h6>
      <h3 className="tracking-standard text-[32px] md:text-[73px] leading-0 flex flex-col items-center justify-center ">
        <span className="text-primary">Making Gifting </span>
        <span className="text-primary-light">Effortless</span>
      </h3>
      <Image src="/images/home/gift.png" height={800} width={800} alt="" />
    </div>
  );
}
