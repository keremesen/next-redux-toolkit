"use client"
import React from "react";

import { MdPostAdd } from "react-icons/md";

import { modalFunc } from "@/lib/redux/modalSlice";
import { useDispatch } from "react-redux";
import { searchDataFunc, sortingDataFunc } from "@/lib/redux/dataSlice";

const Header = () => {
  const dispatch = useDispatch();
  return (
    <div className="flex items-center justify-between  bg-gradient-to-r from-violet-400 to-violet-500  text-white px-4 py-5">
      <h1 className="text-3xl font-semibold">Lorem</h1>
      <div className="flex items-center space-x-5">
        <select
          onChange={(e) => dispatch(sortingDataFunc(e.target.value))}
          className="text-black h-10 max-md:w-1/4 rounded-lg"
          name=""
          id=""
        >
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>
        <input
        onChange={(e) => dispatch(searchDataFunc(e.target.value))}
          className="h-10 rounded-lg px-4 max-md:w-1/3 text-black outline-none"
          type="text"
          placeholder="Search..."
        />
        <div
          onClick={() => dispatch(modalFunc())}
          className="flex items-center justify-center bg-violet-800 w-10 h-10 rounded-full cursor-pointer"
        >
          <MdPostAdd size={24} />
        </div>
      </div>
    </div>
  );
};

export default Header;
