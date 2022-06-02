import React from "react";
import TagsList from "../TagsList/TagsList";
import styles from "./NoteItem.module.css";

const DrawNote = React.memo(({ item, index }) => {
  return (
    <div className={styles.content_container}>
      <h2 className={styles.note_title}>
        {index + 1}. {item.title}
      </h2>

      <p className={styles.note_text}>{item.body}</p>

      <p>
        {item.tags &&
          item.tags.map((item, index) => <TagsList key={index} tag={item} />)}
      </p>
    </div>
  );
});

export default DrawNote;
