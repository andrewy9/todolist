import React from 'react';

const Todo = ({ text, id }) => {
  return (
    <div className="todo">
      <li className="todo-item" key={id}>{text}</li>
      <button className="complete-btn">
        <i className="fas fa-check"></i>
      </button>
      <button className="trash-btn">
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
}

export default Todo;