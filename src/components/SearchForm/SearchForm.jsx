import React, { useContext } from "react";
import SearchContext from "../../context/SearchContext";

import styles from "./SearchForm.module.css";

const SearchForm = ({}) => {
  const { searchTags, textInput } = useContext(SearchContext);

  function clickHandler(e) {
    searchTags(e.target.value);
  }

  return (
    <input
      className={styles.search}
      onChange={(e) => clickHandler(e)}
      type="text"
      ref={textInput}
      placeholder="Search..."
    />
  );
};

export default SearchForm;
