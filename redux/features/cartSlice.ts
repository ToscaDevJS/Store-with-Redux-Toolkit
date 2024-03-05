import { CartProductProps } from "@/mocks/products";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type CartStore = {
    value: CartProductProps[];
};

const initialState: CartStore = {
    value: [],
};

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addProductToCart: (state, product: PayloadAction<CartProductProps>) => {
            const existingProduct = state.value.find((item) => item.id === product.payload.id);
            if (existingProduct) {
                const newCart = state.value.map((item) =>
                    item.id === product.payload.id ? { ...item, quantity: item.quantity + 1 } : item
                );
                return { ...state.value, value: newCart };
                // return (state.value = newCart);
            } else {
                return { ...state.value, value: [...state.value, { ...product.payload, quantity: 1 }] };
            }
        },
        minusFromCart: (state, product: PayloadAction<CartProductProps>) => {
            const existingProduct = state.value.find((item) => item.id === product.payload.id);

            if (existingProduct && existingProduct.quantity > 1) {
                const newCart = state.value.map((item) =>
                    item.id === product.payload.id ? { ...item, quantity: item.quantity - 1 } : item
                );
                return { value: newCart }
            } else if (existingProduct) {
                // Si la cantidad es 1, mantén al menos 1 en el carrito
                const newCart = state.value.map((item) =>
                    item.id === product.payload.id ? { ...item, quantity: 1 } : item
                );
                return { value: newCart }
            }
        },
        removeFromCart: (state, product: PayloadAction<CartProductProps>) => {
            const existingProduct = state.value.find((item) => item.id === product.payload.id);
            console.log(existingProduct, "render");
            if (existingProduct) {
                const newCart = state.value.filter((item) => item.id !== product.payload.id);
                return { value: newCart }
            }
        },
        removeAllFromCart: () => {
            return initialState
        }
    },
});

export const {
    addProductToCart, minusFromCart, removeFromCart, removeAllFromCart
} = cartSlice.actions;

export default cartSlice.reducer;