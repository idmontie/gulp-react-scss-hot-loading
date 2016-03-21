
let currentTodoId = 0;
export function addTodo(text) {
  return {
    type: 'ADD_TODO',
    id: currentTodoId++,
    text
  }
}
