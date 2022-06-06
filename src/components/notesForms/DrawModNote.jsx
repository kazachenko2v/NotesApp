import React from "react";





const DrawModNote = ({ toggleActive, createNewNote, note, setNote }) => {
  const [searchQuery, setSearchQuery] = React.useState(note.title);


  const inputHandler = (value) => {
    setSearchQuery(value);
    setNote({ ...note, title: value });
  };


  return (
    
  );
};

export default DrawModNote;
