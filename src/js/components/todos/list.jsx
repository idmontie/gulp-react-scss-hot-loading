import React from 'react';
import { connect } from 'react-redux';

class TodoList extends React.Component {
  render() {
    return (
      <ul>
        {this.props.todos.map((item, index) => (
          <li key={index}>{item.text}</li>
        ))}
      </ul>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    todos: state.todos
  };
}

export default connect(
  mapStateToProps
)(TodoList);
