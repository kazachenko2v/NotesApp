import React, { useState, useEffect, useContext } from "react";
import NotesList from "../components/NoteList/NotesList";
import AddNotesForm from "../components/notesForms/AddNotesForm";
import AddNotesFormtoggleActiveWithIndex from "../components/notesForms/AddNotesFormtoggleActiveWithIndex";
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
  let [isActiveWithIndex, setActiveWithIndex] = useState(false);

  const toggleActive = () => {
    setActive(!isActive);
  };

  const toggleActiveWithIndex = () => {
    setActiveWithIndex(!isActiveWithIndex);
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
      <GoDiffAdded
        title="Add note"
        size="30px"
        color="red"
        onClick={toggleActiveWithIndex}
      />
      <Modal isActive={isActive}>
        <AddNotesForm
          item={{ title: "", body: "" }}
          toggleActive={toggleActive}
        />
      </Modal>
      <Modal isActive={isActiveWithIndex}>
        <AddNotesFormtoggleActiveWithIndex
          item={{ title: "", body: "" }}
          toggleActiveWithIndex={toggleActiveWithIndex}
        />
      </Modal>
    </>
  );
};

export default MainPage;
