export let todos = [];

export const setTodos = () => {
  localStorage.setItem('todos', JSON.stringify(todos));
};

// create
export const addTodo = (item) => {
  todos.push(item);
};

// read
export const getTodos = () => {
  const loadedTodos = JSON.parse(localStorage.getItem('todos'));
  if (!loadedTodos) return;

  return loadedTodos;
};

// update

// delete
