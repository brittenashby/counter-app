import React, { Component } from 'react';

class Counter extends Component {
  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          className='btn btn-primary btn-sm'
          onClick={() => this.props.onIncrement(this.props.counter)}
        >
          Increment
        </button>
        <button
          className='btn btn-danger btn-sm m-2'
          onClick={() => {
            this.props.onDelete(this.props.counter.id);
          }}
        >
          Delete
        </button>
      </div>
    );
  }

  formatCount() {
    const { count } = this.props.counter;
    return count === 0 ? 'Zero' : count;
  }

  getBadgeClasses() {
    let classes = 'badge m-2 badge-';
    classes += this.props.counter.count === 0 ? 'warning' : 'secondary';
    return classes;
  }
}

export default Counter;