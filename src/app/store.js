import { configureStore } from "@reduxjs/toolkit";
import { bookSlice } from "../feachers/bookSlice";

export default configureStore({
    reducer:{
        books: bookSlice.reducer
    }
})