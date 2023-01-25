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
    } else if (i < imdbRating && imdbRating < i + 1) {
      arr.push(<BsStarHalf />);
    } else {
      arr.push(<BsStar />);
    }
  }

  console.log(arr);
  return (
    <Card className="h-100 col-3  m-3 text-center">
      <Card.Img variant="top" src={Poster} height="250vh" />
      <Card.Body>
        <div>
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
