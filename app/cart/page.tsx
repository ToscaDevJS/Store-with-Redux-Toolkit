"use client";
import { Debugger } from "@/components/Debugger";
import { CartProductProps, ProductProps, Productlist } from "@/mocks/products";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import {
  addProductToCart,
  minusFromCart,
  removeFromCart,
  removeAllFromCart,
} from "@/redux/features/cartSlice";

const page = () => {
  return (
    <div>
      <RemoveAllFromCart />
      <section>
        {Productlist.slice(0, 3).map((data, index) => (
          <div key={index} className="flex justify-center items-center gap-2">
            <p className="font-semibold">{data.title}</p>
            <p> price:{data.price}</p>
            <AddToCart {...data} quantity={0} />
            <MinusFromCart {...data} quantity={0} />
            <RemoveFromCart {...data} quantity={0} />
            {/* <ToggleFavorite {...data} isFavorite /> */}
          </div>
        ))}
      </section>
      <Debugger />
    </div>
  );
};

export default page;

function AddToCart(items: CartProductProps) {
  const dispatch = useAppDispatch();
  return (
    <button
      onClick={() => {
        dispatch(addProductToCart(items));
      }}
    >
      Add
    </button>
  );
}
function MinusFromCart(items: CartProductProps) {
  const dispatch = useAppDispatch();
  return (
    <button
      onClick={() => {
        dispatch(minusFromCart(items));
      }}
    >
      Minus
    </button>
  );
}
function RemoveFromCart(items: CartProductProps) {
  const dispatch = useAppDispatch();
  return (
    <button
      onClick={() => {
        dispatch(removeFromCart(items));
      }}
    >
      Remove
    </button>
  );
}
function ToggleFavorite(params: any) {
  return <button>Favorite</button>;
}

function RemoveAllFromCart() {
  const dispatch = useAppDispatch();
  return (
    <button onClick={() => dispatch(removeAllFromCart())}>
      removeAllFromCart
    </button>
  );
}
