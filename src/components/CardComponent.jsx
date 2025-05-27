import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export default function CardComponent({ data }) {
  return (
    <>
      <Card
        className="hover:scale-105 hover:shadow-lg  duration-200 p-1.5 bg-white rounded"
        style={{ width: "19rem", margin: "0.5rem" }}
      >
        <Card.Img
          variant="top"
          src={data.image}
          style={{ height: "200px", objectFit: "cover" }}
        />
        <Card.Body>
          <Card.Title>{data.name}</Card.Title>
          <Card.Text>🌍From: {data.origin}</Card.Text>
          <Card.Text>🏷️Category: {data.category}</Card.Text>
          <Button variant="primary">View More</Button>
        </Card.Body>
      </Card>
    </>
  );
}
