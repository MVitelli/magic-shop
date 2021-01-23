import React, { useContext, useState, useEffect } from 'react'
import { Button, Container, Image, Row } from 'react-bootstrap';
import { SiteContext } from '../Context/SiteContext';

const DeckBuilder = () => {
    const [cards, setCards] = useState([])
    const [exportCards, setExportCards] = useState(null)
    const context = useContext(SiteContext)
    const url = 'https://api.magicthegathering.io/v1/cards'

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setCards(data.cards.slice(0, 20)))
    }, [])

    const formatCards = () => {
        const toExport = context.cart.map(card => {
            const { set, number, name } = card;
            const count = 1;
            return `${count} ${name} (${set}) ${number}`
        });
        setExportCards(toExport)
    }

    const copyToClipboard = async () => {
        formatCards()
        const text = exportCards.reduce((acc, expCard) => {
            return acc.concat(expCard + '\n')
        }, "")
        await navigator.clipboard.writeText(text);
    }

    const addCard = (card) => {
        context.addToCart({ id: card.id, name: card.name, price: 10, set: card.set, number: card.number })
    }

    const renderCards = () => {
        return cards.map(card => {
            return (
                <Image src={card.imageUrl} onClick={() => { addCard(card) }} rounded ></Image>
            )
        })
    }

    return (
        <>
            <Container>
                <Row>
                    <Button variant="dark" onClick={context.clearCart}>
                        Clear cart
                    </Button>
                    <Button variant="dark" onClick={copyToClipboard}>
                        Copy deck to clipboard
                    </Button>
                </Row>
                {renderCards()}
            </Container>
        </>
    )
}

export default DeckBuilder
