// Inside a React functional component
import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

const authSlice = createSlice({
    name: "auth",
    initialState: {
        logined: false,
        userData: {
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
        }
    },
    reducers: {
        login: (state, action) => {
            state.logined = true;
            state.userData = action.payload.userData;
        },
        logout: (state) => {
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

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
