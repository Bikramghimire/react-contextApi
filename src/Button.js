import './App.css';
import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

export default function SwitchButton(props) {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  const handleClick = () => {
    if (darkMode) {
      theme.dispatch({ type: 'LIGHTMODE' });
    } else {
      theme.dispatch({ type: 'DARKMODE' });
    }
  };

  return (
    <button
      className={`btn ${darkMode ? 'btn-dark' : 'btn-light'}`}
      onClick={() => handleClick()}
    >
      {darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
    </button>
  );
}
