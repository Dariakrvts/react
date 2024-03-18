import { AuthContext } from '../../components/Context/AuthContext';
import React, { useState, useContext } from 'react';
import { Button } from '@mui/material';

const Registration = () => {
  const { registration, login, setLoginError, setPasswordError } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const [loginValue, setLoginValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');

  const handleClickShowPassword = () => setShowPassword((show) => !show);

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
    registration({ username: loginValue, password: passwordValue });
    login({ username: loginValue, password: passwordValue }); // Викликати функцію входу після успішної реєстрації
  };

  return (
    <div className='Form'>
      <h1 className='FormTitle'>Register an Account</h1>
      <form onSubmit={handleSubmit} className='Registration'>
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
          <Button
            type="button"
            variant="outlined"
            onClick={handleClickShowPassword}
          >
            {showPassword ? 'Hide' : 'Show'} Password
          </Button>
        </div>
        <Button type="submit" variant="outlined">
          Register
        </Button>
      </form>
    </div>
  );
}

export default Registration;
