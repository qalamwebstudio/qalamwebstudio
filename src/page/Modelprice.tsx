import React from "react";

export const Modelprice = () => {
  return (
    <section className="w-full bg-[#f1f1f1] text-[#212121] font-Neue p-[3.8vw] ">
      <div className="w-full">
        <h1 className="text-[40px] md:text-[48px] lg:text-[52px] py-4">
          model’s Price 
        </h1>
      </div>
      <div className="w-full h-[1px] bg-gray-400 mb-8"></div>
        {/* Content for Modelprice can be added here */}
        <div className="w-full items-center  h-[75vh] flex flex-col md:flex-row gap-8">
          <div className="w-full md:w-1/2 h-full  rounded-lg shadow-md p-6 flex flex-col justify-center items-center">

            <h2 className="text-[24px] md:text-[28px] lg:text-[32px] py-2">
              Model A
            </h2>
            <p className="text-[16px] md:text-[18px] lg:text-[20px] py-1">
              Price: $100
            </p>
          </div>
          <div className="w-full md:w-1/2 h-full  rounded-lg shadow-md p-6 flex flex-col justify-center items-center">
            <h2 className="text-[24px] md:text-[28px] lg:text-[32px] py-2">
              Model B
            </h2>
            <p className="text-[16px] md:text-[18px] lg:text-[20px] py-1">
              Price: $200
            </p>
          </div>
          <div className="w-full md:w-1/2 h-full  rounded-lg shadow-md p-6 flex flex-col justify-center items-center">
            <h2 className="text-[24px] md:text-[28px] lg:text-[32px] py-2">
              Model C
            </h2>
            <p className="text-[16px] md:text-[18px] lg:text-[20px] py-1">
              Price: $300
            </p>
          </div>
        </div>
    </section>
  );
};
