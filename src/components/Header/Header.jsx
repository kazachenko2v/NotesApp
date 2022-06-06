import React from "react";

import SearchForm from "../SearchForm/SearchForm";
import { GoDiffAdded } from "react-icons/go";

import styles from "./Header.module.css";

const Header = ({ toggleActive }) => {
  return (
    <header className={styles.header_conteiner}>
      <SearchForm />

      <div className={styles.add_conteiner} onClick={toggleActive}>
        <span>Add Note</span>
        <GoDiffAdded title="Add note" size="30px" />
      </div>
    </header>
  );
};

export default Header;
