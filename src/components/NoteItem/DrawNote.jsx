import React from "react";
import TagsList from "../TagsList/TagsList";

import modalContext from "../../reducer/NotesContext";

import styles from "./NoteItem.module.css";

const DrawNote = React.memo(({ item, index }) => {
  const { editNote } = React.useContext(modalContext);

  const removeTag = (tag) => {
    editNote({
      ...item,
      tags: item.tags.filter((item) => item !== tag),
    });
  };

  return (
    <div className={styles.content_container}>
      <h2 className={styles.note_title}>
        {index + 1}. {item.title}
      </h2>

      <p className={styles.note_text}>{item.body}</p>

      {item.tags && (
        <div>
          {item.tags.map((item, index) => (
            <TagsList key={index} tag={item} removeTag={removeTag} />
          ))}
        </div>
      )}
    </div>
  );
});

export default DrawNote;
