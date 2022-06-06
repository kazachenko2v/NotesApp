import React, { useContext } from "react";
import SearchContext from "../../context/SearchContext";

import { AiOutlineClose } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";

import styles from "./SearchForm.module.css";

const SearchForm = ({}) => {
  const { searchQuery, setSearchQuery, searchTags, textInput } =
    useContext(SearchContext);

  function clickHandler(e) {
    searchTags(e.target.value);
  }

  return (
    <label className={styles.search_conteiner}>
      <BsSearch size="20px" className={styles.search_icon} />
      <input
        className={styles.search}
        onChange={(e) => clickHandler(e)}
        type="text"
        ref={textInput}
        placeholder="Search..."
      />
      {searchQuery && (
        <AiOutlineClose
          onClick={() => setSearchQuery("")}
          size="20px"
          className={styles.clear_icon}
        />
      )}
    </label>
  );
};

export default SearchForm;
