import React, { useReducer, createContext } from 'react';
export const ThemeContext = createContext();
const initialState = {
  darkMode: false
};
const themeReducer = (state, action) => {
  switch (action.type) {
    case 'LIGHTMODE':
      return { darkMode: false };

    case 'DARKMODE':
      return { darkMode: true };

    default:
      return state;
  }
};

function ThemeProvider(props) {
  const [state, dispatch] = useReducer(themeReducer, initialState);
  return (
    <ThemeContext.Provider value={{ state: state, dispatch: dispatch }}>
      {props.children}
    </ThemeContext.Provider>
  );
}
export default ThemeProvider;
