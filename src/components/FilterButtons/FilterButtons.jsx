import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Cloth from "../../assets/images/clothes.jpg";

function FilterButtons() {
  const buttons = [
    "All",
    "Hoodies",
    "Dresses",
    "Suits",
    "Shoes",
    "T-Shirts",
    "Jeans",
    "Jackets",
    "Bags",
  ];
  const [discount, setDiscount] = useState("10");

  return (
    <>
      <div className="flex justify-center py-4 items-center flex-wrap">
        {buttons.map((button, index) => (
          <button
            key={index}
            className="mr-4 bg-red-800 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          >
            {button}
          </button>
        ))}
      </div>
      <div className="dark:bg-gray-600 w-[50%] mx-auto my-5 bg-gray-600 ">
        <h1 className="dark:text-red-800 text-center text-3xl text-red-800">
          Sales upto {Number(discount)}% Shop Now
        </h1>
      </div>
      <div className="text-center">
        <img
          className="w-[90%] mx-auto h-[500px] my-5"
          src={Cloth}
          alt="Shirt"
        />
      </div>
    </>
  );
}

export default FilterButtons;
