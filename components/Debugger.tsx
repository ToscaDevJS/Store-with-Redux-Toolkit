"use client";

import { useAppSelector } from "@/redux/hooks";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset } from "@/redux/features/counterSlice";
import { RootState } from "@/redux/store";

export const Debugger = () => {
  const cart = useSelector((state: RootState) => state.cart.value);

  console.log(cart);
  return (
    <div className="bg-gray-700 rounded-2xl p-5 overflow-hidden">
      DEBUGGER
      <p className="font-bold">Cart:</p>
      {JSON.stringify(cart, null, 2)}
      <p className="font-bold">Favorite:</p>
      {/* {JSON.stringify(favorites, null, 2)} */}
    </div>
  );
};
