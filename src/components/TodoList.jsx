import React from 'react';
//Import Components
import Todo from './Todo'

const TodoList = () => {
  return (
    <div className="todo-container">
      <ul className="todo-list"></ul>
      <Todo />
    </div>
  )
}

export default TodoList;