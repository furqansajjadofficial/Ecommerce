import { configureStore } from "@reduxjs/toolkit";
import themeReducer from '../features/themeSlice';
import authReducer from '../features/authSlice'
import carouselReducer from '../features/carouselSlice'

export const store = configureStore({
    reducer : {
        theme : themeReducer,
        auth : authReducer,
        carousel : carouselReducer,
    }
})