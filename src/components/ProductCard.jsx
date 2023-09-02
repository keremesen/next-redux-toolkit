import Image from "next/image";
import React from "react";

const ProductCard = ({ data }) => {
  return (
    <div className="w-[200px] h-[200px] relative m-2 rounded-md ">
      <Image
        src={data.url}
        height={128}
        width={128}
        alt="images"
        className="w-full h-full rounded-md"
      />
      <div className=" flex flex-col absolute left-0 bottom-0 bg-indigo-600 text-white  w-full">
        <span className="text-lg font-semibold" > {data?.name} </span>
        <span> {data?.price}$ </span>
      </div>
    </div>
  );
};

export default ProductCard;
