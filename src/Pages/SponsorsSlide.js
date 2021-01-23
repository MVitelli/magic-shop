import { Image, Row, Col } from 'react-bootstrap';

const sponsors = [
  'http://www.magic4ever.com.ar/image/cache/data/636011056405671140-80x80.png',
  'http://www.magic4ever.com.ar/image/cache/data/yttutyutut-80x80.png',
  'http://www.magic4ever.com.ar/image/cache/data/descarsdfga (1)-80x80.png',
  'http://www.magic4ever.com.ar/image/cache/data/AKHlogo-80x80.png',
  'http://www.magic4ever.com.ar/image/cache/data/imadsfsdfsdfsdfsdfges-80x80.png'
]

const SponsorsSlide = () => {
  return (
    <>
      <Row style={{ margin: "-1rem 3rem -1rem 5rem" }}>
        {sponsors.map((sponsor) => {
          return (
            <Col>
              <Image
                src={sponsor}
                fluid
              />
            </Col>
          )
        })}
      </Row>
    </>
  );
}

export default SponsorsSlide;
