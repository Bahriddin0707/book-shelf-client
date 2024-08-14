import { createContext, useReducer } from "react";

export const SearchContext = createContext();

export const searchReducer = (state, action) => {
  switch (action.type) {
    case "SET_SEARCH":
      return {
        search: action.payload,
      };
    default:
      return state;
  }
};

export const SearchContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(searchReducer, {
    search: "",
  });

  return (
    <SearchContext.Provider value={{ ...state, dispatch }}>
      {children}
    </SearchContext.Provider>
  );
};
