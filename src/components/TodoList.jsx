import React from "react";
import { useState } from "react";
// inzial use state
const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handelAddtodo = () => {
    if (inputValue.trim()) {
      setTodos([...todos, { id: Date.now(), text: inputValue }]);
      setInputValue("");
    }
  };
  // DELETE TODO
  const handelDelteTodo = (id) => {
    setTodos(todos.filter((todos) => todos.id !== id));
  };
  // handel the update value
  const handelInputChange = (event) => {
    setInputValue(event.target.value);
  };
  return (
    <div>
      <h2>Todo List</h2>
      <input
        type="text"
        value={inputValue}
        onChange={handelInputChange}
        placeholder="Add new todo"
      />
      <button onClick={handelAddtodo}> Add Todo</button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.text}
            <button onClick={() => handelDelteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default TodoList;
