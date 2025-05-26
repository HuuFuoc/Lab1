import React from "react";
import CardComponent from "./components/CardComponent";
import orchids from "./ListOfOrchids";
import Navbar from "./components/Navbar";
export default function App() {
  const data = orchids;
  return (
    <>
      <Navbar />
      <div className="d-flex flex-wrap justify-content-start gap-3">
        {data.map((item) => (
          <CardComponent key={item.id} data={item} />
        ))}
      </div>
    </>
  );
}
