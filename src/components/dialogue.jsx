import React, { Component } from 'react';
import { directive } from '@babel/types';

class dialogue extends Component {
  state = {
    title: ''
  };

  handleChange = event => {
    console.log(event.target.value);
    this.setState({ title: event.target.value });
  };

  render() {
    return (
      <React.Fragment>
        <div className='row'>
          <div className='col-2 flex-col'>
            <label htmlFor=''>Enter a car name</label>
            <input
              type='text'
              onChange={this.handleChange}
              value={this.state.title}
            />
          </div>
        </div>
        <div className='row'>
          <div className='col-2 flex-col'>
            <button
              onClick={() => {
                this.props.onSubmit(this.state.title);
              }}
            >
              Submit
            </button>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default dialogue;
