import React from "react";
import { IconContext } from "react-icons";

import TagsItem from "../TagsItem/TagsItem";
import CloseButton from "../UI/noteButtons/CloseButton";
import AceptButton from "../UI/noteButtons/AceptButton";

import { useActionCreators } from "../../hooks/useActionCreators";
import { notesActions } from "../../redux/notes/slice";
import removeSharps from "../../utils/removeSharps";
import getTags from "../../utils/getTags";
import unique from "../../utils/unique";
import useKeyControlModal from "../../hooks/useKeyControlModal";

import { NOTE_INPUT_LENGTH } from "../../constants";

import styles from "./Forms.module.css";
import cn from "classnames";
import { NotesModFormProps } from "../types";

const NotesModForm: React.FC<NotesModFormProps> = ({
  item,
  toggleActive,
  noteModFunc,
}) => {
  const [note, setNote] = React.useState({
    title: item.title,
    body: item.body,
    tags: item.tags,
  });

  const actions = useActionCreators(notesActions);

  const changeNoteHandler = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const newTags = getTags(e.target.value);

    setNote({
      ...note,
      [e.target.name]: e.target.value,
      tags: newTags ? unique([...item.tags, ...newTags]) : item.tags,
    });
  };

  const removeTag = (tag: string) => {
    setNote({
      ...note,
      tags: note.tags.filter((item) => item !== tag),
    });
    actions.editNote({
      ...item,
      tags: item.tags.filter((item) => item !== tag),
    });
  };

  const createNewNote = () => {
    if (!note.title) {
      alert("Enter something in a Title");
      return;
    }

    const newnote = {
      ...item,
      title: removeSharps(note.title),
      body: removeSharps(note.body),
      tags: unique([...item.tags, ...note.tags]),
    };

    noteModFunc(newnote);
    toggleActive();
  };

  useKeyControlModal(createNewNote, toggleActive);

  return (
    <div className={styles.form_container}>
      <div className={styles.input_container}>
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
          name="title"
          onChange={changeNoteHandler}
        ></input>
        <textarea
          placeholder="Text..."
          rows={5}
          className={styles.form_textarea}
          value={note.body}
          name="body"
          onChange={changeNoteHandler}
        ></textarea>
        {note.tags && (
          <div>
            {note.tags.map((tag, index) => (
              <TagsItem key={index} tag={tag} removeTag={removeTag} />
            ))}
          </div>
        )}
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
