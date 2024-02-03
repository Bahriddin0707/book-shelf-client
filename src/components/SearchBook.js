import { useState } from "react";
import { useSearchContext } from "../hooks/useSearchContext";

function SearchBook() {
  const { dispatch } = useSearchContext();

  return (
    <div className="search-book">
      <input
        type="text"
        placeholder="Search for any training you want"
        onChange={(e) =>
          dispatch({ type: "SET_SEARCH", payload: e.target.value })
        }
      />
    </div>
  );
}

export default SearchBook;
