import React from "react";

import Header from "../components/Header/Header";
import NotesList from "../components/NoteList/NotesList";
import NotesModForm from "../components/NotesModForm/NotesModForm";
import Modal from "../components/UI/Modal/Modal";

import { useActionCreators } from "../hooks/useActionCreators";
import { notesActions } from "../redux/notes/slice";
import useModal from "../hooks/useModal";

import SearchState from "./../context/SearchState";

import styles from "./Main.module.css";
import "../styles/reset.css";
import "../styles/App.css";

const MainPage = () => {
  const actions = useActionCreators(notesActions);

  const [isShowing, toggle] = useModal();

  return (
    <div className={styles.main_container}>
      <SearchState>
        <Header toggleActive={toggle} />
        <NotesList />
      </SearchState>

      {isShowing && (
        <Modal>
          <NotesModForm
            item={{ id: Date.now(), title: "", body: "", tags: [] }}
            toggleActive={toggle}
            noteModFunc={actions.addNote}
          />
        </Modal>
      )}
    </div>
  );
};

export default MainPage;
