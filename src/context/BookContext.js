import { createContext, useReducer } from "react";

export const BooksContext = createContext();

const initialState = {
  books: null,
};
export const booksReducer = (state, action) => {
  switch (action.type) {
    case "SET_BOOKS":
      return {
        books: action.payload,
      };

    case "CREATE_BOOK":
      return {
        books: [action.payload, ...state.books],
      };

    case "SEARCH_BOOK":
      return {
        books: state.books.filter((book) => {
          return book.cover
            .toLowerCase()
            .includes(action.payload.toLowerCase());
        }),
      };

    case "DELETE_BOOK":
      return {
        books: state.books.filter((book) => {
          return book._id !== action.payload._id;
        }),
      };

    default:
      return state;
  }
};

export const BookContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(booksReducer, initialState);

  return (
    <BooksContext.Provider value={{ ...state, dispatch }}>
      {children}
    </BooksContext.Provider>
  );
};
