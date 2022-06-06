import React, { useState, useContext } from "react";
import NotesModForm from "../notesForms/NotesModForm";
import Modal from "../UI/Modal/Modal";
import modalContext from "../../reducer/NotesContext";
import DrawNote from "./DrawNote";
import RemoveButton from "../UI/noteButtons/RemoveButton";
import EditButton from "../UI/noteButtons/EditButton";

import { IconContext } from "react-icons";

import styles from "./NoteItem.module.css";
import cnBind from "classnames/bind";
import cn from "classnames";

const NotesItem = ({ item, index, isDragging }) => {
  const { removeNote, editNote } = useContext(modalContext);

  let [isActiveEditForm, setActiveEditForm] = useState(false);
  let [isActiveButton, setActiveButton] = useState(false);

  const toggleActiveEditForm = () => {
    setActiveEditForm(!isActiveEditForm);
  };
  const cx = cnBind.bind(styles);

  return (
    <>
      {isActiveEditForm && (
        <Modal>
          <NotesModForm
            item={item}
            toggleActive={toggleActiveEditForm}
            noteModFunc={editNote}
          />
        </Modal>
      )}
      <div
        className={cn(
          styles.note_item,
          cx({ note_item__dragging: isDragging })
        )}
        onMouseEnter={() => setActiveButton(true)}
        onMouseLeave={() => setActiveButton(false)}
      >
        <DrawNote item={item} index={index} />
        <div
          className={cn(
            styles.button_container,
            cx({ button__active: isActiveButton })
          )}
        >
          <IconContext.Provider value={{ size: "30px" }}>
            <span onClick={() => removeNote(item.id)}>
              <RemoveButton />
            </span>
            <span onClick={toggleActiveEditForm}>
              <EditButton />
            </span>
          </IconContext.Provider>
        </div>
      </div>
    </>
  );
};

export default NotesItem;
