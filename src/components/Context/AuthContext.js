import React, { createContext, useReducer } from 'react';

// Функція редуктора для обробки різних дій автентифікації
function reducer(state, action) {
  switch (action.type) {
    // Дія "login": автентифікація користувача
    case 'login':
      const user = state.users.find((user) => user.username === action.payload.username);
      const passwordCorrect = user && user.password === action.payload.password;

      if (user) {
        if (passwordCorrect) {
          // Зберігання стану автентифікації в localStorage
          localStorage.setItem('isLoggedIn', 'true');
          // Оновлення стану з відповідно до успішної автентифікації
          return { ...state, isLoggedIn: true, loginError: null, passwordError: null };
        } else {
          // Обробка неправильного пароля
          return { ...state, loginError: null, passwordError: 'Invalid password' };
        }
      } else {
        // Обробка відсутності користувача
        return { ...state, loginError: 'User not found', passwordError: null };
      }
    // Дія "logout": вихід з системи
    case 'logout':
      // Видалення стану автентифікації з localStorage
      localStorage.removeItem('isLoggedIn');
      // Оновлення стану після виходу з системи
      return { ...state, isLoggedIn: false, loginError: null, passwordError: null };
    // Дія "setLoginError": встановлення помилки логіну
    case 'setLoginError':
      return { ...state, loginError: action.payload };
    // Дія "setPasswordError": встановлення помилки паролю
    case 'setPasswordError':
      return { ...state, passwordError: action.payload };
    case 'register':
      const existingUser = state.users.find((user) => user.username === action.payload.username);
      if (existingUser) {
        return { ...state, registrationError: 'User already exists' };
      } else {
        const newUser = { username: action.payload.username, password: action.payload.password };
        const newUsers = [...state.users, newUser];
        localStorage.setItem('users', JSON.stringify(newUsers));
        return { ...state, users: newUsers, registrationError: null };
      }
    // За замовчуванням повертає поточний стан
    default:
      return state;
  }
}

// Початковий стан для контексту автентифікації
const initialState = {
  isLoggedIn: localStorage.getItem('isLoggedIn') === 'true' || false, // Чи користувач автентифікований
  loginError: null, // Помилка логіну
  passwordError: null, // Помилка паролю
  registrationError: null,
  users: [{ username: 'Admin', password: 'Admin12345' }], // Список користувачів
};


// Створення контексту для автентифікації
export const AuthContext = createContext();

// Компонент, що надає контекст автентифікації для всіх дочірніх компонентів
export function AuthProvider({ children }) {
  // Використання редуктора для керування станом автентифікації
  const [state, dispatch] = useReducer(reducer, initialState);

  // Створення значення для передачі в контекст
  const value = {
    isLoggedIn: state.isLoggedIn,
    loginError: state.loginError,
    passwordError: state.passwordError,
    registrationError: state.registrationError,
    users: state.users,
    login: (payload) => dispatch({ type: 'login', payload }), // Функція для входу
    logout: () => dispatch({ type: 'logout' }), // Функція для виходу
    register: (payload) => dispatch({ type: 'register', payload }),
    setLoginError: (payload) => dispatch({ type: 'setLoginError', payload }), // Функція для встановлення помилки логіну
    setPasswordError: (payload) => dispatch({ type: 'setPasswordError', payload }), // Функція для встановлення помилки паролю
    setRegistrationError: (payload) => dispatch({ type: 'setRegistrationError', payload }),
  };

  // Повертає постачальника контексту з встановленими значеннями
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
