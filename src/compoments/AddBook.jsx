import React, { useState } from "react";
import { Header } from "./Header";
import { useDispatch } from "react-redux";
import { addBookAsync } from "../feachers/bookSlice";
import { useNavigate } from "react-router-dom";

const AddBook = () => {
  const [bookName, setBookName] = useState("");
  const [author, setAuthor] = useState("");

  const [genre, setGener] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBook = {
      bookName,
      author,
      genre,
    };
    dispatch(addBookAsync(newBook));
    setBookName("");
    setAuthor("");
    setGener("");
    navigate("/");
  };
  return (
    <>
      <Header />
      <div className="container">
        <h1 className="my-3">Add Book</h1>
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
          <button className="btn btn-primary my-2" type="submit">
            Add
          </button>
        </form>
      </div>
    </>
  );
};

export default AddBook;
