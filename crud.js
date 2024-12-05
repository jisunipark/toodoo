import { loadTodos } from './index.js';

const BASE_URL = 'https://toodoo-be.fly.dev/api';

export let todos = [];

export const getTodos = () => {
  fetch(`${BASE_URL}/todos`)
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
  fetch(`${BASE_URL}/todos`, {
    method: 'POST',
    headers: { 'content-Type': 'application/json' },
    body: JSON.stringify(newItem),
  }).then((response) => {
    if (!response.ok) throw new Error();
  });
};

export const editTodo = (id, newTodo) => {
  fetch(`${BASE_URL}/todos/${id}`, {
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

export const editChecked = (id, checked) => {
  fetch(`${BASE_URL}/todos/${id}`, {
    method: 'PATCH',
    headers: { 'content-Type': 'application/json' },
    body: JSON.stringify({
      checked,
    }),
  }).then((response) => {
    if (!response.ok) throw new Error();
  });
};

export const deleteTodo = (id) => {
  fetch(`${BASE_URL}/todos/${id}`, {
    method: 'DELETE',
  }).then((response) => {
    if (!response.ok) throw new Error();
    todos = todos.filter((todo) => todo.id !== id);
  });
};
