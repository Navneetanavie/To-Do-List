import { useState } from 'react';

export const TodoForm = ({ onAddTodo }) => {
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!description) return;

    onAddTodo(description);
    setDescription('');
  };

  return (
    <div>
      <h1>Create a ToDo</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="todo">ToDo: </label>
          <input
            type="text"
            id="todo"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div style={{ marginTop: "10px" }}>
          <button type="submit">Add ToDo!</button>
        </div>
      </form>
    </div>
  );
};
