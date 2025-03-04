import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchBooks = createAsyncThunk("books/fetcBooks", async()=>{
    const response = await axios.get("https://book-management-backend-khaki.vercel.app/myBooks")
    const data = response.data
    return data
})

export const addBookAsync  = createAsyncThunk(
    "add/addBookAsync ",
    async (newBook) => {
      const response = await axios.post(
        "https://book-management-backend-khaki.vercel.app/myBooks",
        newBook
      );
      const data = response.data;
      console.log(data)
      return data;
    }
  );

  export const deleteBookAsync = createAsyncThunk(
    "delete/deleteBookAsync",
    async (bookId) => {
      const response = await axios.delete(
        `https://book-management-backend-khaki.vercel.app/myBooks/${bookId}`
      );
      const data = response.data;
      return data;
    }
  );

export const bookSlice = createSlice({
    name:"Books",
    initialState:{
        books:[],
        status:"idle",
        error:null
    },
    reducers:{},
    extraReducers:(builder)=>{
        //fetch books

        builder.addCase(fetchBooks.pending, (state)=>{
            state.status = "Loading"
        })
        builder.addCase(fetchBooks.fulfilled, (state,action)=>{
            state.status = "Success"
            state.books = action.payload
        })
        builder.addCase(fetchBooks.rejected , (state, action)=>{
            state.status = "error"
            state.error = action.error.message
        })

        //add books
        builder.addCase(addBookAsync.pending, (state)=>{
            state.status = "Loading"
        })
        builder.addCase(addBookAsync.fulfilled, (state,action)=>{
            state.status = "Book added successfully"
            const addedBook = action.payload;
            console.log(addedBook, "addedBook");
        })
        builder.addCase(addBookAsync.rejected , (state, action)=>{
            state.status = "error"
            state.error = action.error.message
        })


        // delete book
         builder.addCase(deleteBookAsync.pending, (state)=>{
            state.status = "Loading"
        })
        builder.addCase(deleteBookAsync.fulfilled, (state,action)=>{
            state.status = "Book deleted successfully"
            const deletedBook = action.payload;
            console.log(deletedBook, "deletedBook");
        })
        builder.addCase(deleteBookAsync.rejected , (state, action)=>{
            state.status = "error"
            state.error = action.error.message
        })
    }
})

export default bookSlice.reducer