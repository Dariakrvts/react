import React, { useState, useContext } from 'react';
import { AuthContext } from '../../components/Context/AuthContext';
import { Button } from '@mui/material';
import Registration from 'pages/Registration';

const Login = () => {
  const { isLoggedIn, login, loginError, setLoginError, setPasswordError, passwordError } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const [loginValue, setLoginValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const [showRegistration, setShowRegistration] = useState(false);
  const [showLoginForm, setShowLoginForm] = useState(true);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  // const handleLogout = () => {
  //   logout();
  // };

  const handleFieldChange = (e) => {
    if (e.target.name === "login") {
      setLoginError(null);
      setLoginValue(e.target.value);
    } else if (e.target.name === "password") {
      setPasswordError(null);
      setPasswordValue(e.target.value);
    }
    console.log(loginError);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    login({ username: loginValue, password: passwordValue });
  };
  const handleRegistrationClick = () => {
    setShowRegistration(true);
    setShowLoginForm(false);
  };

  if (isLoggedIn) {
    return (
      <div className='Form'>
        <h1 className='FormTitle'>You are logged in</h1>
        {/* <button onClick={handleLogout}>
          Logout
        </button> */}
      </div>
    );
  }

  return (
    <div className='Form'>
      <h1 className='FormTitle'>Log in to see more</h1>
      {showLoginForm && ( // Використовуйте стан для відображення або приховування тексту та інпутів для логіну
        <>
          <h2 >Don't have an account yet? <Button onClick={handleRegistrationClick}>Click here</Button></h2>
          <form onSubmit={handleSubmit} className='Login'>
            <div className='FormRow'>
              <input
                type="text"
                id="login"
                name="login"
                placeholder="Login"
                value={loginValue}
                onChange={handleFieldChange}
                autoComplete="current-password"
              />
              {loginError && <p>{loginError}</p>}
            </div>
            <div className='FormRow'>
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                name="password"
                placeholder="Password"
                value={passwordValue}
                onChange={handleFieldChange}
                autoComplete="current-password"
              />
               {passwordError && <p>{passwordError}</p>}
              <Button
                type="button"
                variant="outlined"
                onClick={handleClickShowPassword}
              >
                {showPassword ? 'Hide' : 'Show'} Password
              </Button>
            </div>
            <Button type="submit" variant="outlined">
              Login
            </Button>
          </form>
        </>
      )}
      {showRegistration && <Registration />}
    </div>
  );
}

export default Login;
