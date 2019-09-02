import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
  render() {
    return (
      <React.Fragment>
        <button
          className='btn btn-primary btn-sm m-2'
          onClick={this.props.onReset}
        >
          Reset
        </button>
        {this.props.counters.map(counter => {
          return (
            <Counter
              key={counter.id}
              onIncrement={this.props.onIncrement}
              onDelete={this.props.onDelete}
              counter={counter}
            />
          );
        })}
      </React.Fragment>
    );
  }
}

export default Counters;
