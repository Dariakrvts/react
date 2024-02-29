import React from "react";
import { NavLink, useMatch } from 'react-router-dom';

// Компонент CustomNavLink, який відображає навігаційне посилання з можливістю вказати активний стан
const CustomNavLink = ({ to, children }) => {
  const match = useMatch(to); // Використання хука useMatch для визначення, чи відповідає поточний шлях

  // Повертає NavLink з класом active, якщо поточний шлях відповідає to
  return <NavLink className={match ? 'NavItem active' : 'NavItem'} to={to}>{children}</NavLink>;
}

// Клас Sidebar, який відображає бічну панель
class Sidebar extends React.Component{
  render(){
    // Визначення класу бічної панелі в залежності від стану isMenuOpen
    const sidebarClass = this.props.isMenuOpen ? "Sidebar active" : "Sidebar ";
    
    return (
      <aside className={sidebarClass}>
        <nav className="NavList" 
          style={{
            display: "flex",
            gap: "10px",
            height: 80,
            width: '100',
            backgroundColor: "#DEEAF8", 
            color: '#000000',
          }}
        >
          {/* Відображення навігаційних посилань за допомогою CustomNavLink */}
          <CustomNavLink to="/blogs">blogs</CustomNavLink>
          <CustomNavLink to="/comments">comments</CustomNavLink>
          <CustomNavLink to="/contact">contact</CustomNavLink>
          <CustomNavLink to="/home">home</CustomNavLink>
          <CustomNavLink to="/phonecontacts">phonecontacts</CustomNavLink>
          <CustomNavLink to="/photolist">photolist</CustomNavLink>
          <CustomNavLink to="/smilepages">smilepages</CustomNavLink>
          <CustomNavLink to="/todolist">todolist</CustomNavLink>
        </nav>
      </aside>
    );
  }
}

export default Sidebar;
