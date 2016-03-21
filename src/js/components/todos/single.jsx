import React from 'react';

class SingleTodo extends React.Component {
  static propTypes = {
    params: React.PropTypes.shape({
      id: React.PropTypes.number,
    }),
  }

  render() {
    return (
      <div>
        {this.props.params.id}
      </div>
    );
  }
}

export default SingleTodo;
