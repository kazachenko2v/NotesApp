import React, { useState } from "react";

import NotesModForm from "../NotesModForm/NotesModForm";
import Modal from "../UI/Modal/Modal";
import DrawNote from "./DrawNote";
import Loader from "../Loader/Loader";

import { useActionCreators } from "../../hooks/useActionCreators";
import { notesActions } from "../../redux/notes/slice";
import useModal from "../../hooks/useModal";

import RemoveButton from "../UI/noteButtons/RemoveButton";
import EditButton from "../UI/noteButtons/EditButton";
import img from "./img/note.png";

import { IconContext } from "react-icons";

import styles from "./NoteItem.module.css";
import cn from "classnames";

const NotesItem = ({ item, index }) => {
  const [isShowing, toggle] = useModal();

  const [isHover, setHover] = useState(false);
  const [isLoading, setIsLoadingn] = useState(true);

  const actions = useActionCreators(notesActions);

  return (
    <>
      {isShowing && (
        <Modal>
          <NotesModForm
            item={item}
            toggleActive={toggle}
            noteModFunc={actions.editNote}
          />
        </Modal>
      )}
      <div
        className={styles.note_item}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <DrawNote item={item} index={index} isHover={isHover} />

        <img
          onLoad={() => setIsLoadingn(false)}
          className={cn(styles.bgimage, {
            [styles.bgimage__loaded]: !isLoading,
          })}
          src={img}
          alt="Note"
        />

        {isLoading && <Loader isLoading={isLoading} />}

        <div
          className={cn(styles.button_container, {
            [styles.button__active]: isHover,
          })}
        >
          <IconContext.Provider value={{ size: "30px" }}>
            <span
              className={styles.button}
              onClick={() => actions.removeNote(item.id)}
            >
              <RemoveButton />
            </span>
            <span className={styles.button} onClick={toggle}>
              <EditButton />
            </span>
          </IconContext.Provider>
        </div>
      </div>
    </>
  );
};

export default NotesItem;
