import React, { useState, useContext } from "react";
import NotesModForm from "../NotesModForm/NotesModForm";
import Modal from "../UI/Modal/Modal";
import modalContext from "../../reducer/NotesContext";
import DrawNote from "./DrawNote";
import Loader from "../Loader/Loader";

import img from "./img/note.png";

import RemoveButton from "../UI/noteButtons/RemoveButton";
import EditButton from "../UI/noteButtons/EditButton";

import { IconContext } from "react-icons";

import styles from "./NoteItem.module.css";
import cn from "classnames";

const NotesItem = ({ item, index, isDragging }) => {
  const { removeNote, editNote } = useContext(modalContext);

  const [isActiveEditForm, setActiveEditForm] = useState(false);
  const [isActiveButton, setActiveButton] = useState(false);
  const [isLoading, setIsLoadingn] = useState(true);

  const imgRef = React.useRef(null);

  React.useEffect(() => {
    if (imgRef.current) {
      imgRef.current.onload = () => setIsLoadingn(false);
    }
  }, []);

  const toggleActiveEditForm = () => {
    setActiveEditForm(!isActiveEditForm);
  };

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
        className={cn(styles.note_item, {
          [styles.note_item__dragging]: isDragging,
        })}
        onMouseEnter={() => setActiveButton(true)}
        onMouseLeave={() => setActiveButton(false)}
      >
        <DrawNote item={item} index={index} />

        <img
          ref={imgRef}
          className={cn(styles.bgimage, {
            [styles.bgimage__loaded]: !isLoading,
          })}
          src={img}
          alt="Note"
        />

        {isLoading && <Loader isLoading={isLoading} />}

        <div
          className={cn(styles.button_container, {
            [styles.button__active]: isActiveButton,
          })}
        >
          <IconContext.Provider value={{ size: "30px" }}>
            <span className={styles.button} onClick={() => removeNote(item.id)}>
              <RemoveButton />
            </span>
            <span className={styles.button} onClick={toggleActiveEditForm}>
              <EditButton />
            </span>
          </IconContext.Provider>
        </div>
      </div>
    </>
  );
};

export default NotesItem;
