import { createSlice } from "@reduxjs/toolkit";

export const catsSlice = createSlice({
    name: "category",
    initialState: { value: null },
    reducers: {
        categoryAction: (state, action) => {
            state.value = action.payload;
        },
    },
});

// Action creators are generated for each case reducer function
export const { categoryAction } = catsSlice.actions;
export default catsSlice.reducer;
