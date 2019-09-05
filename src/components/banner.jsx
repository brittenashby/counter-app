import React, { Component } from 'react';
import '../css/banner.css';

class Banner extends Component {
  state = {
    image: '../images/car_counter_logo.jpg'
  }
  render() {
    return (
      <div className='row-fluid mb-4'>
         <h1 className='display-4'></h1>
          <img src={require('../images/car_counter_logo.jpg')}  alt="logo" width="100%" height="100%"></img>
      
      </div>
    );
  }
}

export default Banner; 
