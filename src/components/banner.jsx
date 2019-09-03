import React, { Component } from 'react';

class Banner extends Component {
  render() {
    return (
      <div className='container'>
        <div className='row mt-5'>
          <h1 className='display-4'>
            <b>Car Counter</b>
          </h1>
        </div>
        <div className='row'>
          <p className='lead'>
            A simple web app to entertain your kids in the car!
          </p>
        </div>
      </div>
    );
  }
}

export default Banner;
