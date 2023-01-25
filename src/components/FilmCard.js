import React from "react";
import { Button, Card } from "react-bootstrap";

const FilmCard = ({ title, Poster, imdbRating, Plot, year, Genre }) => {
  return (
    <Card className="h-100 col-3  m-3">
      <Card.Img
        variant="top"
        src="holder.js/100px180"
        style={{ width: "100%", height: "50%" }}
      />
      <Card.Body style={{ height: "50%" }}>
        <Card.Title style={{ height: "10%" }}>{title}</Card.Title>
        <Card.Text style={{ height: "30%" }}>{Plot}</Card.Text>
        <Button className="me-3" variant="success">
          Update Movie
        </Button>
        <Button variant="danger">Delete Movie</Button>
      </Card.Body>
    </Card>
  );
};

export default FilmCard;
