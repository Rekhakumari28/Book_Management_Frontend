import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import App from "./App.jsx";
import { Provider } from "react-redux";
import store from "./app/store.js";
import AddBook from "./compoments/AddBook.jsx";
import BookDetails from "./compoments/BookDetails.jsx";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/addBook" element={<AddBook />} />
          <Route path="/addBook/:bookId" element={<AddBook />} />
          <Route path="/bookDetail/:bookId" element={<BookDetails />} />
        </Routes>
      </Router>

    </Provider>
  </StrictMode>
);
