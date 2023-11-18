import React from "react";
import { Send } from "lucide-react";

const Footer = () => {
  return (
    <div className="w-full h-[300px] bg-[#F9F9F9]">
      <div className="flex justify-center py-6">
        <p className="font-extrabold text-[28px] font-serif">Home Decor</p>
      </div>
      <div className="flex mx-44">
        <div className="px-28">
          <p className="font-semibold text-[20px]">Overview</p>
          <p className="pt-2">Shipping</p>
          <p>Refund</p>
          <p>Promtion</p>
        </div>
        <div className="pr-28">
          <p className="font-semibold text-[20px]">Company</p>
          <p className="pt-2">About</p>
          <p>Career</p>
          <p>Contact Us</p>
        </div>
        <div className="pr-28">
          <p className="font-semibold text-[20px]">Explore</p>
          <p className="pt-2">Terms & conditions</p>
          <p>Privacy Policy</p>
          <p>For Developer</p>
        </div>
        <div>
          <p className="font-semibold text-[20px]">Special Letter</p>
          <div className="flex">
            <input
              className="px-4 py-3 rounded-2xl mt-3"
              type="text"
              placeholder="Your Email Address"
            />
            <button className="px-2 pt-2">
              <Send />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
