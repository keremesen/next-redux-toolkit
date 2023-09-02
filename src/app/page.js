"use client";
import Button from "@/components/Button";
import Input from "@/components/Input";
import Modal from "@/components/Modal";
import ProductCard from "@/components/ProductCard";
import { createDataFunc } from "@/lib/redux/dataSlice";
import { modalFunc } from "@/lib/redux/modalSlice";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Home() {
  const [productInfo, setProductInfo] = useState({
    name: "",
    price: "",
    url: "",
  });

  const { modal } = useSelector((state) => state.modal);
  const { data } = useSelector((state) => state.data);
  const dispatch = useDispatch();
  console.log(data)

  const onChangeFunc = (e) => {
    e.preventDefault();
    if (e.target.name == "url") {
      setProductInfo((prev) => ({
        ...prev,
        [e.target.name]: URL.createObjectURL(e.target.files[0]),
      }));
    } else {
      setProductInfo((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    }
  };
  const buttonFunc = () => {
    dispatch(createDataFunc(productInfo));
    dispatch(modalFunc());
  };
  const contentModal = (
    <>
      <Input
        type={"text"}
        placeholder={"Add Product"}
        name={"name"}
        id={"name"}
        onChange={onChangeFunc}
      />
      <Input
        type={"text"}
        placeholder={"Add Price"}
        name={"price"}
        id={"price"}
        onChange={onChangeFunc}
      />
      <Input
        type={"file"}
        placeholder={"Choose Image"}
        name={"url"}
        id={"url"}
        onChange={onChangeFunc}
      />
      <Button btnText={"Create"} onClick={buttonFunc} />
    </>
  );

  return (
    <main className="flex">
      <div className="flex" >
        {
          data?.map((d,idx)=>(
            <ProductCard key={idx} data={d} />
          ))
        }
      </div>
      {modal && <Modal title={"Create Product"} content={contentModal} />}
    </main>
  );
}
