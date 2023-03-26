import { Note } from "../redux/notes/types";

export const getLocalStorage = (key: string) => {
  const data = localStorage.getItem(key);

  if (data) {
    return JSON.parse(data);
  }
};

export const setLocalStorage = (key: string, data: Note[]) => {
  localStorage.setItem(key, JSON.stringify(data));
};
