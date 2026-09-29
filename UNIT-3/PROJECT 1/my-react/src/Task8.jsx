import { useState } from "react";
import "./Task8.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={darkMode ? "app dark" : "app light"}>
      <h1>{darkMode ? "Dark Mode" : "Light Mode"}</h1>

      <p>
        Click the button to switch between light mode and dark mode.
      </p>

      <button onClick={toggleMode}>
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>
    </div>
  );
}

export default App;