import React from "react";
import { Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import FilmCard from "./FilmCard";

const Cards = () => {
  const { data } = useSelector((state) => state);
  console.log(data);
  return (
    <Container>
      <Row>
        {data.map((item) => (
          <FilmCard item={item} />
        ))}
      </Row>
    </Container>
  );
};

export default Cards;
