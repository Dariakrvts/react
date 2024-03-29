import { BrowserRouter as Router } from "react-router-dom";
import React, { Component } from 'react';
import Header from './components/Header/Header';
import Footer from "components/Footer/Footer";
import Container from './components/Container/Container';
import Sidebar from './components/Sidebar/Sidebar';
import { AuthProvider } from "./components/Context/AuthContext";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggleMenu: window.innerWidth >= 769,
    };
    this.handleToggle = this.handleToggle.bind(this);
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  handleToggle() {
    this.setState(prevState => ({ toggleMenu: !prevState.toggleMenu }));
  }

  componentDidMount() {
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({ toggleMenu: window.innerWidth >= 769 });
  }

  render() {
    return (
      <AuthProvider>
        <Router>
          <div className="App">
            <Header />
            <Sidebar isMenuOpen={this.state.toggleMenu}/>
            <div className='Wrapper'>
              <Container />
              <Footer />
            </div>
          </div>
        </Router>
      </AuthProvider>
    );
  }
}

export default App;
