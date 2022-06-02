import React from "react";

import SearchForm from "../SearchForm/SearchForm";
import { GoDiffAdded } from "react-icons/go";
import { BsSearch } from "react-icons/bs";

import styles from "./Header.module.css";

const Header = ({ toggleActive }) => {
  return (
    <header className={styles.header_conteiner}>
      <label className={styles.search_conteiner}>
        <BsSearch size="20px" className={styles.search_icon} />
        <SearchForm />
      </label>

      <div className={styles.add_conteiner} onClick={toggleActive}>
        <span>Add Note</span>
        <GoDiffAdded title="Add note" size="30px" />
      </div>
    </header>
  );
};

export default Header;
