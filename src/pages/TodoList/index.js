import React, { useState } from 'react';

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  // Функція для додавання нової тудушки
  const addTodo = () => {
    if (inputValue.trim() !== '') {
      setTodos([...todos, { task: inputValue, completed: false }]);
      setInputValue('');
    }
  };

  // Функція для зміни стану тудушки (відмічання як зроблене/не зроблене)
  const toggleTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  return (
    <div>
      <ul>
        {todos.map((todo, index) => (
          <li
            key={index}
            style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
            onClick={() => toggleTodo(index)}
          >
            {todo.task}
          </li>
        ))}
      </ul>
      <div>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button onClick={addTodo}>Додати</button>
      </div>
    </div>
  );
}

export default TodoList;