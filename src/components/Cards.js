import React, { useState } from "react";
import { Container, Modal, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import FilmCard from "./FilmCard";
import ModalFilm from "./ModalFilm";

const Cards = () => {
  const { data } = useSelector((state) => state);
  const [modalShow, setModalShow] = useState(false);
  const [modalData, setModalData] = useState({
    Title: "",
    imdbRating: "",
    imdbID: "",
  });

  return (
    <Container>
      <Row>
        {data.map((item, i) => (
          <FilmCard
            setModalData={setModalData}
            item={item}
            setModalShow={setModalShow}
            key={i}
          />
        ))}
      </Row>

      <ModalFilm
        show={modalShow}
        onHide={() => setModalShow(false)}
        modalData={modalData}
        setModalData={setModalData}
      />
    </Container>
  );
};

export default Cards;
