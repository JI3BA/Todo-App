import React from 'react';

export interface Note{
    id: number,
    title: string,
    body: string,
    checked: boolean,
    tag: string[]
}

export interface TagsNote{
   tag: string
}

export type tag = string | undefined

export interface NoteContextProps {
  notes: Note[];
  tags: tag[];
  notesEdit: Note['id'] | null;
  addNewNote: ({ title, body }: Omit<Note, 'id' | 'checked'>) => void;
  removeNote: (id: Note['id']) => void;
  // removeTag: (id: Note['id']) => void;
  changeNote: ({ title, body }: Omit<Note, 'id' | 'checked'>) => void;
  checkNote: (id: Note['id']) => void;
  selectNotesEdit: (todoId: Note['id']) => void;
  // addTagsNote: ({ tag }: Omit<Note, 'id' | 'title' | 'body' | 'checked'>) => void;
}

export const NoteContext = React.createContext<NoteContextProps>({
    notes: [],
    tags: [],
    notesEdit: null,
    addNewNote: () => {},
    removeNote: () => {},
    // removeTag: () => {},
    changeNote: () => {},
    checkNote: () => {},
    selectNotesEdit: () => {},
    // addTagsNote: () => {}
});