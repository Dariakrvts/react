import React, { useState, useContext } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { Button } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Dialog from '@mui/material/Dialog';
import { AuthContext } from '../../components/Context/AuthContext';
import Login from 'pages/LogIn';
import Sidebar from 'components/Sidebar/Sidebar';

export default function ButtonAppBar(props) {
  const { isLoggedIn, logout } = useContext(AuthContext);
  const [dialogOpen, setDialogOpen] = useState(false); // Стан для контролю діалогового вікна
  const [selectedValue, setSelectedValue] = useState('');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); 

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
  
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen); // Змінюємо стан відображення сайдбару при кожному натисканні на іконку
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" >
        <Toolbar>
          <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}
          onClick={props.onToggleMenu}
          >
            <MenuIcon />
          </IconButton>
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
