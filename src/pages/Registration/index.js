import { AuthContext } from '../../components/Context/AuthContext';
import React, { useState, useContext, useEffect } from 'react';
import { Button } from '@mui/material';
import Login from 'pages/LogIn';

const Registration = () => {
  const { register, registrationError, setLoginError, setPasswordError, passwordError, isLoggedIn } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const [loginValue, setLoginValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const [showRegistration, setShowRegistration] = useState(true);
  const [showLoginForm, setShowLoginForm] = useState(false);

  useEffect(() => {
    const savedUsers = localStorage.getItem('users');
    if (savedUsers) {
      // Завантаження користувачів
      const parsedUsers = JSON.parse(savedUsers);
    }
  }, []);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleFieldChange = (e) => {
    if (e.target.name === 'login') {
      setLoginError(null);
      setLoginValue(e.target.value);
    } else if (e.target.name === 'password') {
      setPasswordError(null);
      setPasswordValue(e.target.value);
    }
    console.log(e.target.name);
  };

  const handleSubmit = (e) => {
    // e.preventDefault();
    register({ username: loginValue, password: passwordValue });
    setShowRegistration( false );
    setShowLoginForm(true );
  };

  const handleLoginClick = () => {
    setShowRegistration( false );
    setShowLoginForm(true );
  };

  if (isLoggedIn) {
    return (
      <div className='Form'>
        <h1 className='FormTitle'>You are logged in</h1>
      </div>
    );
  }

  return (
    <div className="Form">
      {showRegistration && (
        <>
        <h1 className="FormTitle">Register an Account</h1>
          <form onSubmit={handleSubmit} className="Register">
            <div className="FormRow">
              <input
                type="text"
                id="login"
                name="login"
                placeholder="Login"
                value={loginValue}
                onChange={handleFieldChange}
                autoComplete="current-password"
                required 
              />
              {registrationError && <p>{registrationError}</p>}
            </div>
            <div className="FormRow">
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                name="password"
                placeholder="Password"
                value={passwordValue}
                onChange={handleFieldChange}
                autoComplete="current-password"
                required 
              />
              {passwordError && <p>{passwordError}</p>}
              <Button type="button" variant="outlined" onClick={handleClickShowPassword}>
                {showPassword ? 'Hide' : 'Show'} Password
              </Button>
            </div>
            <Button  type="submit" variant="outlined">
              Register
            </Button>
            <Button onClick={handleLoginClick} type="submit" variant="outlined">
              back to login form
            </Button>
          </form>
        </>
      )}
      {showLoginForm && <Login />}
    </div>
  );
};

export default Registration;
