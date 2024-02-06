import React from "react";


class Container extends React.Component {
  renderList = (list) => {
    return list.map(elem => {
      //так задаються ключи
      return (
        <div key = {elem.id}
      >
        <h2>Name: {elem.name} </h2>
      </div>
      )
    })
  };
  handleClick = (e) => {
    console.log("click", e)
  };

  render () {
    
    return (
      //метод життєвого циклу 
      <div 
        style={{
          flexGrow: '1',
        }}
      >
        {this.renderList(this.props.users)}
        Container

        <button
        //пропс онклік
        onClick={this.handleClick}
        >
          Button
        </button>
      </div> 
    )
  }
}

export default Container