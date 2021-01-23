import { Card, Col, Container, Image, Row } from "react-bootstrap";
import MainNavbar from "./MainNavbar";
import MenuNavbar from "./MenuNavbar";
import ImageSlide from "./ImageSlide";
import SponsorsSlide from "./SponsorsSlide";

const Home = () => {
  return (
    <>
      <Container>
        <Row>
          <Col></Col>
          <Col xs={11}>
            <MainNavbar />
            <MenuNavbar />
            <Row style={{ margin: "1rem 0rem 0rem 0rem" }}>
              <Col xs={8}>
                <Card>
                  <Card.Body>
                    <ImageSlide />
                  </Card.Body>
                </Card>
              </Col>
              <Col xs={4}>
                <Card>
                  <Card.Body>
                    <Image src="http://www.magic4ever.com.ar/image/cache/data/ESTABLISHED 1856-302x420.jpg" style={{ height: "100" }} fluid />
                  </Card.Body>
                </Card>
              </Col>
            </Row>
            <Row style={{ margin: "1rem 0rem 0rem 0rem" }}>
              <Col xs={12}>
                <Card>
                  <Card.Body>
                    <SponsorsSlide />
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Col>
          <Col></Col>
        </Row>
      </Container>

    </>
  );
}

export default Home;
