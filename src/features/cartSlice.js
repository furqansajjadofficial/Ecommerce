import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    cartItems: [],
    totalPrice: 0,
    totalItems: 0,
    tax: 0,
    reapeatedItems : 0
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const item = state.cartItems.find((item) => item.id === action.payload.id);

            if (item) {
                item.quantity += 1;
            } else {
                state.cartItems.push({
                    ...action.payload, quantity:
                        1
                });
            }

            state.cartItems.map((item) => {
                if(item.quantity == 1){
                    state.totalPrice += item.price;
                    state.totalItems += 1
                } else {
                    state.totalPrice += item.quantity * item.price;
                    state.totalItems += item.quantity;
                    state.reapeatedItems += 1
                }
                state.tax = state.totalItems * 2;
            })
        },
        decreaseQuantity: (state, action) => {
            state.tax = 0;
            const item = state.cartItems.find((item) => item.id === action.payload.id);

            if (item && item.quantity > 0) {
                item.quantity -= 1;
                state.totalItems -= 1;
                state.totalPrice -= action.payload.price; 
            }
            
            state.tax = state.totalItems * 2;


        },
        removeItem: (state, action) => {
            state.cartItems = state.cartItems.filter((item) => item.id !== action.payload.id);

            state.totalItems = 0;
            state.totalPrice = 0;
            state.tax = 0;

            state.cartItems.map((item) => {
                if(item.quantity == 1){
                    state.totalPrice += item.price;
                    state.totalItems += 1
                } else {
                    state.totalPrice += item.quantity * item.price;
                    state.totalItems += item.quantity;
                    state.reapeatedItems += 1
                }
                state.tax = state.totalItems * 2;
            })
        }
    }
})

export const { addToCart, decreaseQuantity, removeItem } = cartSlice.actions;
export default cartSlice.reducer;


