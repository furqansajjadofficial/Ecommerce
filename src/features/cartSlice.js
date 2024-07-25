import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    cartItems : [],
    totalPrice : 0,
    totalItems : 0,
    tax : 0
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            state.tax = 0;
            const item = state.cartItems.find((item) => item.id === action.payload.id);

            if (item) {
                item.quantity += 1;
            } else {
                state.cartItems.push({ ...action.payload, quantity: 1 });
            }

            state.totalItems += 1;
            state.totalPrice += action.payload.price;

            state.cartItems.map((item) => {
                if(item.quantity == 1){
                    state.tax += 2
                }
                else{
                    state.tax += item.quantity *2
                }
            });
        },
        decreaseQuantity: (state, action) => {
            state.tax = 0;
            const item = state.cartItems.find((item) => item.id === action.payload.id);

            if (item && item.quantity > 0) {
                item.quantity -= 1;
                state.totalItems -= 1;
                state.totalPrice -= action.payload.price;

                state.cartItems.map((item) => {
                    if(item.quantity == 1){
                        state.tax += 2
                    }
                    else{
                        state.tax += item.quantity *2
                    }
                });

            }
        },
        removeItem : (state , action) => {
            state.cartItems = state.cartItems.filter((item) => item.id !== action.payload.id);

            state.totalItems = 0;
            state.totalPrice = 0;
            state.tax = 0;

            state.cartItems.map((item) => {
                state.totalItems += 1;
                state.totalPrice = item.price * item.quantity;
            })

            state.cartItems.map((item) => {
                if(item.quantity == 1){
                    state.tax += 2
                }
                else{
                    state.tax += item.quantity *2
                }
            });
        }
    }
})

export const {addToCart , decreaseQuantity , removeItem} = cartSlice.actions;
export default cartSlice.reducer;


