import { configureStore } from "@reduxjs/toolkit";
import { booksSlice } from "./features/books/BookSlice";

const store = configureStore({
    reducer: {
        booksReducer: booksSlice.reducer,
    }
})
export default store