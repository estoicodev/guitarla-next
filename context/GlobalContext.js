"use client"
import React, { createContext, useContext, useEffect, useState } from 'react'

const GlobalStateContext = createContext()

export const GlobalStateProvider = ({ children }) => {
  const [cart, setCart] = useState([])

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem('cart')) ?? []
    if (cart.length) {
      setCart(cart)
    } else {
      localStorage.setItem('cart', JSON.stringify(cart))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart])

  const addToCart = (guitar) => {

    const existingGuitarIndex = cart.findIndex(g => g.id === guitar.id)

    let newCart
    if (existingGuitarIndex === -1) {
      newCart = [...cart, guitar]
      setCart(newCart)
    } else {
      if (cart[existingGuitarIndex].quantity + guitar.quantity > 10) {
        alert('You can only add up to 10 guitars of the same model')
        return
      }

      newCart = [...cart]
      newCart[existingGuitarIndex].quantity += guitar.quantity
      setCart(newCart)
    }
    localStorage.setItem('cart', JSON.stringify(newCart))
  }

  const deleteFromCart = (guitarId) => {
    const newCart = cart.filter(g => g.id !== guitarId)
    setCart(newCart)
    localStorage.setItem('cart', JSON.stringify(newCart))
  }
  
  const updateQuantity = ({ guitarId, quantity }) => {
    const existingGuitarIndex = cart.findIndex(g => g.id === guitarId)

    const newCart = [...cart]
    newCart[existingGuitarIndex].quantity = +quantity
    setCart(newCart)
    localStorage.setItem('cart', JSON.stringify(newCart))
  }

  return (
    <GlobalStateContext.Provider value={({
      cart,
      addToCart,
      deleteFromCart,
      updateQuantity
    })}>
      {children}
    </GlobalStateContext.Provider>
  )
}

export const useGlobalState = () => useContext(GlobalStateContext)