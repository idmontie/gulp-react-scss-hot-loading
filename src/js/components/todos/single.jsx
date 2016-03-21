import React from 'react';

class SingleTodo extends React.Component {
  render() {
    return (
      <div>
        {this.props.params.id}
      </div>
    );
  }
}

export default SingleTodo;
