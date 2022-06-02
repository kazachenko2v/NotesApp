import React, { useContext } from "react";
import NoteItem from "../NoteItem/NoteItem";
import NotesContext from "../../reducer/NotesContext";
import SearchContext from "../../context/SearchContext";

import styles from "./NotesList.module.css";

const NotesList = React.memo(() => {
  const { searchQuery } = useContext(SearchContext);
  const { notes } = useContext(NotesContext);

  let noteText = (note) => {
    return (note.title + note.body + note.tags).toLowerCase();
  };

  const getSearchedNoteList = () => {
    if (searchQuery) {
      return [...notes].filter((item) =>
        noteText(item).includes(searchQuery.toLowerCase())
      );
    }
    return notes;
  };

  let searchedNoteList = getSearchedNoteList();

  return (
    <div className={styles.list_container}>
      {searchedNoteList.map((item, index) => (
        <NoteItem key={item.id} index={index} item={item} />
      ))}
    </div>
  );
});

export default NotesList;
