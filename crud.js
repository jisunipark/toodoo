import { loadTodos } from './index.js';

export let todos = [];

export const getTodos = () => {
  fetch('http://localhost:3000/todos')
    .then((response) => {
      if (!response.ok) throw Error();
      return response.json();
    })
    .then((body) => {
      todos = [...body];
      console.log(todos);
      loadTodos(todos);
    });
};

export const addTodo = (item) => {
  todos.push(item);
};

export const editTodo = (id, newTodo) => {
  const thisTodo = todos.find((todo) => todo.id === id);
  thisTodo.todo = newTodo;
};

export const deleteTodo = (id) => {
  todos = todos.filter((todo) => todo.id !== id);
};
