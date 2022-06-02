import React, { useReducer } from "react";
import NotesContext from "./NotesContext";
import { notesReducer } from "./notesReducer";
import initNotes from "../notes/notes";

import { EDIT_NOTE, ADD_NEW_NOTE, REMOVE_NOTE } from "./types";
import { getLocalStorage } from "../utils/localStorage";

const NotesState = ({ children }) => {
  const init = (initNotes) => {
    if (Object.keys(getLocalStorage("notes")).length !== 0) {
      return getLocalStorage("notes");
    }
    return initNotes;
  };

  const [notes, dispatch] = useReducer(notesReducer, initNotes, init);

  const editNote = (newNote) => {
    dispatch({ type: EDIT_NOTE, payload: newNote });
  };

  const addNote = (newNote) => {
    const payload = {
      id: Date.now(),
      title: newNote.title,
      body: newNote.body,
      tags: newNote.tags,
    };
    dispatch({ type: ADD_NEW_NOTE, payload: payload });
  };

  const removeNote = (id) => {
    dispatch({ type: REMOVE_NOTE, payload: id });
  };

  return (
    <NotesContext.Provider
      value={{
        editNote,
        addNote,
        removeNote,
        notes: notes,
      }}
    >
      {children}
    </NotesContext.Provider>
  );
};

export default NotesState;
