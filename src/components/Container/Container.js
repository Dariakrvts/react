import React from "react";
import { Outlet } from "react-router-dom";

class Container extends React.Component {
  state = { counter: 0 };
  handelChangeValue = () => {
    this.setState({counter: 2}, () => {
      console.log(this.state);
    })
    this.setState((prevState) => ({
      counter: prevState.counter++,
    }))
  }

  render () {
    return (
      //метод життєвого циклу 
      <div 
        style={{
          flexGrow: '1',
        }}
      > 
        <Outlet  />
        {/* <Contact /> */}
      </div> 
    )
  }
}

export default Container