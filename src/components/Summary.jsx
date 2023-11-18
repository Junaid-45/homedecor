import React from "react";
import sum1 from "../assets/sum1.png";
import sum2 from "../assets/sum2.png";
import sum3 from "../assets/sum3.png";
import sum4 from "../assets/sum4.png";

const Summary = () => {
  return (
    <div className="w-full h-[704px]">
      <div className="font-semibold text-[28px] w-[728px] items-center mx-auto my-12 text-center">
        <p>Berbagai macam Barang-Barang yang baru saja Tiba di Home Decor</p>
      </div>
      <div className="flex mx-16">
        <img className="px-12" src={sum1} alt="" />

        <img src={sum2} alt="" />

        <img className="px-12" src={sum3} alt="" />

        <img className="px-" src={sum4} alt="" />
      </div>
    </div>
  );
};

export default Summary;
