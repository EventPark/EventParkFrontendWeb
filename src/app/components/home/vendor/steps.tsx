export default function VendorSteps() {
  return (
    <div className="md:px-40 px-5">
      <div className="max-w-[506px] text-black text-[32px] md:text-5xl font-medium mb-20">
        Join in as a vendor <br /> in 3 easy steps
      </div>
      <div className="gap-5 md:gap-7 flex mx-auto relative overflow-x-scroll transition-all duration-1200 no-scrollbar">
        <VendorStepsCards />
      </div>
    </div>
  );
}

export const VendorStepsCards = () => {
  return (
    <>
      <div className=" min-w-[350px] w-[30%]  h-[470px] px-5 pt-12 pb-[230px] bg-gradient-to-b from-[#f7f2f5] to-white rounded-xl flex-col justify-start items-center inline-flex overflow-hidden">
        <div className="self-stretch h-48 flex-col justify-start items-start gap-5 inline-flex">
          <div className="text-[#333333] text-4xl font-medium">
            Create Your <br />
            Profile
          </div>
          <div className="self-stretch text-[#8e8e93] text-base font-medium">
            Sign up today and create a standout vendor profile to showcase your
            services, attract clients, and grow your business.
          </div>
        </div>
      </div>
      <div className=" min-w-[350px] w-[30%]  h-[470px] px-5 pt-12 pb-[230px] bg-gradient-to-b from-[#fcfaf6] to-white rounded-xl flex-col justify-start items-center inline-flex overflow-hidden">
        <div className="self-stretch h-48 flex-col justify-start items-start gap-5 inline-flex">
          <div className="text-[#333333] text-4xl font-medium">
            Showcase Your <br />
            Services
          </div>
          <div className="self-stretch text-[#8e8e93] text-base font-medium">
            Sign up today and create a standout vendor profile to showcase your
            services, attract clients, and grow your business.
          </div>
        </div>
      </div>
      <div className=" min-w-[350px] w-[30%]  h-[470px] px-5 pt-12 pb-[230px] bg-gradient-to-b from-[#f5f4fa] to-white rounded-xl flex-col justify-start items-center inline-flex overflow-hidden">
        <div className="self-stretch h-48 flex-col justify-start items-start gap-5 inline-flex">
          <div className="text-[#333333] text-4xl font-medium">
            Start Receiving Bookings
          </div>
          <div className="self-stretch text-[#8e8e93] text-base font-medium">
            Sign up today and create a standout vendor profile to showcase your
            services, attract clients, and grow your business.
          </div>
        </div>
      </div>
    </>
  );
};
