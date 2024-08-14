import { useState } from "react";
import { useSearchContext } from "../hooks/useSearchContext";

function SearchBook() {
  const [searchTerm, setSearchTerm] = useState("");
  const { dispatch } = useSearchContext();

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);

    if (dispatch) {
      dispatch({ type: "SET_SEARCH", payload: searchTerm });
    } else {
      console.error("Dispatch function is not available");
    }
  };

  return (
    <div className="search-book">
      <input
        type="text"
        value={searchTerm}
        placeholder="Search for book you want"
        onChange={handleSearchChange}
      />
    </div>
  );
}

export default SearchBook;
