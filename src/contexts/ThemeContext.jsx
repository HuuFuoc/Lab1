import { createContext, useState } from "react";

// 1. Tạo context
export const ThemeContext = createContext();

// 2. Provider component
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext value={{ theme, toggleTheme }}>
      <div className={theme}>{children}</div>
    </ThemeContext>
  );
};
