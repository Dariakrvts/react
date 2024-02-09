import { Component } from 'react';

class Counter extends Component {
  state = { value: 0, users: ['a', 'b'] };

  incrementValue = () => {
    // this.setState({value: 1});
    this.setState((state) => {
      return {
        value: state.value + 1,
      };
    });
  };

  decrementValue = () => {
    // this.setState({value: 1});
    this.setState((state) => {
      return {
        value: state.value - 1,
        users: [],
      };
    });
  };

  render() {
    return (
      <div>
        <h2>Counter: {this.state.value}</h2>
        <button onClick={this.incrementValue}>Incrment</button>
        <button onClick={this.decrementValue}>Decrment</button>
        {this.state.users.map((user) => (
          <div key={user}>{user}</div>
        ))}
      </div>
    );
  }
}

export default Counter;
