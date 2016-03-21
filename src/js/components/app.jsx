import React from 'react';

import TodoForm from './todos/form.jsx';
import TodoList from './todos/list.jsx';

class App extends React.Component {
  render() {
    return (
      <div>
        <TodoForm />
        <TodoList />
      </div>
    );
  }
}

export default App;
