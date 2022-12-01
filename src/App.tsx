import React from 'react';
import TodoList from './component/TodoList/TodoList';
import './styles/App.scss';
import './fonts/Fonts.scss';


const App: React.FC = () => {
  return (
    <div className="container">
      <TodoList />
    </div>
  );
}

export default App;
