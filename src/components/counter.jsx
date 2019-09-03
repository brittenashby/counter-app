import React, { Component } from 'react';
import '../css/counter.css';

class Counter extends Component {
  render() {
    return (
      <div className='row'>
        <div className='col-2 col-style flex-col pl-4 py-3 Larger shadow '>
          <h4>
            <span className={this.getTitleClasses()}>
              {this.props.counter.title}
            </span>
          </h4>
        </div>

        <div className='col-3 col-style text-center py-3 '>
          <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
          <button
            className='btn btn-primary btn-sm'
            onClick={() => this.props.onIncrement(this.props.counter)}
          >
            +
          </button>
          <button
            className='btn btn-primary m-2 btn-sm'
            onClick={() => this.props.onDecrement(this.props.counter)}
            disabled={this.props.counter.count === 0 ? 'disabled' : ''}
          >
            -
          </button>
          <button
            className='btn btn-danger btn-sm '
            onClick={() => {
              this.props.onDelete(this.props.counter.id);
            }}
          >
            Delete
          </button>
        </div>
      </div>
    );
  }

  formatCount() {
    const { count } = this.props.counter;
    return count === 0 ? 0 : count;
  }

  getBadgeClasses() {
    let classes = 'badge m-2 p-2 badge-';
    classes += this.props.counter.count === 0 ? 'warning' : 'secondary';
    return classes;
  }

  getTitleClasses() {
    let classes = 'badge m-2 p-2 badge-';
    classes += this.props.counter.count === 0 ? 'warning' : 'success';
    return classes;
  }
}

export default Counter;
