import React, { useState } from "react";
import { Header } from "./Header";
import { useDispatch } from "react-redux";
import { addBookAsync } from "../feachers/bookSlice";
import { useNavigate } from "react-router-dom";

const AddBook = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publishedYear, setPublishedYear] = useState(0);
  const [genre, setGener] = useState("");
  const [rating, setRating] = useState(0);
  const [summary, setSummary] = useState("");
  const [country, setCountry] = useState("");
  const [coverImageUrl, setCoverImageUrl] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleGener = (event) => {
    const { checked, value } = event.target;
    if (checked) {
      setGener((prev) => [...prev, value]);
    } else {
      setGener((prev) => prev.filter((prev) => prev != value));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBook = {
      title,
      author,
      publishedYear: parseInt(publishedYear),
      genre,
      rating: parseInt(rating),
      summary,
      country,
      coverImageUrl
    };
    dispatch(addBookAsync(newBook));
    setTitle("");
    setAuthor("");
    setPublishedYear("");
    setGener("");
    setRating("");
    setSummary("");
    setCountry("");
    setCoverImageUrl("")
    // navigate("/");
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
            placeholder="Title"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
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
            type="Number"
            placeholder="Publish Year"
            value={publishedYear}
            onChange={(event) => setPublishedYear(event.target.value)}
          />
          <br />
          <label>Genre: </label>{" "}
          <label>
            <input
              className="form-check-input"
              type="checkbox"
              name="genre"
              value="Fiction"
              checked={genre.includes("Fiction")}
              onChange={handleGener}
            />{" "}
            Fiction{"   "}
          </label>{" "}
          <label>
            <input
              className="form-check-input"
              type="checkbox"
              name="genre"
              value="Mystery"
              checked={genre.includes("Mystery")}
              onChange={handleGener}
            />{" "}
            Mystery{"   "}
          </label>{" "}
          <label>
            <input
              className="form-check-input"
              type="checkbox"
              name="genre"
              value="Business"
              checked={genre.includes("Business")}
              onChange={handleGener}
            />{" "}
            Business
          </label>
          <br />
          <br />
          <input
            style={{ width: "50%" }}
            className="form-control"
            type="number"
            placeholder="Rating"
            value={rating}
            onChange={(event) => setRating(event.target.value)}
          />
          <br />
          <input
            style={{ width: "50%" }}
            className="form-control"
            type="text"
            placeholder="Summary"
            value={summary}
            onChange={(event) => setSummary(event.target.value)}
          />
          <br />
          <input
            style={{ width: "50%" }}
            className="form-control"
            type="text"
            placeholder="Country"
            value={country}
            onChange={(event) => setCountry(event.target.value)}
          />
          <br />
          <input
            style={{ width: "50%" }}
            className="form-control"
            type="text"
            placeholder="Cover Image Url"
            value={coverImageUrl}
            onChange={(event) => setCoverImageUrl(event.target.value)}
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
