import {
  ADD_NEW_NOTE,
  ADD_NEW_NOTE_WITH_INDEX,
  EDIT_NOTE,
  GET_NOTES,
  REMOVE_NOTE,
} from "./types";

const handlers = {
  [GET_NOTES]: (state, { payload }) => [...payload],
  [ADD_NEW_NOTE]: (state, { payload }) => [...state, payload],
  [ADD_NEW_NOTE_WITH_INDEX]: (state, { payload }) => {
    state.splice(payload.index, 0, payload.payload);
    return state;
  },
  [EDIT_NOTE]: (state, { payload }) => [
    ...state.map((item) => {
      return (item =
        item.id === payload.id
          ? {
              ...item,
              title: payload.title,
              body: payload.body,
              tags: payload.tags,
            }
          : item);
    }),
  ],
  [REMOVE_NOTE]: (state, { payload }) => [
    ...state.filter((item) => item.id !== payload),
  ],
  DEFAULT: (state) => state,
};

export const notesReducer = (state, action) => {
  const handle = handlers[action.type] || handlers.DEFAULT;
  return handle(state, action);
};
