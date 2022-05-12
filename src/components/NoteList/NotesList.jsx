import React, { Fragment } from "react";
import NotesItem from "../NotesItem/NotesItem";
import styles from "./NotesList.module.css";

function NotesList({ noteList, removeNote, editNote, setSearchQuery }) {
  return (
    <div className={styles.list_container}>
      {noteList.map((item, index) => (
        <NotesItem
          key={item.id}
          index={index + 1}
          item={item}
          removeNote={removeNote}
          editNote={editNote}
          setSearchQuery={setSearchQuery}
        />
      ))}
    </div>
  );
}

export default NotesList;
