import React from "react";
import { Button, Card } from "react-bootstrap";
import "./film-card.css";
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";
import { deleteMovie } from "../store/movie-data-slice";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const FilmCard = ({ item, setModalShow, setModalData }) => {
  const { Title, Poster, imdbRating, Plot, year, Genre, imdbID } = item;

  const dispatch = useDispatch();

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
    <Link to={`/details/${imdbID}`}>
      <Card className="h-100 col-3  m-3 text-center">
        <Card.Img
          className="card-image"
          variant="top"
          src={Poster}
          height="250vh"
        />
        <Card.Body>
          <div className="star">
            {arr.map((item, i) => (
              <span style={{ fontSize: "70%" }} key={i}>
                {item}
              </span>
            ))}
          </div>
          <Card.Title className="card-title">{Title}</Card.Title>
          <div className="text">
            <Card.Text>{Plot}</Card.Text>
          </div>

          <div className="d-flex justify-content-space-between buton">
            <Button
              className=""
              variant="success"
              onClick={() => {
                setModalShow(true);
                setModalData({ Title, imdbRating, imdbID });
              }}
            >
              Update
            </Button>
            <Button
              variant="danger"
              className=""
              onClick={() => dispatch(deleteMovie(item))}
            >
              Delete
            </Button>
          </div>
        </Card.Body>
      </Card>
    </Link>
  );
};

export default FilmCard;
