import { Component } from 'react';

class Input extends Component {
  state={}
  componentDidMount(){
    // console.log("componentDidMount");
    // this.interval = setInterval (() => {
    //   console.log("interval");
    // }, 2000)
  }

  componentDidUpdate(nextProps, nextState){
    // console.log("componentDidUpdate");
  }
  //компонент удаляется
  componentWillUnmount(){
    clearInterval(this.interval)

  }

  // shouldComponentUpdate(nextProps, nextState){
     // используется для тестов. вызывается до рендеринга. супер рідка штука
     // if(this.state.value === "red" && nextState.value ==="asd"){
     //   return false;
     // }
  //   return true;
  // }
  render() {
    // console.log("render")
    return (
      <input
        onChange={this.props.handleChange}
        value={this.props.value}
      />
    );
  }
}

export default Input;
