import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentCarousel: 0,
    totalCarousels: 4 
};

const carouselSlice = createSlice({
    name: 'carousel',
    initialState,
    reducers: {
        nextSlide: (state) => {
            state.currentCarousel = (state.currentCarousel + 1) % state.totalCarousels;
        },
        prevSlide: (state) => {
            state.currentCarousel = (state.currentCarousel - 1 + state.totalCarousels) % state.totalCarousels;
        },
        dotSlide: (state, action) => {
            state.currentCarousel = action.payload;
        }
    }
});

export const { nextSlide, prevSlide, dotSlide } = carouselSlice.actions;
export default carouselSlice.reducer;
