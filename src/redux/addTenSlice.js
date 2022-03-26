import { createSlice } from "@reduxjs/toolkit";

export const catsAddSlice = createSlice({
    name: "addTen",
    initialState: { value: 10 },
    reducers: {
        addTen: (state, action) => {
            state.value = action.payload;
        },
    },
});

// Action creators are generated for each case reducer function
export const { addTen } = catsAddSlice.actions;
export default catsAddSlice.reducer;
