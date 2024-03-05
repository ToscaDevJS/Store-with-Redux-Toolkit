"use client";
import { Debugger } from "@/components/Debugger";
import { Productlist } from "@/mocks/products";
import { increment, decrement, reset } from "@/redux/features/counterSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";

export default function Home() {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();
  return (
    <main>
      REDUX
      <div>{count}</div>
      <div className="flex space-x-4 ">
        <button
          onClick={() => {
            dispatch(increment());
          }}
        >
          increment +
        </button>
        <button
          onClick={() => {
            dispatch(decrement());
          }}
        >
          decrement -
        </button>
        <button
          onClick={() => {
            dispatch(reset());
          }}
        >
          reset
        </button>
      </div>
    </main>
  );
}
