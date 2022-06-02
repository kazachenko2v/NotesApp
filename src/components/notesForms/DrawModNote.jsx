import React from "react";

import { IconContext } from "react-icons";
import CloseButton from "../UI/noteButtons/CloseButton";
import AceptButton from "../UI/noteButtons/AceptButton";

import styles from "./Forms.module.css";

const DrawModNote = ({ toggleActive, createNewNote, note, setNote }) => {
  return (
    <div className={styles.form_container}>
      <div className={styles.input_container}>
        <div>
          <input
            type="text"
            placeholder="Title..."
            maxLength="14"
            className={styles.form_title}
            value={note.title}
            onChange={(e) => setNote({ ...note, title: e.target.value })}
          ></input>
        </div>
        <textarea
          type="text"
          placeholder="Text..."
          rows="6"
          className={styles.form_textarea}
          value={note.body}
          onChange={(e) => setNote({ ...note, body: e.target.value })}
        ></textarea>
      </div>
      <div className={styles.button_container}>
        <IconContext.Provider
          value={{
            size: "30px",
          }}
        >
          <span onClick={toggleActive}>
            <CloseButton />
          </span>
          <span onClick={createNewNote}>
            <AceptButton />
          </span>
        </IconContext.Provider>
      </div>
    </div>
  );
};

export default DrawModNote;
