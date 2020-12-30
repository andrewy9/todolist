import React, { useState } from 'react';
import './App.css';
//Importing Components
import Form from "./components/Form"
import TodoList from "./components/TodoList"

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  return (
    <div className="App">
      <header>
        <h1>Andrew's Todo List{inputText}</h1>
      </header>
      <Form setInputText={setInputText} inputText={inputText} />
      <TodoList setTodos={setTodos} todos={todos} />
    </div>
  );
}

export default App;
