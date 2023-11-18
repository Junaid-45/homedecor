import React from "react";
import banner from "../assets/banner.png";
import { ShoppingCart } from "lucide-react";

const Header = () => {
  return (
    <div>
      <div className="w-full flex">
        <nav className="flex justify-between items-center mx-20 my-6 absolute">
          <p className="font-extrabold text-[28px] font-serif">Home Decor</p>
        </nav>
        <aside className="w-1/2 h-[580px] flex-col items-center justify-center text-center">
          <h1 className="font-semibold text-[48px] mt-36 drop-shadow-2xl">
            Berbagai Macam Furniture Tersedia disini
          </h1>
          <p className="text-[18px] mt-4">
            Disini, kalian dapat melihat Semua Furniture yang sangat cocok buat
            anda!
          </p>
          <button className="rounded-full px-6 py-2 bg-black text-white mt-10">
            click me!
          </button>
        </aside>
        <aside className="">
          <ul className="flex gap-4 text-[18px] absolute mt-[32px] mx-60 text-white">
            <li>Showcase</li>
            <li>Catalog</li>
            <li>Delivery</li>
            <li>Reward</li>
            <ShoppingCart />
          </ul>
          <img className="w-[760px] h-[580px]" src={banner} alt="" />
        </aside>
      </div>
    </div>
  );
};

export default Header;
