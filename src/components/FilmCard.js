import React from "react";
import { Button, Card } from "react-bootstrap";

const FilmCard = () => {
  return (
    <Card className="h-100 col-4">
      <Card.Img
        variant="top"
        src="holder.js/100px180"
        style={{ width: "100%", height: "50%" }}
      />
      <Card.Body style={{ height: "50%" }}>
        <Card.Title style={{ height: "10%" }}>Card Title</Card.Title>
        <Card.Text style={{ height: "30%" }}>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Update Movie</Button>
        <Button variant="primary">Delete Movie</Button>
      </Card.Body>
    </Card>
  );
};

export default FilmCard;
