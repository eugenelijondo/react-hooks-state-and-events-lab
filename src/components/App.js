// App.js
import React, { useState } from "react";
import ""; // assuming you have CSS for dark and light modes

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`App ${isDarkMode ? "dark" : "light"}`}>
      {/* Dark mode toggle button */}
      <button onClick={toggleDarkMode}>Toggle Dark Mode</button>

      {/* Other components */}
      {/* For example: <ShoppingList /> */}
    </div>
  );
}

export default App;
