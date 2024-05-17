import React, { useState, useEffect } from 'react';

const ThemeSwitcher = () => {
  // Use useState to keep track of the current theme
  const [theme, setTheme] = useState('light');

  // Use useEffect to apply the theme class to the body element
  useEffect(() => {
    if (theme === 'dark') {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [theme]);

  // Function to toggle the theme
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <button className="button-mode" onClick={toggleTheme}>
      Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
    </button>
  );
};

export default ThemeSwitcher;