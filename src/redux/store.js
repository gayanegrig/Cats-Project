import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "./catSlice";
import addReducer from "./addTenSlice";

export const store = configureStore({
    reducer: {
        categoryAction: categoryReducer,
        addTen: addReducer,
    },
});
