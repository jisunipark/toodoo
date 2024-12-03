export let todos = [];

export const setTodos = () => {
  localStorage.setItem('todos', JSON.stringify(todos));
};

export const getTodos = () => {
  const loadedTodos = JSON.parse(localStorage.getItem('todos'));
  if (!loadedTodos) return;
  return loadedTodos;
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
