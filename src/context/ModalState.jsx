import React, { useReducer } from "react";
import ModalContext from "./modalContext";
import { modalReducer } from "./modalReducer";
import {
  EDIT_NOTE,
  GET_NOTES,
  ADD_NEW_NOTE,
  REMOVE_NOTE,
  SEARCH_NOTE,
} from "./types";
import { getLocalStorage, setLocalStorage } from "../utils/localStorage";

const ModalState = ({ children }) => {
  const [notes, dispatch] = useReducer(modalReducer, getLocalStorage("notes"));

  const editNote = (newNote, index) => {
    index = index - 1;
    dispatch({ type: EDIT_NOTE, payload: { newNote: newNote, index: index } });
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

  const removeNode = (id) => {
    dispatch({ type: REMOVE_NOTE, payload: id });
  };

  let searchNode = (searchText) => {
    dispatch({ type: SEARCH_NOTE, payload: searchText });
  };

  return (
    <ModalContext.Provider
      value={{
        getLocalStorage,
        editNote,
        addNote,
        removeNode,
        searchNode,
        notes: notes,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export default ModalState;
