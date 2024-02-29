import React from "react";
import { AuthContext } from "../Context/AuthContext";

class Header extends React.Component {
  static contextType = AuthContext; // Встановлення контексту AuthContext для класового компонента

  render() {
    const { isLoggedIn, logout } = this.context; // Деструктуризація значень з контексту AuthContext
    // const buttonClass = this.props.isMenuOpen ? "menu__icon icon-menu menu-open" : "menu__icon icon-menu ";

    return (
      <header className="Header">
        {/* Відображення контейнера заголовку */}
        <div
          className="HeaderСontainer"
          style={{
            display: "flex",
            gap: "10px",
            backgroundColor: "#DEEAF8",
            color: "#000000",
          }}
        >
          {/* Відображення блоку кнопки виходу, якщо користувач автентифікований */}
          <div className="HeaderLog">
            {isLoggedIn && (
              <button aria-label="Logout" onClick={logout}>
                {/* <logout fontSize="large" /> */}
                Logout
              </button>
            )}
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
