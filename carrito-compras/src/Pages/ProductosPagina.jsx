import React, { Fragment, useState } from "react";
import { Container, Col, Row } from "react-bootstrap";
import { Productos } from "../Components/Productos/Productos.jsx";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer.jsx";

export const ProductosPagina = () => {
  const estadoInicialProductos = [
    {
      id: 1,
      nombre: "Play Station 5",
      precio: 1500.0,
      imagen:
        "data:image/jpeg;base64,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",
    },
    {
      id: 2,
      nombre: "Nintendo Switch",
      precio: 1000.0,
      imagen:
        "https://assets.nintendo.com/image/upload/ncom/en_US/switch/site-design-update/oled-model-promo-mobile",
    },
    {
      id: 3,
      nombre: "Xbox Series S",
      precio: 2500.0,
      imagen:
        "https://generacionxbox.com/wp-content/uploads/2020/11/Xbox-series-S.jpg",
    },
  ];

  const [productos, setProductos] = useState(estadoInicialProductos);

  return (
    <Fragment>
      <Header />
      <Container id="productos-pagina">
        <Col className="m-5 ">
          <h3>Productos Tecnologicos</h3>
        </Col>
        <section className="py-2 border-top border-bottom">
          <Row>
            {productos.map((itemProducto, item) => {
              return (
                <Col className="mb-3">
                  <Productos key={itemProducto.id} productos={itemProducto} />
                </Col>
              );
            })}
          </Row>
        </section>
      </Container>
      <Footer />
    </Fragment>
  );
};
