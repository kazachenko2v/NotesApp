import React, { useContext } from "react";
import NotesItem from "../NotesItem/NotesItem";
import NotesContext from "../../reducer/NotesContext";
import SearchContext from "../../context/SearchContext";

import styles from "./NotesList.module.css";

function NotesList() {
  const { searchQuery } = useContext(SearchContext);
  const { notes } = useContext(NotesContext);

  let noteText = (note) => {
    return note.title + note.body + note.tags;
  };

  const getSearchedNoteList = () => {
    if (searchQuery) {
      return [...notes].filter((item) => noteText(item).includes(searchQuery));
    }
    return notes;
  };

  let searchedNoteList = getSearchedNoteList();

  return (
    <div className={styles.list_container}>
      {searchedNoteList.map((item, index) => (
        <NotesItem key={item.id} index={index + 1} item={item} />
      ))}
    </div>
  );
}

export default NotesList;
