import React, { useContext, useEffect, useState } from 'react'
import { Button, Col, Container, Image, Modal, Row } from 'react-bootstrap';
import { SiteContext } from '../Context/SiteContext';
import cartIcon from '../Images/cartIcon.svg'

const Cards = () => {
    const [cards, setCards] = useState([])
    const [show, setShow] = useState(false)
    const context = useContext(SiteContext)
    const url = 'https://api.magicthegathering.io/v1/cards'

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setCards(data.cards.slice(0, 20)))
    }, [])

    const renderCards = () => {
        return cards.map(card => {
            return <img src={card.imageUrl} onClick={() => { context.addToCart({ id: card.id, name: card.name, imgUrl: card.imageUrl, price: 10 }) }}></img>
        })
    }

    const renderCartItems = () => {
        return context.cart.map(item => {
            return (
                <Row style={{ paddingBottom: "0.5em" }}>
                    <Col>
                        <Image src={item.imgUrl} round fluid></Image>
                    </Col>
                    <Col>
                        {item.name}
                    </Col>
                    <Col>
                        {item.price}
                    </Col>
                </Row>
            )
        });
    }

    const showSidebar = () => setShow(true)
    const hideSidebar = () => setShow(false)

    return (
        <>
            <Container>
                <Image src={cartIcon} alt="Cart icon" onClick={showSidebar}>
                </Image>
                {cards.length > 0
                    ? renderCards()
                    : <> No cards</>
                }
            </Container>
            <Modal dialogClassName="modal_cart" show={show} onHide={hideSidebar}>
                <Modal.Header closeButton>
                    <Modal.Title>Cart</Modal.Title>
                </Modal.Header>
                <Container style={{ height: "100%", width: "60vh" }} fluid>
                    <Col>
                        {renderCartItems()}
                        <Row>
                            <Button variant="secondary" onClick={hideSidebar}>
                                Close
                            </Button>
                            <Button variant="primary" onClick={context.clearCart}>
                                Clear Cart
                            </Button>
                        </Row>
                    </Col>
                </Container>
            </Modal>
        </>
    )
}

export default Cards
