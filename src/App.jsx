import React, { Component } from 'react';
import Counters from './components/counters';
import Scoreboard from './components/scoreboard';
import Banner from './components/banner';
import {} from './css/App.css';

class App extends Component {
  state = {
    counters: [
      { id: 1, count: 0, title: 'tesla' },
      { id: 2, count: 0, title: 'ford' },
      { id: 3, count: 0, title: 'chevy' },
      { id: 4, count: 0, title: 'toyota' },
      { id: 5, count: 0, title: 'mercedes benz' },
      { id: 6, count: 0, title: 'volvo' }
    ],
    winner: 'Let The Games Begin',
    allZeros: true
  };

  componentDidUpdate(prevProps, prevState) {
    let winner = this.findLargestCount(this.state.counters);
    if (prevState.winner !== winner && !this.state.allZeros) {
      this.setState({ winner });
    }
  }

  checkForNonZeros = () => {
    let non_zeros = 0;
    this.state.counters.forEach(counter => {
      if (counter.count > 0) {
        non_zeros++;
      }
    });
    //if all zeros
    if (non_zeros === 0) {
      this.setState({ winner: 'Let The Games Begin', allZeros: true });
    }
  };

  findLargestCount = counters => {
    let highestCount = counters[0];
    this.state.counters.forEach(counter => {
      if (counter.count > highestCount.count) highestCount = counter;
    });
    return highestCount.title;
  };

  handleReset = () => {
    const counters = this.state.counters.map(c => {
      c.count = 0;
      return c;
    });
    this.setState({ counters: counters, winner: null });
  };

  handleIncrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].count++;
    this.setState({
      counters: counters,
      allZeros: false
    });
  };

  handleDecrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].count--;
    this.setState({ counters }, this.checkForNonZeros);
  };

  handleDelete = counterId => {
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({ counters });
  };

  render() {
    return (
      <React.Fragment>
        <Banner />
        <main className='container mt-3'>
          <Scoreboard winner={this.state.winner} />
          <Counters
            counters={this.state.counters}
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
            onDelete={this.handleDelete}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
