"use client"
import { store } from "@/lib/redux/store";
import { Provider } from "react-redux";

export const Providers = ({children}) => {
  return <Provider store={store}>{children}</Provider>;
};
