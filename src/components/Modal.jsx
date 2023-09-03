import { modalFunc } from "@/lib/redux/modalSlice";
import { useRouter } from "next/navigation";
import React from "react";
import { GrClose } from "react-icons/gr";
import { useDispatch } from "react-redux";

const Modal = ({ title, content }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  return (
    <div className="fixed bg-black bg-opacity-30  top-0 right-0 bottom-0 left-0 w-full h-screen flex items-center justify-center">
      <div className="w-1/3 bg-white shadow-lg rounded-md p-4">
        <div className="border-b py-3 flex items-center justify-between">
          <span className="text-2xl"> {title} </span>
          <GrClose
            className="cursor-pointer"
            onClick={() => dispatch(modalFunc())}
            size={24}
          />
        </div>
        {content}
      </div>
    </div>
  );
};

export default Modal;
