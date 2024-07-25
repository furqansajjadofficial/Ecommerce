import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    id : ''
}

const productSlice = createSlice({
    name : 'product',
    initialState,
    reducers : {
        updateDetails : (state , action) => {
             state.id = action.payload
        }
    }
});

export const {updateDetails} = productSlice.actions;
export default productSlice.reducer;