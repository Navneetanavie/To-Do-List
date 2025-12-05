import React from 'react';

export const TodoList = ({ todos }) => {
  return (
    <div>
      <h1>List of TODOs</h1>
      <ul>
        {todos.map((todo) => (
          <li key={todo._id}>{todo.description}</li>
        ))}
      </ul>

    </div>
  );
};
