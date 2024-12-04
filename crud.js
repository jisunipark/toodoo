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
  }).then((response) => {
    if (!response.ok) throw new Error();
  });
};

export const editTodo = (id, newTodo) => {
  fetch(`http://localhost:5001/todos/${id}`, {
    method: 'PATCH',
    headers: { 'content-Type': 'application/json' },
    body: JSON.stringify({
      todo: newTodo,
    }),
  }).then((response) => {
    if (!response.ok) throw new Error();
    const thisTodo = todos.find((todo) => todo.id === id);
    thisTodo.todo = newTodo;
  });
};

export const deleteTodo = (id) => {
  fetch(`http://localhost:5001/todos/${id}`, {
    method: 'DELETE',
  }).then((response) => {
    if (!response.ok) throw new Error();
    todos = todos.filter((todo) => todo.id !== id);
  });
};
