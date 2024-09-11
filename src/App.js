
import './App.css';
import React from 'react';
import ClickCounter from './components/ClickCounter';
import SimpleForm from './components/SimpleForm';
import TodoList from './components/TodoList';
function App() {
  return (
    <div className="App">
     <ClickCounter/>
     <SimpleForm/>
     <TodoList/>
    </div>
  );
}

export default App;
