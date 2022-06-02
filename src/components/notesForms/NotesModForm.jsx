import React from "react";
import DrawModNote from "./DrawModNote";

const NotesModForm = ({ item, toggleActive, noteModFunc }) => {
  const [note, setNote] = React.useState({
    title: item.title,
    body: item.body,
  });

  const findTags = (string) => {
    let arr = string.match(/#[a-zа-яё|\d]+(?=\b)/gim);
    if (arr) {
      return arr.filter((item, index) => arr.indexOf(item) === index);
    } else {
      return "";
    }
  };

  const createNewNote = () => {
    noteModFunc({
      ...item,
      ...note,
      tags: findTags(note.title + " " + note.body),
    });
    toggleActive();
    setNote({ title: "", body: "" });
  };

  return (
    <DrawModNote
      createNewNote={createNewNote}
      toggleActive={toggleActive}
      note={note}
      setNote={setNote}
    />
  );
};

export default NotesModForm;
