import React, { useContext } from "react";
import { useSelector } from "react-redux";

import NoteItem from "../NoteItem/NoteItem";

import SearchContext from "../../context/SearchContext";
import { setLocalStorage } from "../../utils/localStorage";

import styles from "./NotesList.module.css";

const NotesList = React.memo(() => {
  const notes = useSelector((state) => state.notes);

  React.useEffect(() => {
    setLocalStorage("notes", notes);
  }, [notes]);

  const { searchQuery } = useContext(SearchContext);

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
