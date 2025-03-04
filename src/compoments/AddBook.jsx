import React, { useEffect, useState } from "react";
import { Header } from "./Header";
import { useDispatch, useSelector } from "react-redux";
import {
  addBookAsync,
  fetchBooks,
  updateBookAsync,
} from "../feachers/bookSlice";
import { useParams } from "react-router-dom";

const AddBook = () => {
  const [bookName, setBookName] = useState("");
  const [author, setAuthor] = useState("");
  const [genre, setGener] = useState("");
  const [language, setLanguage] = useState("");
  const [rating, setRating] = useState("");
  const [publishedYear, setPublishYear] = useState("");

  const dispatch = useDispatch();
  const bookId = useParams();
  const books = useSelector((state) => state.books.books);

  const bookExistAlready =
    books && bookId && books.find((book) => book._id == bookId.bookId);
  const existing = Boolean(bookExistAlready);

  useEffect(() => {
    dispatch(fetchBooks());
  }, []);

  useEffect(() => {
    if (existing) {
      setBookName(bookExistAlready.bookName || "");
      setAuthor(bookExistAlready.author || "");
      setGener(bookExistAlready.genre || "");
      setLanguage(bookExistAlready.language || "");
      setRating(bookExistAlready.rating || "");
      setPublishYear(bookExistAlready.publishedYear || "");
    }
  }, [existing, bookExistAlready]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!existing) {
      const newBook = {
        bookName,
        author,
        genre,
      };
      dispatch(addBookAsync(newBook));
      setBookName("");
      setAuthor("");
      setGener("");
    } else {
      const updateBook = {
        bookName,
        author,
        genre,
        language,
        rating: parseInt(rating),
        publishedYear: parseInt(publishedYear),
      };
      dispatch(
        updateBookAsync({ bookId: bookId.bookId, updateBook: updateBook })
      );
      setBookName("");
      setAuthor("");
      setGener("");
      setLanguage("");
      setRating("");
      setPublishYear("");
    }
  };
  return (
    <>
      <Header />
      <div className="container">
      <h2 className="py-3"> {existing ? "Edit Student Detail" : "Add Student"}</h2>
        <form onSubmit={handleSubmit}>
          <input
            style={{ width: "50%" }}
            className="form-control "
            type="text"
            placeholder="Book Name"
            value={bookName}
            onChange={(event) => setBookName(event.target.value)}
          />
          <br />
          <input
            style={{ width: "50%" }}
            className="form-control"
            type="text"
            placeholder="Author"
            value={author}
            onChange={(event) => setAuthor(event.target.value)}
          />

          <br />
          <input
            style={{ width: "50%" }}
            className="form-control"
            type="text"
            placeholder="Genre"
            value={genre}
            onChange={(event) => setGener(event.target.value)}
          />
          <br />
          {bookExistAlready ? (
            <>
              <input
                style={{ width: "50%" }}
                className="form-control"
                type="text"
                placeholder="Language"
                value={language}
                onChange={(event) => setLanguage(event.target.value)}
              />
              <br />
              <input
                style={{ width: "50%" }}
                className="form-control"
                type="Number"
                placeholder="Rating"
                value={rating}
                onChange={(event) => setRating(event.target.value)}
              />
              <br />
              <input
                style={{ width: "50%" }}
                className="form-control"
                type="text"
                placeholder="Publish Year"
                value={publishedYear}
                onChange={(event) => setPublishYear(event.target.value)}
              />
            </>
          ) : (
            ""
          )}

         
          <button className="btn btn-primary my-2" type="submit">
            {existing ? "Update" : "Add"}
          </button>
        </form>
      </div>
    </>
  );
};

export default AddBook;
