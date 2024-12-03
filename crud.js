export let todos = [];

export const setTodos = () => {
  localStorage.setItem('todos', JSON.stringify(todos));
};

// create

// read
export const getTodos = () => {
  const loadedTodos = JSON.parse(localStorage.getItem('todos'));
  if (!loadedTodos) return;

  loadedTodos.forEach((item) => {
    todos.push(item);
  });

  return loadedTodos;
};

// update

// delete
