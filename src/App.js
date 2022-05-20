import React from "react";
import MainPage from "./pages/MainPage";
import "./styles/reset.css";
import "./styles/App.css";
import NotesState from "./reducer/NotesState";

function App() {
  return (
    <NotesState>
      <MainPage />
    </NotesState>
  );
}

export default App;
