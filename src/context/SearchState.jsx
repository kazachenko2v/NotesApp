import { useState, useRef, useEffect } from "react";
import SearchContext from "./SearchContext";

const SearchState = ({ children }) => {
  let [searchQuery, setSearchQuery] = useState("");

  const textInput = useRef(null);

  const searchTags = (tag) => {
    setSearchQuery(tag);
  };

  useEffect(() => {
    textInput.current.value = searchQuery;
  }, [searchQuery]);

  return (
    <SearchContext.Provider
      value={{ searchQuery, textInput, setSearchQuery, searchTags }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export default SearchState;
