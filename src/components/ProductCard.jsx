import { deleteDataFunc, updateDataFunc } from "@/lib/redux/dataSlice";
import { modalFunc } from "@/lib/redux/modalSlice";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import { useDispatch } from "react-redux";

const ProductCard = ({ data }) => {
  const [openEdit, setOpenEdit] = useState(false);
  const router = useRouter();

  const dispatch = useDispatch();

  const updateFunc = () => {
    dispatch(modalFunc());
    setOpenEdit(false);
    router.push(`/?update=${data?.id}`);
  };

  return (
    <div className="w-[200px] h-[200px] relative m-2 rounded-md ">
      <Image
        src={data.url}
        height={64}
        width={64}
        alt="images"
        className="w-full h-full rounded-md"
      />
      <div className=" flex flex-col absolute left-0 bottom-0 bg-violet-600 bg-opacity-90 py-0 px-2 rounded-b-md text-white  w-full">
        <span className="text-lg font-semibold"> {data?.name} </span>
        <span> {data?.price}$ </span>
      </div>
      <div
        className="absolute top-0 right-2 cursor-pointer"
        onClick={() => setOpenEdit(!openEdit)}
      >
        <BsThreeDots color="white" size={24} />
      </div>
      {openEdit && (
        <div className=" p-2 rounded-sm absolute top-5 right-1 text-sm bg-black border border-white text-white">
          <div
            className="cursor-pointer"
            onClick={() => dispatch(deleteDataFunc(data?.id))}
          >
            Delete
          </div>
          <div className="cursor-pointer" onClick={updateFunc}>
            Edit
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductCard;
