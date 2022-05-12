import React, { useState, useEffect, useRef } from "react";
import NotesList from "../components/NoteList/NotesList";
import AddNotesForm from "../components/notesForms/AddNotesForm";
import Modal from "../components/UI/Modal";
import { getLocalStorage, setLocalStorage } from "../utils/localStorage";
import { GoDiffAdded } from "react-icons/go";

import initNotes from "../notes/notes";
import "../styles/reset.css";
import "../styles/App.css";

const MainPage = () => {
  const [notes, setNotesList] = useState(() => {
    if (Object.keys(getLocalStorage("notes")).length !== 0) {
      return getLocalStorage("notes");
    }
    return initNotes;
  });

  useEffect(() => {
    setLocalStorage("notes", initNotes);
  }, []);

  useEffect(() => {
    setLocalStorage("notes", notes);
  }, [notes]);

  let [isActive, setActive] = useState(false);

  const toggleActive = () => {
    setActive(!isActive);
  };

  const addNote = (note) => {
    setNotesList([...notes, { id: Date.now(), ...note }]);
  };

  const removeNote = (id) => {
    setNotesList([...notes].filter((item) => item.id !== id));
  };

  const editNote = (note) => {
    setNotesList([
      ...notes.map((item) => {
        return (item =
          item.id == note.id
            ? {
                ...item,
                title: note.title,
                body: note.body,
                tags: note.tags,
              }
            : item);
      }),
    ]);
  };

  let [searchQuery, setSearchQuery] = useState("");

  const searchText = (text) => {
    return [...notes].filter((item) => {
      const itemText = item.title + item.body + item.tags;
      return itemText.includes(text);
    });
  };

  const getSearchedNoteList = () => {
    if (searchQuery) {
      return searchText(searchQuery);
    }
    return notes;
  };

  let searchedNoteList = getSearchedNoteList();

  const textInput = useRef(null);

  const qwe = (text) => {
    textInput.current.value = text;
    setSearchQuery(text);
  };

  return (
    <>
      <input
        onChange={(e) => setSearchQuery(e.target.value)}
        type="text"
        placeholder="Search..."
        ref={textInput}
      />
      <GoDiffAdded
        title="Add note"
        size="30px"
        color="white"
        onClick={toggleActive}
      />
      <Modal isActive={isActive}>
        <AddNotesForm
          item={{ title: "", body: "" }}
          addNote={addNote}
          toggleActive={toggleActive}
        />
      </Modal>
      <NotesList
        noteList={searchedNoteList}
        removeNote={removeNote}
        editNote={editNote}
        setSearchQuery={qwe}
      />
    </>
  );
};

export default MainPage;
