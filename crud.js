import { loadTodos } from './index.js';

export let todos = [];

export const getTodos = () => {
  fetch('http://localhost:5001/todos')
    .then((response) => {
      if (!response.ok) throw Error();
      return response.json();
    })
    .then((body) => {
      todos = [...body];
      loadTodos(todos);
    });
};

export const addTodo = (newItem) => {
  fetch('http://localhost:5001/todos', {
    method: 'POST',
    headers: { 'content-Type': 'application/json' },
    body: JSON.stringify(newItem),
  })
    .then((response) => response.json())
    .then(console.log);
};

export const editTodo = (id, newTodo) => {
  const thisTodo = todos.find((todo) => todo.id === id);
  thisTodo.todo = newTodo;
};

export const deleteTodo = (id) => {
  todos = todos.filter((todo) => todo.id !== id);
};
