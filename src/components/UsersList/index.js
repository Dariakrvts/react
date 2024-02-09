import { Component } from 'react';
import Input from '../../baseComponents/Input';

class UsersList extends Component {
  state = { users: [], value: '' };
  //работает как пуш метод
  handleAddUser = () => {
    this.setState({ users: [this.state.value] });
  };
  handleChange = (e) => {
    console.log('event', e.target.value);
    this.setState({ value: e.target.value });
  };
  render() {
    return (
      <div>
        {/* <Input style = {{ borderColor: "red" }}/> */}
        {this.state.users.map((user) => (
          <div key={user}>{user}</div>
        ))}
        <Input value={this.state.value} handleChange={this.handleChange} />
        <button onClick={this.handleAddUser}>button</button>
      </div>
    );
  }
}

export default UsersList;
