import React from 'react';
import { connect } from 'react-redux';

import { addTodo } from '../../actions/todo';

class TodoForm extends React.Component {
  handleSubmit = (event) => {
    event.preventDefault();

    const value = this.refs.newTodo.value;

    this.props.dispatch(addTodo(value));

    this.refs.newTodo.value = '';
  }

  render() {
    return (
      <div className="todo-form">
        <form onSubmit={this.handleSubmit}>
          <input type="text" ref="newTodo" />
          <button type="submit">Add Todo</button>
        </form>
      </div>
    )
  }
}

export default connect()(TodoForm);
