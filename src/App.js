import React from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Container from './components/Container/Container';
import { AuthProvider } from './components/Context/AuthContext';
import Login from './pages/LogIn/index';
import { useTasks } from './Context';
import { useOnlineStatus } from './hooks/useOnlineStatus';
import { BrowserRouter as Router, Route } from 'react-router-dom';

const App = () => {
  const tasks = useTasks();
  console.log(tasks);
  const status = useOnlineStatus();
  console.log("status", status);

  return (
    <Router>
      <AuthProvider>
        <div>
          <Header />
          <Route path="/" exact component={Container} />
          <Footer />
          <Route path="/login" exact component={Login} />
        </div>
      </AuthProvider>
    </Router>
  );
};

export default App;
