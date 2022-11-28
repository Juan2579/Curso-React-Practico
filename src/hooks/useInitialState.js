import { useState } from "react";

const initialState = {
  cart: [],
}

export const useInitialState = () => {
  const [state, setState] = useState(initialState)

  const addToCart = (payload) => {
    setState({
      ...state,
      cart: [...state.cart, payload]
    })
    console.log(payload)
  }

  const deleteFromCart = (payload) => {
    const productIndex = state.cart.findIndex(product => product.id === payload.id)

    state.cart.splice(productIndex, 1)
    setState({
      ...state,
      cart: [...state.cart]
    })

  }

  return {
    state,
    addToCart,
    deleteFromCart
  }
}