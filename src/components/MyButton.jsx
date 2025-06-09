import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
import { ThemeContext } from "../contexts/ThemeContext";
export default function MyButton() {
  const { toggleTheme } = useContext(ThemeContext);
  return (
    <Button variant="danger" onClick={toggleTheme}>
      Toggle Theme
    </Button>
  );
}
