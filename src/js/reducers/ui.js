export default (state = { filter : 'ALL'}, action) => {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return {
        ...state,
        filter: action.filter
      };
    default:
      return state;
  }
}
