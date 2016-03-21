import React from 'react';
import { connect } from 'react-redux';

import { toggleTodo } from '../../actions/todo';

class TodoList extends React.Component {
  static propTypes = {
    dispatch: React.PropTypes.func.isRequired,
    todos: React.PropTypes.array.isRequired,
  }

  handleClick = (index) => {
    return () => {
      this.props.dispatch(toggleTodo(index));
    };
  }

  render() {
    return (
      <ul>
        {this.props.todos.map((item, index) => {
          const styles = {
            textDecoration: (item.isCompleted ? 'line-through' : 'none'),
          };

          return (
            <li
              key={index}
              onClick={this.handleClick(index)}
              style={styles}
            >{item.text}</li>
          );
        })}
      </ul>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    todos: state.todos,
  };
};

export default connect(
  mapStateToProps
)(TodoList);
