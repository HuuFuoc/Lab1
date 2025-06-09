import React, { useState } from "react";
import CardComponent from "./components/CardComponent";
import orchids from "./ListOfOrchids";
import Header from "./components/Navbar";
import MyButton from "./components/MyButton";
import { ThemeProvider } from "./contexts/ThemeContext";
import ModalComponent from "./components/ModalComponent";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  const data = orchids;
  const [show, setShow] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const handleShow = (item) => {
    setShow(true);
    setSelectedItem(item);
  };
  const handleClose = () => {
    setShow(false);
  };
  const handleGo = () => {
    setShow(false);
  };
  return (
    <>
      <ThemeProvider>
        <Header />
        <MyButton />
        <div className="flex flex-wrap justify-center">
          {data.map((item) => (
            <CardComponent
              key={item.id}
              data={item}
              handleShow={() => {
                handleShow(item);
              }}
            />
          ))}
        </div>
        <ModalComponent
          show={show}
          handleClose={handleClose}
          handleGo={handleGo}
          data={selectedItem}
        />
      </ThemeProvider>
    </>
  );
}
