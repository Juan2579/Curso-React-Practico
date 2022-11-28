import React from 'react'
import { Background } from '../components/Background'
import { CartProducts } from '../components/CartProducts'
import { Cart } from '../containers/Cart'

export const CartPage = () => {
  return (
    <main className='w-full h-auto'>
      <Cart>
        <Background type={"cart"} />
        <CartProducts />
      </Cart>
    </main>
  )
}
