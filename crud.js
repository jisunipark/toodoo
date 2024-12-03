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
export const editTodo = (id, newTodo) => {
  const thisTodo = todos.find((todo) => todo.id === id);
  thisTodo.todo = newTodo;
};

// delete
export const deleteTodo = (id) => {
  todos = todos.filter((todo) => todo.id !== id);
};
