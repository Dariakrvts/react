import React from 'react';

// Клас Sidebar, який відображає бічну панель
class Sidebar extends React.Component {
  render() {
    // Визначення класу бічної панелі в залежності від стану isMenuOpen
    const sidebarClass = this.props.isMenuOpen ? 'Sidebar active' : 'Sidebar ';
    return (
      <aside className={sidebarClass}>
       
      </aside>
    );
  }
}

export default Sidebar;
