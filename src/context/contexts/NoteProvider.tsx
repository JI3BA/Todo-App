import React, {FC, useState, useMemo} from 'react';
import Filter from '../../component/Filter/Filter';
import { NoteContext , Note, tag } from './NoteContext'

interface StoreProviderProps {
  children: React.ReactNode;
}

export const NoteProvider: FC<StoreProviderProps> = ({ children }) => {
  const [notes, setNotes] = useState<Note[]>([])
  const [tags, setTags] = useState<tag[]>([])
  const [notesEdit, setNotesEdit] = useState<Note['id'] | null>(null);

  const addNewNote = ({title, body, tag}: Omit<Note, 'id' | 'checked'>): void => {
      setNotes([...notes, {title, body, id: Date.now(), checked: false, tag}])  
  }

  // const addTagsNote = ({ tag }: Omit<Note, 'id' | 'title' | 'body' | 'checked'>): void => {
  //   setTags([...tags, {tag}])
  // }

  const selectNotesEdit = (id: Note['id']) => {
      setNotesEdit(id);
    };

  const changeNote = ({ title, body, tag }: Omit<Note, 'id' | 'checked'>) => {
      setNotes(
          notes.map((note) => {
          if (note.id === notesEdit) {
            return { ...note, title, body, tag };
          }
          return note;
        })
      );
      setNotesEdit(null);
    };

  const removeNote = (id: Note['id']) => {
      setNotes(note => note.filter(note => note.id !== id))
  }

  // const removeTag = (id: Note['id']) => {
  //     setNotes(note => note.filter(items => items.tag.split(',').filter(item => items.tag.split(',').indexOf(item) !== id)))
  //     // setNotes(note => note.filter(items => items.tag.split(',').filter((item, index) => items.tag.split(',').map(item => item) !== tag.split(',').map(index => index))))
  // }

  // const filterTags = ({tag}: Omit<Note, 'id' | 'title' | 'body' | 'checked'>): void => {
  //    setTags([...tags, {tag}])
  // }

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
        tags,
        removeNote,
        changeNote,
        checkNote,
        addNewNote,
        selectNotesEdit,
    }),
    [notes, tags, removeNote, changeNote, checkNote, addNewNote, selectNotesEdit, notesEdit]
  );

  return <NoteContext.Provider value={value}>{children}</NoteContext.Provider>;
};