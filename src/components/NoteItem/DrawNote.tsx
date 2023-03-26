import React from "react";

import TagsItem from "../TagsItem/TagsItem";

import { useActionCreators } from "../../hooks/useActionCreators";
import { notesActions } from "../../redux/notes/slice";

import Highlight from "../../utils/highlight";

import styles from "./NoteItem.module.css";
import { DrawNoteProps } from "../types";

const DrawNote: React.FC<DrawNoteProps> = React.memo(
  ({ item, index, isHover }) => {
    const actions = useActionCreators(notesActions);

    const removeTag = (tag: string) => {
      actions.editNote({
        ...item,
        tags: item.tags.filter((item) => item !== tag),
      });
    };

    return (
      <div className={styles.content_container}>
        <h2 className={styles.note_title}>
          {index + 1}.{" "}
          <span>
            <Highlight tags={item.tags} isHover={isHover} styles={styles}>
              {item.title}
            </Highlight>
          </span>
        </h2>

        <p className={styles.note_text}>
          <Highlight tags={item.tags} isHover={isHover} styles={styles}>
            {item.body}
          </Highlight>
        </p>

        {item.tags && (
          <div>
            {item.tags.map((item, index) => (
              <TagsItem key={index} tag={item} removeTag={removeTag} />
            ))}
          </div>
        )}
      </div>
    );
  }
);

export default DrawNote;
