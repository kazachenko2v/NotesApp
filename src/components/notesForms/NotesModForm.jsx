import React from "react";

import { IconContext } from "react-icons";
import CloseButton from "../UI/noteButtons/CloseButton";
import AceptButton from "../UI/noteButtons/AceptButton";

import styles from "./Forms.module.css";
import cnBind from "classnames/bind";
import cn from "classnames";

import { NOTE_INPUT_LENGTH } from "../../constants";

const NotesModForm = ({ item, toggleActive, noteModFunc }) => {
  const [note, setNote] = React.useState({
    title: item.title,
    body: item.body,
  });

  // const [isTitle, setIsTitle] = React.useState();

  const noteRef = React.useRef();
  noteRef.current = note;

  const findTags = (string) => {
    let arr = string.match(/#[a-zа-яё|\d]+(?=\b)/gim);
    if (arr) {
      return arr.filter((item, index) => arr.indexOf(item) === index);
    } else {
      return "";
    }
  };

  const createNewNote = () => {
    if (!noteRef.current.title) {
      alert("Enter something in a Title");
      return;
    }
    noteModFunc({
      ...item,
      ...noteRef.current,
      tags: findTags(noteRef.current.title + " " + noteRef.current.body),
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

  const cx = cnBind.bind(styles);

  return (
    <div className={styles.form_container}>
      <div className={styles.input_container}>
        <div>
          <input
            type="text"
            placeholder="Title..."
            maxLength={NOTE_INPUT_LENGTH}
            className={cn(
              styles.form_title,
              cx({
                form_title__incomplete: NOTE_INPUT_LENGTH >= note.title.length,
                form_title__complete: NOTE_INPUT_LENGTH <= note.title.length,
              })
            )}
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

export default NotesModForm;
