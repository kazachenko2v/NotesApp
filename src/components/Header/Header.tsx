import SearchForm from "../SearchForm/SearchForm";
import { GoDiffAdded } from "react-icons/go";

import { HeaderProps } from "../types";
import styles from "./Header.module.css";

const Header: React.FC<HeaderProps> = ({ toggleActive }) => {
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
