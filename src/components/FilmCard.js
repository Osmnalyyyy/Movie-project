import React from "react";
import { Button, Card } from "react-bootstrap";
import "./film-card.css";
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";

const FilmCard = ({ item }) => {
  const { Title, Poster, imdbRating, Plot, year, Genre } = item;

  let arr = [];

  for (let i = 1; i <= 9; i++) {
    if (i <= imdbRating) {
      arr.push(<BsStarFill />);
    }
  }
  if (imdbRating % 1 !== 0) {
    arr.push(<BsStarHalf />);
  }
  for (let i = arr.length; i <= 9; i++) {
    arr.push(<BsStar />);
  }

  return (
    <Card className="h-100 col-3  m-3 text-center">
      <Card.Img variant="top" src={Poster} height="250vh" />
      <Card.Body>
        <div className="star">
          {arr.map((item) => (
            <span>{item}</span>
          ))}
        </div>
        <Card.Title>{Title}</Card.Title>
        <div className="text">
          <Card.Text>{Plot}</Card.Text>
        </div>

        <div className="d-flex justify-content-space-between buton">
          <Button className="" variant="success">
            Update
          </Button>
          <Button variant="danger" className="">
            Delete
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default FilmCard;
