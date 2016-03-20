import React from 'react';
import ReactDOM from 'react-dom';

import Test from './components/test.jsx';

const Index = React.createClass({
  render() {
    return (
      <Test />
    );
  }
})

ReactDOM.render(<Index />, document.getElementById('react-target'));

if (DEBUG) {
  require('../../dist/styles/main.css');
}
