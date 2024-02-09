import { Component } from 'react';

class Input extends Component {

  render() {
    // const { style } = this.props;
    return (
      <input
        // style={{
        //   ...style,
        // }}
        onChange={this.props.handleChange}
        value={this.props.value}
      />
    );
  }
}

export default Input;
