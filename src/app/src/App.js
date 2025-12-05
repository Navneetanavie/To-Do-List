import './App.css';
import { useState, useEffect } from 'react';
import { TodoList } from './components/TodoList';
import { TodoForm } from './components/TodoForm';

export function App() {
  const [todos, setTodos] = useState([]);

  const fetchTodos = async () => {
    try {
      const response = await fetch('http://localhost:8000/todos/');
      const data = await response.json();
      setTodos(data);
    } catch (error) {
      console.error('Error fetching todos:', error);
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  const handleAddTodo = async (description) => {
    try {
      await fetch('http://localhost:8000/todos/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ description }),
      });
      fetchTodos();
    } catch (error) {
      console.error('Error creating todo:', error);
    }
  };

  return (

    <div style={{ background: "#ff8da1", display: "flex", flexDirection: "column", alignItems: "center", marginLeft: "450px", marginRight: "450px", padding: "20px" }}>
      <div className="App">

        <TodoList todos={todos} />
        <TodoForm onAddTodo={handleAddTodo} />
      </div>
    </div>

  );
}

export default App;
