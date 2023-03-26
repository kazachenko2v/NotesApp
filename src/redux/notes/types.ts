export type Tags = string[];

export interface Note {
  id: number;
  title: string;
  body: string;
  tags: Tags;
}
