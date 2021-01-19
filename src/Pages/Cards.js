import React, { useContext, useEffect, useState } from 'react'
import { SiteContext } from '../Context/SiteContext';
import cardsMock from '../Mock/Cards';

const Cards = () => {
    const [cards, setCards] = useState(cardsMock.cards)
    const context = useContext(SiteContext)
    const COUNT = 20;
    const url = 'https://api.magicthegathering.io/v1/cards'

    // useEffect(() => {
    //     fetch(url)
    //         .then(res => res.json())
    //         .then(data => setCards(data.cards.slice(0, 20)))
    // }, [])

    const renderCards = () => {
        return cards.map(card => {
            return <img src={card.imageUrl} onClick={() => { context.addToCart({ id: 1, name: "asd", price: 10 }) }}></img>
        })
    }

    return (
        <>
            {cards.length > 0
                ? renderCards()
                : <> No cards</>
            }
        </>
    )
}

export default Cards
