import { createSlice } from "@reduxjs/toolkit";
import { storeData } from "../assets/data/dummyData";

const initialState = {
    data : storeData
}

const filterSlice = createSlice({
    name : 'filter',
    initialState,
    reducers : {
        filter : (state , action) => {
            state.data = storeData.filter((item) => item.type == action.payload)
        }
    } 
})

export const {filter} = filterSlice.actions;
export default filterSlice.reducer;