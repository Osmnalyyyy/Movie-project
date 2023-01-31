import React from "react";
import { Card, Row } from "react-bootstrap";
import { useLocation, useParams } from "react-router-dom";
import "./details.scss";
const Details = () => {
  const { id } = useParams();

  const location = useLocation();
  const {
    Title,
    Actors,
    Plot,
    Writer,
    Year,
    imdbRating,
    Genre,
    Awards,
    Poster,
  } = location.state.item;

  return (
    <Row>
      <Card className="col-5 mx-auto">
        <Card.Img variant="top" src={Poster} />
      </Card>
      <Card className="col-5 mx-auto text-center badi">
        <Card.Body className="content">
          {Title !== "N/A" ? (
            <Card.Text className="title">{Title}</Card.Text>
          ) : (
            ""
          )}
          {Actors !== "N/A" ? <Card.Text>{Actors}</Card.Text> : ""}
          {Writer !== "N/A" ? <Card.Text>{Writer}</Card.Text> : ""}
          {Awards !== "N/A" ? <Card.Text>{Awards}</Card.Text> : ""}
          {Year !== "N/A" ? <Card.Text>{Year}</Card.Text> : ""}
          {imdbRating !== "N/A" ? (
            <Card.Text>imdbRating:{imdbRating}</Card.Text>
          ) : (
            ""
          )}
          {Plot !== "N/A" ? <Card.Text>{Plot}</Card.Text> : ""}
        </Card.Body>
      </Card>
    </Row>
  );
};
export default Details;
