import Image from "next/image";
import React from "react";

const Cjenik = () => {
  return (
    <section
      id="pricing"
      className="relative m-auto flex flex-col items-start justify-between px-[20px] pt-20 sm:px-[40px] md:flex-row lg:max-w-[70%] lg:px-0 2xl:max-w-[50%]"
    >
      <div className="mb-10 w-[200px]">
        <h3 className="text-color1 mb-10 text-5xl tracking-wide">Pricing</h3>
        <div className="border-color1 bg-color1/30 flex items-center justify-between rounded-t-2xl border-[2px] border-b-0 px-10 py-2 text-2xl">
          <p className="">*Price:</p>
          <p>25€</p>
        </div>
        <div className="border-color1 bg-color1/30 flex items-center justify-between rounded-b-2xl border-[2px] px-10 py-2 text-2xl">
          <p>Duration:</p>
          <p>1h</p>
        </div>
        <p className="text-lg italic">*per person</p>
      </div>
      <div className="xsm:w-[400px] w-full">
        <h5 className="text-color1 mb-3 text-5xl tracking-wide">Slots</h5>
        <div className="border-color1 bg-color1/30 rounded-t-2xl border-[2px] border-b-0 px-10 py-2 text-2xl">
          1st Slot: 09:30-11:00
        </div>
        <div className="border-color1 border-[2px] border-b-0 px-10 py-2 text-2xl">
          Preparation: 11:00 - 11:20
        </div>
        <div className="border-color1 bg-color1/30 border-[2px] border-b-0 px-10 py-2 text-2xl">
          2nd Slot: 11:20-12:50
        </div>
        <div className="border-color1 border-[2px] border-b-0 px-10 py-2 text-2xl">
          Preparation: 12:50 - 13:10
        </div>
        <div className="border-color1 bg-color1/30 border-[2px] border-b-0 px-10 py-2 text-2xl">
          3rd Slot: 13:10-14:40
        </div>
        <div className="border-color1 border-[2px] border-b-0 px-10 py-2 text-2xl">
          Preparation: 14:40 - 15:00
        </div>
        <div className="border-color1 bg-color1/30 border-[2px] border-b-0 px-10 py-2 text-2xl">
          4th Slot: 15:00-16:30
        </div>
        <div className="border-color1 border-[2px] border-b-0 px-10 py-2 text-2xl">
          Preparation: 16:30 - 16:50
        </div>
        <div className="border-color1 bg-color1/30 border-[2px] border-b-0 px-10 py-2 text-2xl">
          5th Slot: 16:50-18:20
        </div>
        <div className="border-color1 border-[2px] border-b-0 px-10 py-2 text-2xl">
          Preparation: 18:20 - 18:40
        </div>
        <div className="border-color1 bg-color1/30 rounded-b-2xl border-[2px] px-10 py-2 text-2xl">
          6th Slot: 18:40-20:10
        </div>
      </div>
      <Image
        className="absolute bottom-20 left-[-150px] hidden rotate-45 lg:block xl:left-[-180px] 2xl:left-[-250px]"
        src="/bicikla-cover.png"
        width={457}
        height={457}
        alt="bicikla icon"
      />
    </section>
  );
};

export default Cjenik;
