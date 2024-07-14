import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentCarousel : 0,
    totalCarousels : 4
}

const carouselSlice = createSlice({
    name : 'carousel',
    initialState,
    reducers : {
        nextSlide : (state , action) =>{
            state.currentCarousel = action.payload > state.totalCarousels ? 0 : action.payload
        },
        prevSlide : (state , action) =>{
            state.currentCarousel = action.payload < 0 ? state.totalCarousels : action.payload
        },
        dotSlide : () => {}
    }
})

export const {nextSlide , prevSlide , dotSlide} = carouselSlice.actions;
export default carouselSlice.reducer;