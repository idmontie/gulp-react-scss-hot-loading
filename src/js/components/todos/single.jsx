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

SingleTodo.propTypes = {
  params: React.PropTypes.shape({
    id: React.PropTypes.number,
  }),
};

export default SingleTodo;
