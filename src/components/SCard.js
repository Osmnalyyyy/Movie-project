import React from "react";
import { Card } from "react-bootstrap";
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";
const SCard = ({ item }) => {
  const { Title, Poster, imdbRating, Plot, year, Genre, imdbID } = item;

  let arr = [];
  if (!imdbRating) {
    for (let i = 1; i <= 10; i++) {
      arr.push(<BsStar />);
    }
  } else {
    for (let i = 1; i <= 10; i++) {
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
  }

  return (
    <Card className="h-100   m-3 text-center">
      <Card.Img
        className="card-images"
        variant="top"
        src={Poster}
        height="250vh"
      />
      <Card.Body>
        <div className="star">
          {arr.map((item) => (
            <span style={{ fontSize: "70%" }}>{item}</span>
          ))}
        </div>
        <Card.Title className="card-title">{Title}</Card.Title>
        <div className="text">
          <Card.Text>{Plot}</Card.Text>
        </div>
      </Card.Body>
    </Card>
  );
};

export default SCard;
