import React, { Component } from 'react';

class Scoreboard extends Component {
  render() {
    return (
      <div className='container mb-4'>
        <div className='row'>
          <h3>
            <span className='badge badge-pill badge-secondary'>
              {this.formatWinner()}
            </span>
          </h3>
        </div>
      </div>
    );
  }

  formatWinner = () => {
    if (this.props.winner === null) return 'Let The Games Begin';
    else return this.props.winner;
  };
}

export default Scoreboard;
