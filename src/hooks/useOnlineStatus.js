import { useState, useEffect } from 'react';

export function useOnlineStatus() {
  const [isOnline, setIsOnline] = useState(true);
  useEffect(() => {
    function handleOnline() {
      setIsOnline(true);
    }
    function handleOffline() {
      setIsOnline(false);
    }
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);
    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);
  return isOnline;
}












import React, { useState, useContext } from 'react';
import { AuthContext } from '../../components/Context/AuthContext';

const Login = () => {
  const { isLoggedIn, login, logout, setLoginError, setPasswordError, loginError, passwordError } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const [loginValue, setLoginValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleLogout = () => {
    logout();
  };

  const handleFieldChange = (e) => {
    if (e.target.name === "login") {
      setLoginError(null);
      setLoginValue(e.target.value);
    } else if (e.target.name === "password") {
      setPasswordError(null);
      setPasswordValue(e.target.value);
    }
    console.log(e.target.name);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    login({ username: loginValue, password: passwordValue });
  };

  if (isLoggedIn) {
    return (
      <div className='Form'>
        <h1 className='FormTitle'>You are logged in</h1>
        <button onClick={handleLogout}>
          Logout
        </button>
      </div>
    );
  }

  return (
    <div className='Form'>
      <h1 className='FormTitle'>Log in to see more</h1>
      <form onSubmit={handleSubmit} className='Login'>
        <div className='FormRow'>
          <input
            type="text"
            id="login"
            name="login"
            placeholder="Login"
            value={loginValue}
            onChange={handleFieldChange}
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
          />
          {passwordError && <p>{passwordError}</p>}
          <button
            type="button"
            onClick={handleClickShowPassword}
          >
            {showPassword ? 'Hide' : 'Show'} Password
          </button>
        </div>
        <button type="submit">
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
