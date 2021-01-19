import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
const STORAGE_KEY = 'MAGIC_CART'

const initialState = {
    cart: [],
    numberOfItemsInCart: 0,
    total: 0
}

const SiteContext = React.createContext()

const calculateTotal = (cart) => {
    const total = cart.reduce((acc, next) => {
        const quantity = next.quantity
        acc = acc + JSON.parse(next.price) * quantity
        return acc
    }, 0)
    return total
}

const SiteProvider = (props) => {
    let state = initialState;
    useEffect(() => {
        if (typeof window !== 'undefined') {
            window.localStorage.getItem(STORAGE_KEY)
            if (!storageState) {
                window.localStorage.setItem(STORAGE_KEY, JSON.stringify(initialState))
            }
        }
    }, [])

    const setItemQuantity = (item) => {
        const storageState = JSON.parse(window.localStorage.getItem(STORAGE_KEY))
        const { cart } = storageState
        const index = cart.findIndex(cartItem => cartItem.id === item.id)
        cart[index].quantity = item.quantity
        window.localStorage.setItem(STORAGE_KEY, JSON.stringify({
            cart, numberOfItemsInCart: cart.length, total: calculateTotal(cart)
        }))
    }

    const addToCart = item => {
        const storageState = JSON.parse(window.localStorage.getItem(STORAGE_KEY))
        const { cart } = storageState
        if (cart.length) {
            const index = cart.findIndex(cartItem => cartItem.id === item.id)
            if (index >= Number(0)) {
                /* If this item is already in the cart, update the quantity */
                cart[index].quantity = cart[index].quantity + item.quantity
            } else {
                /* If this item is not yet in the cart, add it */
                cart.push(item)
            }
        } else {
            /* If no items in the cart, add the first item. */
            cart.push(item)
        }

        window.localStorage.setItem(STORAGE_KEY, JSON.stringify({
            cart, numberOfItemsInCart: cart.length, total: calculateTotal(cart)
        }))
        toast("Successfully added item to cart!", {
            position: toast.POSITION.TOP_LEFT
        })
    }

    const removeFromCart = (item) => {
        const storageState = JSON.parse(window.localStorage.getItem(STORAGE_KEY))
        let { cart } = storageState
        cart = cart.filter(c => c.id !== item.id)

        window.localStorage.setItem(STORAGE_KEY, JSON.stringify({
            cart, numberOfItemsInCart: cart.length, total: calculateTotal(cart)
        }))
    }

    const clearCart = () => {
        window.localStorage.setItem(STORAGE_KEY, JSON.stringify(initialState))
    }


    return (
        <SiteContext.Provider value={{
            ...state,
            addToCart: addToCart,
            clearCart: clearCart,
            removeFromCart: removeFromCart,
            setItemQuantity: setItemQuantity
        }}>
            {props.children}
        </SiteContext.Provider>
    )
}

export {
    SiteProvider,
    SiteContext
}