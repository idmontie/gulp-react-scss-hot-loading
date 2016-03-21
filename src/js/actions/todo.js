
let currentTodoId = 0;
export function addTodo(text) {
  return {
    type: 'ADD_TODO',
    id: currentTodoId++,
    text,
  };
}

export function toggleTodo(id) {
  return {
    type: 'TOGGLE_TODO',
    id,
  };
}
