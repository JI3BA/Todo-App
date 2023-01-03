import React, {FC, useState, useMemo, useEffect} from 'react';
import { NoteContext , Note, filterTag} from './NoteContext'

interface StoreProviderProps {
  children: React.ReactNode;
}

export const NoteProvider: FC<StoreProviderProps> = ({ children }) => {

  const [notes, setNotes] = useState<Note[]>([])
  const [notesEdit, setNotesEdit] = useState<Note['id'] | null>(0);
  const [filtered, setFiltered] = useState<filterTag>('')

  const [modal, setModal] = useState<boolean>(false)
  const [modalNote, setModalNote] = useState<Note[]>([])

  const addNewNote = ({title, body, tagArray}: Omit<Note, 'id' | 'checked'>): void => {
      setNotes([...notes, {title, body, id: Date.now(), checked: false, tagArray}])      
  }

  const selectNotesEdit = (id: Note['id']) => {
      setNotesEdit(id);
    };

  const changeNote = ({ title, body, tagArray }: Omit<Note, 'id' | 'checked' | 'filterTag'>): void => {
      setNotes(
          notes.map((note) => {
          if (note.id === notesEdit) {
            return { ...note, title, body, tagArray };
          }
          return note;
        })
      );
      setNotesEdit(null);
    };

  const removeNote = (id: Note['id']): void => {
    setNotes(note => note.filter(note => note.id !== id))
  }

  const setFilter = (filter: filterTag) =>{
      setFiltered(filter)
  } 

  const checkNote = (id: Note['id']): void => {
      setNotes(
          notes.map((note) => {
              if(note.id === id){
                  return { ...note, checked: !note.checked }
              }
                return note
              })
          )
  }

  const openModalNote = (id: Note['id']): void => {
    setModalNote(notes.filter(item => item.id === id))
    setModal(true)
  }   

  const setModalNotes = (modal: boolean): void => {
    setModal(modal)
  }

  const value = useMemo(
    () => ({
        notesEdit,
        notes,
        modal,
        modalNote,
        filtered,
        removeNote,
        changeNote,
        checkNote,
        addNewNote,
        selectNotesEdit,
        setFilter,
        openModalNote,
        setModalNotes
    }),
    [notes, filtered, modal, modalNote, removeNote, changeNote, checkNote, addNewNote, selectNotesEdit, notesEdit, setFilter, openModalNote, setModalNotes]
  );
  return <NoteContext.Provider value={value}>{children}</NoteContext.Provider>;
};