import React, { useContext, useState, useEffect } from 'react'
import { Button } from 'react-bootstrap';
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
        console.log("cards to export: ", { toExport })
    }

    const addCard = (card) => {
        context.addToCart({ id: card.id, name: card.name, price: 10, set: card.set, number: card.number })
    }

    const renderCards = () => {
        return cards.map(card => {
            return <img src={card.imageUrl} onClick={() => { addCard(card) }}></img >
        })
    }

    return (
        <>
            {renderCards()}
            <Button onClick={formatCards}>
                Export
            </Button>
        </>
    )
}

export default DeckBuilder
