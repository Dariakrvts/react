import React from "react";
// import Counter from "../Counter";
import UsersList from "../UsersList"

class Container extends React.Component {
  state = { users: [] };
  componentDidMount() {
    fetch("https://swapi.dev/api/people/")
      .then(resp => resp.json())
      .then((resp) => this.setState({users: resp.results}))
      .catch((e) => console.log(e))
  }

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
    console.log("users", this.state.users);
    return (
      //метод життєвого циклу 
      <div 
        style={{
          flexGrow: '1',
        }}
      > 
        <UsersList users = {this.state.users}/>
        {/* <Counter /> */}
      </div> 
    )
  }
}

export default Container