import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import "./Home.css"; // Ensure this is the correct path

const Home = () => {
  return (
    <div className="size">
      <Container fluid>
        <Row>
          <Col lg={12}> {/* Changed to lg={12} to take full width */}
            <div className="carousel-container">
              <Carousel className="carousel" data-bs-theme="dark">
                <Carousel.Item>
                  <img
                    className="d-block w-100 carousel-img"
                    src={require("../../image/g1.jpeg")}
                    alt="First slide"
                  />
                  <Carousel.Caption>
                    <h5>First slide label</h5>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                  </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                  <img
                    className="d-block w-100 carousel-img"
                    src={require("../../image/n1.jpg")}
                    alt="Second slide"
                  />
                  <Carousel.Caption>
                    <h5>Second slide label</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                  <img
                    className="d-block w-100 carousel-img"
                    src={require("../../image/n1.jpg")}
                    alt="Third slide"
                  />
                  <Carousel.Caption>
                    <h5>Third slide label</h5>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
