import React from 'react';

export interface Note{
    id: number,
    title: string,
    body: string,
    checked: boolean,
    tagArray: string[],
}

export type filterTag = string


export interface NoteContextProps {
  notes: Note[];
  filtered: filterTag;
  notesEdit: Note['id'] | null;
  addNewNote: ({ title, body }: Omit<Note, 'id' | 'checked' | 'filterTag'>) => void;
  removeNote: (id: Note['id']) => void;
  changeNote: ({ title, body }: Omit<Note, 'id' | 'checked' | 'filterTag'>) => void;
  checkNote: (id: Note['id']) => void;
  selectNotesEdit: (todoId: Note['id']) => void;
  setFilter: (filter: filterTag) => void;
}

export const NoteContext = React.createContext<NoteContextProps>({
    notes: [],
    filtered: '',
    notesEdit: null,
    addNewNote: () => {},
    removeNote: () => {},
    changeNote: () => {},
    checkNote: () => {},
    selectNotesEdit: () => {},
    setFilter: () => {},
});