import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { getLocalStorage } from "../../utils/localStorage";
import initNotes from "../../notes/notes.json";
import { Note } from "./types";

const initialState: Note[] = getLocalStorage("notes")
  ? // && getLocalStorage("notes").length !== 0
    getLocalStorage("notes")
  : initNotes;

export const notesSlice = createSlice({
  name: "notes",
  initialState: initialState,
  reducers: {
    addNote: (state, action: PayloadAction<Note>) => {
      state.push(action.payload);
    },
    removeNote: (state, action: PayloadAction<number>) => {
      return state.filter((item) => item.id !== action.payload);
    },
    editNote: (state, action: PayloadAction<Note>) => {
      return state.map((item) => {
        if (item.id !== action.payload.id) {
          return item;
        }

        return {
          ...item,
          title: action.payload.title,
          body: action.payload.body,
          tags: action.payload.tags,
        };
      });
    },
  },
});

export const { actions: notesActions, reducer: notesReducer } = notesSlice;
