import React from 'react';

export interface Note{
    id: number,
    title: string,
    body: string,
    checked: boolean,
    tagArray: string[]
}

export interface TagsNote{
   tag: string
}

// export type tag = string | undefined

export interface NoteContextProps {
  notes: Note[];
  notesEdit: Note['id'] | null;
  addNewNote: ({ title, body }: Omit<Note, 'id' | 'checked'>) => void;
  removeNote: (id: Note['id']) => void;
  changeNote: ({ title, body }: Omit<Note, 'id' | 'checked'>) => void;
  checkNote: (id: Note['id']) => void;
  selectNotesEdit: (todoId: Note['id']) => void;
}

export const NoteContext = React.createContext<NoteContextProps>({
    notes: [],
    notesEdit: null,
    addNewNote: () => {},
    removeNote: () => {},
    changeNote: () => {},
    checkNote: () => {},
    selectNotesEdit: () => {},
});