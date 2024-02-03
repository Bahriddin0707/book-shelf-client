import { BooksContext } from "../context/BookContext";
import { useContext } from "react";

export const useBooksContext = () => {
  const context = useContext(BooksContext);

  if (!context) {
    throw Error(
      "useWorkoutsContext must be used inside an WorkoutContextProvider"
    );
  }

  return context;
};
