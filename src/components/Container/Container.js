import React from "react";
// import Counter from "../Counter";
import UsersList from "../UsersList"

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
  // handleClick = (e, users) => {
  //   console.log("click", e, users)
  // };

  render () {
    return (
      //метод життєвого циклу 
      <div 
        style={{
          flexGrow: '1',
        }}
      > 
        <UsersList />
        {/* <Counter /> */}
      </div> 
    )
  }
}

export default Container