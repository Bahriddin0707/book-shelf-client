import { SearchContext } from "../context/SearchContext";
import { useContext } from "react";

export const useSearchContext = () => {
  const context = useContext(SearchContext);

  if (!context) {
    throw Error("useAuthContext must be used inside an AuthContextProvider");
  }

  return context;
};
