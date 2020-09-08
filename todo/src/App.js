import React from 'react';
import Nav from './comps/Nav';
import TodoForm from './comps/ToDoForm';
import './App.css';

function App() {
  return (
    <div className="App">
      <Nav />
      <TodoForm />
    </div>
  );
}

export default App;