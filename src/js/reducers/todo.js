export default (state = [], action) => {
  switch(action.type) {
    case 'ADD_TODO':
      return [...state, {
        id: action.id,
        text: action.text,
        isCompleted: false
      }];
    default:
      return state;
  }
};
