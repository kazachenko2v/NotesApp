import React, { useState, useEffect, useContext } from "react";

import Header from "../components/Header/Header";
import NotesList from "../components/NoteList/NotesList";
import NotesModForm from "../components/notesForms/NotesModForm";
import Modal from "../components/UI/Modal/Modal";

import { setLocalStorage } from "../utils/localStorage";

import NotesContext from "../reducer/NotesContext";
import SearchState from "./../context/SearchState";

import styles from "./Main.module.css";
import "../styles/reset.css";
import "../styles/App.css";

const MainPage = () => {
  const { notes, addNote } = useContext(NotesContext);

  useEffect(() => {
    setLocalStorage("notes", notes);
  }, [notes]);

  let [isActive, setActive] = useState(false);

  const toggleActive = () => {
    setActive(!isActive);
  };

  return (
    <div className={styles.main_container}>
      <SearchState>
        <Header toggleActive={toggleActive} />
        <NotesList />
      </SearchState>

      <Modal isActive={isActive}>
        <NotesModForm
          item={{ title: "", body: "" }}
          toggleActive={toggleActive}
          noteModFunc={addNote}
        />
      </Modal>
    </div>
  );
};

export default MainPage;
