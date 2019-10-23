import React from 'react';

class Status extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      timeLeft: this.props.timeLeft
    };
  }
  render() {
    return (
      <div className="header">
        <div className="number">
          <button>{this.props.currentQuestion + 1}/{this.props.totalQuestion}</button>
        </div>
        <div className="time">
          <button >{this.state.timeLeft}s</button>
        </div >
      </div>
    );
  }
}

export default Status;
