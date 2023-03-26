import { useState, useRef, useEffect } from "react";
import { withChildrenProps } from "../components/types";
import SearchContext from "./SearchContext";

const SearchState: React.FC<withChildrenProps> = ({ children }) => {
  let [searchQuery, setSearchQuery] = useState("");

  const textInput = useRef<null | HTMLInputElement>(null);

  const searchTags = (tag: string) => {
    setSearchQuery(tag);
  };

  useEffect(() => {
    if (textInput?.current) {
      textInput.current.value = searchQuery;
    }
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
