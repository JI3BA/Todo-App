import React, {FC, useState, useMemo} from 'react';
import { NoteContext , Note } from './NoteContext'

interface StoreProviderProps {
  children: React.ReactNode;
}

export const NoteProvider: FC<StoreProviderProps> = ({ children }) => {
  const [notes, setNotes] = useState<Note[]>([])
  // const [tags, setTags] = useState<TagsNote[]>([])
  const [notesEdit, setNotesEdit] = useState<Note['id'] | null>(null);

  const addNewNote = ({title, body, tag}: Omit<Note, 'id' | 'checked'>): void => {
      setNotes([...notes, {title, body, id: Date.now(), checked: false, tag}])
  }

  const addTagsNote = ({ tag }: Omit<Note, 'id' | 'title' | 'body' | 'checked'>): void => {

  }


  const selectNotesEdit = (id: Note['id']) => {
      setNotesEdit(id);
    };

  const changeNote = ({ title, body }: Omit<Note, 'id' | 'checked'>) => {
      setNotes(
          notes.map((note) => {
          if (note.id === notesEdit) {
            return { ...note, title, body };
          }
          return note;
        })
      );
      setNotesEdit(null);
    };

  const removeNote = (id: Note['id']) => {
      setNotes(note => note.filter(note => note.id !== id))
  }

  const checkNote = (id: Note['id']) => {
      setNotes(
          notes.map((note) => {
              if(note.id === id){
                  return { ...note, checked: !note.checked }
              }
                return note
              })
          )
  }
  const value = useMemo(
    () => ({
        notesEdit,
        notes,
        removeNote,
        changeNote,
        checkNote,
        addNewNote,
        selectNotesEdit,
        addTagsNote,
    }),
    [notes, removeNote, changeNote, checkNote, addNewNote, selectNotesEdit, notesEdit, addTagsNote]
  );

  return <NoteContext.Provider value={value}>{children}</NoteContext.Provider>;
};