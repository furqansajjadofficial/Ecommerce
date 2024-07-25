import { configureStore } from "@reduxjs/toolkit"
import themeReducer from '../features/themeSlice'
import authReducer from '../features/authSlice'
import carouselReducer from '../features/carouselSlice'
import filterReducer from '../features/filterSlice'
import cartReducer from '../features/cartSlice'
import productReducer from '../features/productSlice'

export const store = configureStore({
    reducer : {
        theme : themeReducer,
        auth : authReducer,
        carousel : carouselReducer,
        filter : filterReducer,
        cart : cartReducer,
        product : productReducer
    }
})