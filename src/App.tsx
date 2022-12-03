import React from 'react';
import TodoList from './component/TodoList/TodoList';
import './styles/App.scss';
import './fonts/Fonts.scss';
import { Note } from './component/NoteForm/NoteForm';

const App: React.FC = () => {
  return (
    <div className="container">
      <TodoList notesCall={function (notes: Note[]): void {
        throw new Error('Function not implemented.');
      } } notes={[]}  />
    </div>
  );
}

export default App;
