import { Component } from 'react';
import PropTypes from 'prop-types';
import Input from '../../baseComponents/Input';

class UsersList extends Component {
  state = { value: '', renderInput: true };

  // componentDidMount(){
  //   fetch("https://swapi.dev/api/people/")
  //   .then(resp => resp.json())
  //   .then((resp) => this.setState({users: resp.results}))
  //   .catch((e) => console.log(e))
  // }

  //работает как пуш метод
  handleAddUser = () => {
    this.setState({ users: [this.state.value] });
  };
  handleChange = (e) => {
    // console.log('event', e.target.value);
    this.setState({ value: e.target.value });
  };
  handleInputToggle = () => {
    this.setState({ renderInput: false });
  };
  renderUsers = () => {
    if (Array.isArray(this.props.users)) {
      return this.props.users.map((user) => (
        <div key={user.name}>{user.name}</div>
        ));
    }
  };
  
  render() {
  
    return (
      <div>
        {this.renderUsers()}

        {/* <Input style = {{ borderColor: "red" }}/> */}

        {/* не безопасний вариант */}
        {/* {this.ptops.users.map((user) => (
          <div key={user.name}>{user.name}</div>
        ))} */}

        {this.state.renderInput && 
          <Input 
          value={this.state.value} 
          handleChange={this.handleChange} 
          />
        }

        {/* як варіант, можна використовувати замість && */}
        {/* {this.state.renderInput ? (
          <Input 
          value={this.state.value} 
          handleChange={this.handleChange} />
        ) : null} */}

        <button onClick={this.handleInputToggle}>button</button>
      </div>
    );
  }
}

//описание пропсов которые есть. когда идет рендер списков нужно знать что это масив обьектов
UsersList.propTypes ={
  users: PropTypes.arrayOf(PropTypes.shape)
}

export default UsersList;
