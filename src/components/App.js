import React, { useState } from 'react';
import ShoppingList from './ShoppingList';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  function handleToggleDarkMode() {
    setIsDarkMode(!isDarkMode);
  }

  return (
    <div className={`App ${isDarkMode ? "dark" : "light"}`}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleToggleDarkMode}>
          {isDarkMode ? "Light" : "Dark"} Mode
        </button>
      </header>
      <ShoppingList />
    </div>
  );
}

export default App;