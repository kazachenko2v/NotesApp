import React from "react";

import NoteItem from "../NoteItem/NoteItem";

import { useAppContext } from "./../../hooks/useAppContext";
import { useAppSelector } from "../../hooks/useActionCreators";
import { setLocalStorage } from "../../utils/localStorage";

import styles from "./NotesList.module.css";
import { Note } from "../../redux/notes/types";

const NotesList: React.FC = React.memo(() => {
  const notes = useAppSelector((state) => state.notes);

  React.useEffect(() => {
    setLocalStorage("notes", notes);
  }, [notes]);

  const search = useAppContext();

  let noteText = (note: Note) => {
    return (note.title + note.body + note.tags).toLowerCase();
  };

  const getSearchedNoteList = () => {
    if (search?.searchQuery) {
      return [...notes].filter((item) =>
        noteText(item).includes(search.searchQuery.toLowerCase())
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
