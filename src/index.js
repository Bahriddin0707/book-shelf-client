import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

// context
import { BookContextProvider } from "./context/BookContext";
import { AuthContextProvider } from "./context/AuthContext";
import { SearchContextProvider } from "./context/SearchContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <SearchContextProvider>
        <BookContextProvider>
          <App />
        </BookContextProvider>
      </SearchContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
