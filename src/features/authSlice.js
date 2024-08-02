import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: "auth",
    initialState: {
        logined: true,
        userData: {
            name: '',
            email: '',
            number: '',
            cart: [], 
            seller: false,
            BuyedProducts : [],
            selledProducts : [],
            paymentData: {
                verified: false,
                details: {}
            }
        }
    },
    reducers: {
        login: (state, action) => {
            state.logined = true;
            state.userData = action.payload;
            console.log(state.userData);
        },
        logout: (state) => {
            console.log('render');
            state.logined = false;
            state.userData = {
                name: '',
                email: '',
                number: '',
                cart: [],
                buyer: true,
                seller: false,
                paymentData: {
                    verified: false,
                    details: {}
                }
            };
        }
    }
});


export const { login , logout} = authSlice.actions;
export default authSlice.reducer