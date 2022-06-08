import React from "react";

import { IconContext } from "react-icons";
import CloseButton from "../UI/noteButtons/CloseButton";
import AceptButton from "../UI/noteButtons/AceptButton";

import styles from "./Forms.module.css";
import cn from "classnames";

import unique from "lodash.union";

import { NOTE_INPUT_LENGTH } from "../../constants";

const NotesModForm = ({ item, toggleActive, noteModFunc }) => {
  const [note, setNote] = React.useState({
    title: item.title,
    body: item.body,
  });

  const noteRef = React.useRef();
  noteRef.current = note;

  const removeSharps = (string) => {
    if (string) {
      return string.replace(/#/g, "");
    }
    return "";
  };

  const findTags = (string) => {
    const tagsArr = string.match(/#[a-zа-яё|\d]+(?=\b)/gim);

    if (tagsArr) {
      return tagsArr.map((item) => item.slice(1));
    }
  };

  const createNewNote = () => {
    if (!noteRef.current.title) {
      alert("Enter something in a Title");
      return;
    }
    const newTags = findTags(
      noteRef.current.title + " " + noteRef.current.body
    );

    noteModFunc({
      ...item,
      title: removeSharps(noteRef.current.title),
      body: removeSharps(noteRef.current.body),
      tags: unique(item.tags, newTags),
    });
    toggleActive();
  };

  React.useEffect(() => {
    const keyHandle = (e) => {
      if (e.code === "Enter") {
        createNewNote();
      } else if (e.code === "Escape") {
        toggleActive();
      }
    };
    window.addEventListener("keydown", keyHandle);
    return () => window.removeEventListener("keydown", keyHandle);
  }, []);

  return (
    <div className={styles.form_container}>
      <div className={styles.input_container}>
        <div>
          <input
            type="text"
            placeholder="Title..."
            maxLength={NOTE_INPUT_LENGTH}
            className={cn(styles.form_title, {
              [styles.form_title__incomplete]:
                NOTE_INPUT_LENGTH >= note.title.length,
              [styles.form_title__complete]:
                NOTE_INPUT_LENGTH <= note.title.length,
            })}
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
          <span className={styles.button} onClick={toggleActive}>
            <CloseButton />
          </span>
          <span className={styles.button} onClick={createNewNote}>
            <AceptButton />
          </span>
        </IconContext.Provider>
      </div>
    </div>
  );
};

export default NotesModForm;
