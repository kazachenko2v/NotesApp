import { Note } from "../redux/notes/types";

export interface HeaderProps {
  toggleActive: () => void;
}

export interface LoadingProps {
  isLoading: boolean;
}

export interface DrawNoteProps {
  item: Note;
  index: number;
  isHover: boolean;
}

export type NotesItemProps = Omit<DrawNoteProps, "isHover">;

export interface NotesModFormProps {
  item: Note;
  toggleActive: () => void;
  noteModFunc: ActionCreatorsMapObject<Note>;
}

export interface TagsItemProps {
  tag: string;
  removeTag: (tag: string) => void;
}

export interface withChildrenProps {
  children: React.ReactNode;
}
