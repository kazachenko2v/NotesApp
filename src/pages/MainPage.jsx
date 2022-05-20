import React, { useState, useEffect, useContext } from "react";
import NotesList from "../components/NoteList/NotesList";
import AddNotesForm from "../components/notesForms/AddNotesForm";
import SearchForm from "./../components/SearchForm";
import Modal from "../components/UI/Modal";
import { setLocalStorage } from "../utils/localStorage";
import { GoDiffAdded } from "react-icons/go";

import NotesContext from "../reducer/NotesContext";
import SearchState from "./../context/SearchState";

import "../styles/reset.css";
import "../styles/App.css";

const MainPage = () => {
  const { notes } = useContext(NotesContext);

  useEffect(() => {
    setLocalStorage("notes", notes);
  }, []);

  useEffect(() => {
    setLocalStorage("notes", notes);
  }, [notes]);

  let [isActive, setActive] = useState(false);

  const toggleActive = () => {
    setActive(!isActive);
  };

  return (
    <>
      <SearchState>
        <SearchForm />
        <NotesList />
      </SearchState>
      <GoDiffAdded
        title="Add note"
        size="30px"
        color="white"
        onClick={toggleActive}
      />
      <Modal isActive={isActive}>
        <AddNotesForm
          item={{ title: "", body: "" }}
          toggleActive={toggleActive}
        />
      </Modal>
    </>
  );
};

export default MainPage;
