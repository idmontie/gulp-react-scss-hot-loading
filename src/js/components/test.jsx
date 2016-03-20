import React from 'react';

export default React.createClass({
  getInitialState() {
    return {
      clicks: 0
    }
  },

  onClick() {
    let clicks = this.state.clicks;

    this.setState({
      clicks: clicks + 100
    });
  },

  render() {
    return (
      <div className="test">
        <p>Test and intense!?</p>

        <div className="lol">
          Wow! Insane! lol

          <div className="incredible">
            +100
          </div>

          <p>{this.state.clicks}</p>
          <button onClick={this.onClick}>Press Me</button>
        </div>
      </div>
    )
  }
});
