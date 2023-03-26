import React from "react";

import { AiOutlineClose } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";

import { useAppContext } from "../../hooks/useAppContext";

import styles from "./SearchForm.module.css";

const SearchForm: React.FC = () => {
  const search = useAppContext();

  function changeHandler(e: React.ChangeEvent<HTMLInputElement>) {
    search?.searchTags(e.target.value);
  }

  function clickHandler() {
    search?.setSearchQuery("");
  }

  return (
    <label className={styles.search_conteiner}>
      <BsSearch size="20px" className={styles.search_icon} />
      <input
        className={styles.search}
        onChange={changeHandler}
        type="text"
        ref={search?.textInput}
        placeholder="Search..."
      />
      {search?.searchQuery && (
        <AiOutlineClose
          onClick={clickHandler}
          size="20px"
          className={styles.clear_icon}
        />
      )}
    </label>
  );
};

export default SearchForm;
