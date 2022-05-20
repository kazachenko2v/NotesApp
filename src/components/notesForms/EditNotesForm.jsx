import React, { useState, useContext } from "react";

import { AiOutlineCloseCircle } from "react-icons/ai";
import { AiOutlineCheck } from "react-icons/ai";
import { IconContext } from "react-icons";

import NotesContext from "../../reducer/NotesContext";

import styles from "./Forms.module.css";

const EditNotesForm = ({ item, toggleActive }) => {
  const { editNote } = useContext(NotesContext);

  const [note, setNote] = useState(item);

  function findTags(string) {
    const arr = string.match(/#[a-zа-яё|\d]+(?=\b)/gim);
    if (arr) {
      return arr.filter((item, index) => arr.indexOf(item) === index);
    } else {
      return "";
    }
  }

  function createNewNote() {
    editNote({ ...note, tags: findTags(note.title + " " + note.body) });
    toggleActive();
  }

  return (
    <div className={styles.form_container}>
      <div className={styles.input_container}>
        <input
          type="text"
          placeholder="Title"
          maxLength="14"
          className={styles.form_title}
          value={note.title}
          onChange={(e) => setNote({ ...note, title: e.target.value })}
        />
        <textarea
          type="text"
          placeholder="Text"
          rows="7"
          className={styles.form_textarea}
          value={note.body}
          onChange={(e) => setNote({ ...note, body: e.target.value })}
        ></textarea>
      </div>
      <div className={styles.button_container}>
        <IconContext.Provider
          value={{
            size: "30px",
            color: "black",
            className: "global-class-name",
          }}
        >
          <AiOutlineCloseCircle
            className={styles.form_button__close}
            onClick={toggleActive}
          />
          <AiOutlineCheck onClick={createNewNote} />
        </IconContext.Provider>
      </div>
    </div>
  );
};

export default EditNotesForm;
