import React, { useContext } from "react";
import SearchContext from "../context/SearchContext";

const SearchForm = ({}) => {
  const { setSearchQuery, textInput } = useContext(SearchContext);

  return (
    <input
      onChange={(e) => setSearchQuery(e.target.value)}
      type="text"
      ref={textInput}
    />
  );
};

export default SearchForm;
