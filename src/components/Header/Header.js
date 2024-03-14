import React, { useState, useContext } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { Button } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import { AuthContext } from '../../components/Context/AuthContext';
import Login from 'pages/LogIn';

import { NavLink, useMatch } from 'react-router-dom';

export default function ButtonAppBar() {
  const { isLoggedIn, logout } = useContext(AuthContext);
  const [dialogOpen, setDialogOpen] = useState(false); // Стан для контролю діалогового вікна
  const [setSelectedValue] = useState('');
  const CustomNavLink = ({ to, children }) => {
    const match = useMatch(to);
    return <NavLink className={match ? 'NavItem active' : 'NavItem'} to={to}>{children}</NavLink>;}
  const handleLogout = () => {
    logout();
  };

  const handleLoginClick = () => {
    setDialogOpen(true); // Показуємо діалогове вікно при натисканні на кнопку "Login"
  };

  const handleDialogClose = (value) => {
    setDialogOpen(false); // Закриваємо діалогове вікно
    setSelectedValue(value);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" >
        
        <Toolbar>
          <div  
          style={{
            display: "flex",
            gap: "10px",
            flexGrow: "1",
            color: '#fffff',
          }}>
          <CustomNavLink to="/home">home</CustomNavLink>
          <CustomNavLink to="/blogs">blogs</CustomNavLink>
          <CustomNavLink to="/comments">comments</CustomNavLink>
          <CustomNavLink to="/forms">Forms</CustomNavLink>
          <CustomNavLink to="/contact">contact</CustomNavLink>
          <CustomNavLink to="/phonecontacts">phonecontacts</CustomNavLink>
          <CustomNavLink to="/photolist">photolist</CustomNavLink>
          <CustomNavLink to="/smilepages">smilepages</CustomNavLink>
          <CustomNavLink to="/todolist">todolist</CustomNavLink>
          <CustomNavLink to="/ErorrTest">ErorrTest</CustomNavLink>
          </div>
          {isLoggedIn ? (
            <Button onClick={handleLogout} color="inherit">
              Logout
            </Button>
          ) : (
            <Button onClick={handleLoginClick} color="inherit">
              Login
            </Button> 
          )}
        </Toolbar>
      </AppBar>
      <Dialog margin='40px' onClose={handleDialogClose} open={dialogOpen}>
        <Login  />
      </Dialog>
    </Box>
  );
}
