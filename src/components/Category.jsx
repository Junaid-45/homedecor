import React from "react";
import item1 from "../assets/item1.png";
import item2 from "../assets/item2.png";
import item3 from "../assets/item3.png";
import item4 from "../assets/item4.png";

const Category = () => {
  return (
    <div className="w-full h-[704px] bg-[#F9F9F9]">
      <div className="font-semibold text-[28px] w-[600px] text-left">
        <p className="pt-16 pl-36">
          Browse The All Furniture That We Designed For You
        </p>
      </div>
      <div className="flex ml-[150px]">
        <div className="mt-5 mb-5">
          <div className="mb-5">
            <img src={item1} alt="" />
          </div>
          <div>
            <img src={item2} alt="" />
          </div>
        </div>
        <div className="mt-2 mx-2">
          <img src={item3} alt="" />
        </div>
        <div className="mt-2">
          <img src={item4} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Category;
