// import { createElement } from 'react';
// import {  Routes, Route } from "react-router-dom";
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Container from './components/Container/Container';
// import { USERS } from './constants';
import { useTasks } from './Context';

const App = () => {
  const tasks = useTasks();
  console.log(tasks);
    return (
    <div 
        style={{
          minHeight:'100vh',
          display: 'flex',
          flexDirection: 'column',
      }}
      >
      <Header/>
      <Container />
      <Footer/>
    </div>
    );
}

export default App;
