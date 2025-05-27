import React from "react";
import CardComponent from "./components/CardComponent";
import orchids from "./ListOfOrchids";
import Header from "./components/Navbar";
export default function App() {
  const data = orchids;
  return (
    <>
      <Header />
      <div className="flex flex-wrap justify-content-center">
        {data.map((item) => (
          <CardComponent key={item.id} data={item} />
        ))}
      </div>
    </>
  );
}
