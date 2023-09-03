"use client";
import Button from "@/components/Button";
import Input from "@/components/Input";
import Modal from "@/components/Modal";
import ProductCard from "@/components/ProductCard";
import { createDataFunc, updateDataFunc } from "@/lib/redux/dataSlice";
import { modalFunc } from "@/lib/redux/modalSlice";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "next/navigation";

export default function Home() {
  const [productInfo, setProductInfo] = useState({
    name: "",
    price: "",
    url: "",
  });
  const { modal } = useSelector((state) => state.modal);
  const { data } = useSelector((state) => state.data);
  const dispatch = useDispatch();

  const router = useRouter();
  const searchParams = useSearchParams();

  const search = searchParams.get("update");

  useEffect(() => {
    if (!modal && search) {
      router.push("/");
    }

    setProductInfo(data.find((d) => d.id == search));
  }, [modal, search]);

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
  const buttonCreateFunc = () => {
    dispatch(createDataFunc({ ...productInfo, id: data.length + 1 }));
    dispatch(modalFunc());
  };

  const buttonUpdateFunc = () => {
    dispatch(updateDataFunc({ ...productInfo, id: search }));
    dispatch(modalFunc());
    router.push("/");
  };
  const contentModal = (
    <>
      <Input
        value={productInfo?.name}
        type={"text"}
        placeholder={"Product Name"}
        name={"name"}
        id={"name"}
        onChange={onChangeFunc}
      />
      <Input
        value={productInfo?.price}
        type={"text"}
        placeholder={"Product Price"}
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
      <Button
        btnText={search ? "Edit" : "Create"}
        onClick={search ? buttonUpdateFunc : buttonCreateFunc}
      />
    </>
  );

  return (
    <main className="flex">
      <div className="flex flex-wrap items-center">
        {data?.map((d, idx) => (
          <ProductCard key={idx} data={d} />
        ))}
      </div>
      {modal && (
        <Modal
          title={search ? "Edit Product" : "Create Product"}
          content={contentModal}
        />
      )}
    </main>
  );
}
