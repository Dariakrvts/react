import { createElement } from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Container from './components/Container/Container';
import { USERS } from './constants';

const App = () => {
  // const darkMode = false;

  return (
   <div 
      style={{
        minHeight:'100vh',
        display: 'flex',
        // color: darkMode ? 'red' : 'purple',
        flexDirection: 'column',
     }}
    >
    <Header
    //  darkMode={darkMode} users={USERS} 
     />
    <Container users={USERS} />
    <Footer/>
   </div>
  );
}

export default App;
