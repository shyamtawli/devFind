import React, { createContext, useState, useEffect } from "react";

const ThemeContext = createContext("light");

const lightTheme = {
  mode: "light",
  background: "#f5f6fa",
  color: "#000",
  icon: "☀️",
  button: {
    buttonBgColor: "#000",
    buttonTextColor: "#fff",
  },
};

const darkTheme = {
  mode: "dark",
  background: "#1e2a47",
  color: "#fff",
  icon: "🌜",
  button: {
    buttonBgColor: "#fff",
    buttonTextColor: "#000",
  },
};

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(lightTheme);

  const toggleTheme = () => {
    const newTheme = theme === lightTheme ? darkTheme : lightTheme;
    setTheme(newTheme);
    localStorage.setItem("selectedTheme", JSON.stringify(newTheme));
  };

  // Retrieve theme from local storage, if available
  useEffect(() => {
    const savedTheme = JSON.parse(localStorage.getItem("selectedTheme"));
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeProvider, ThemeContext };
