import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
  render() {
    return (
      <React.Fragment>
        {this.props.counters.map(counter => {
          return (
            <Counter
              key={counter.id}
              onIncrement={this.props.onIncrement}
              onDecrement={this.props.onDecrement}
              onDelete={this.props.onDelete}
              counter={counter}
            />
          );
        })}
        <div className='row mt-2'>
          <button
            className='btn btn-primary btn m-4'
            onClick={this.props.onReset}
          >
            <b>Reset</b>
          </button>
          <button
            className='btn btn-success btn m-4'
            // onClick={this.props.onReset}
          >
            <b>Add</b>
          </button>
        </div>
      </React.Fragment>
    );
  }
}

export default Counters;
