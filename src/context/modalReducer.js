import {
  ADD_NEW_NOTE,
  EDIT_NOTE,
  GET_NOTES,
  REMOVE_NOTE,
  SEARCH_NOTE,
} from "./types";

const handlers = {
  [GET_NOTES]: (state, { payload }) => [...payload],
  [ADD_NEW_NOTE]: (state, { payload }) => [...state, payload],
  [EDIT_NOTE]: (state, { payload }) => [
    ...state.map((item, indexArr) => {
      return (item =
        indexArr == payload.index
          ? {
              ...item,
              title: payload.newNote.title,
              body: payload.newNote.body,
              tags: payload.newNote.tags,
            }
          : item);
    }),
  ],
  [REMOVE_NOTE]: (state, { payload }) => [
    ...state.filter((item) => item.id !== payload),
  ],
  [SEARCH_NOTE]: (state, { payload }) => [
    ...state.filter((item) => item.title.includes(payload)),
  ],
  DEFAULT: (state) => state,
};

export const modalReducer = (state, action) => {
  const handle = handlers[action.type] || handlers.DEFAULT;
  return handle(state, action);
};
