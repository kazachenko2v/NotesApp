import React, { useState } from "react";
import EditNotesForm from "../notesForms/EditNotesForm";
import Modal from "../UI/Modal";
import TagsList from "../TagsList/TagsList";

import styles from "./NotesItem.module.css";
import cnBind from "classnames/bind";
import cn from "classnames/bind";

import { BsFillPencilFill } from "react-icons/bs";
import { MdDeleteForever } from "react-icons/md";
import { IconContext } from "react-icons";

const NotesItem = ({ index, item, removeNote, editNote, setSearchQuery }) => {
  let [isActiveEditForm, setActiveEditForm] = useState(false);
  let [isActiveButton, setActiveButton] = useState(false);
  let cx = cnBind.bind(styles);

  function toggleActiveEditForm() {
    setActiveEditForm(!isActiveEditForm);
  }

  return (
    <>
      {isActiveEditForm ? (
        <Modal isActive={isActiveEditForm}>
          <EditNotesForm
            item={item}
            editNote={editNote}
            toggleActive={toggleActiveEditForm}
          />
        </Modal>
      ) : null}
      <div
        className={styles.note_item}
        onMouseEnter={() => setActiveButton(true)}
        onMouseLeave={() => setActiveButton(false)}
      >
        <div className={styles.content_container}>
          <h2 className={styles.note_title}>
            {index}. {item.title}
          </h2>
          <p className={styles.note_text}>{item.body}</p>
          <p>
            {item.tags &&
              item.tags.map((item, index) => (
                <TagsList
                  key={index}
                  tag={item}
                  setSearchQuery={setSearchQuery}
                />
              ))}
          </p>
        </div>
        <div className={styles.button_container}>
          <IconContext.Provider value={{ size: "30px" }}>
            <MdDeleteForever
              title="Delete note"
              className={cn(
                styles.button,
                styles.delete_button,
                cx({ button__active: isActiveButton })
              )}
              onClick={() => removeNote(item.id)}
            />
            <BsFillPencilFill
              title="Edit note"
              className={cn(
                styles.button,
                styles.edit_button,
                cx({ button__active: isActiveButton })
              )}
              onClick={toggleActiveEditForm}
            />
          </IconContext.Provider>
        </div>
      </div>
    </>
  );
};

export default NotesItem;
