import React, { Component } from 'react';
import Counters from './components/counters';
import NavBar from './components/navbar';

class App extends Component {
  state = {
    counters: [
      { id: 1, count: 4 },
      { id: 2, count: 0 },
      { id: 3, count: 0 },
      { id: 4, count: 0 },
      { id: 5, count: 0 }
    ]
  };

  handleReset = () => {
    const counters = this.state.counters.map(c => {
      c.count = 0;
      return c;
    });
    this.setState({ counters });
  };

  handleIncrement = counter => {
    console.log('Event handler raised: ' + counter);
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].count++;
    this.setState({ counters });
  };

  handleDelete = counterId => {
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({ counters });
  };

  render() {
    return (
      <React.Fragment>
        <NavBar totalCounters={this.state.counters.length} />
        <main className='container'>
          <Counters
            counters={this.state.counters}
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelete}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
