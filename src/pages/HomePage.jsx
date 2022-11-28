import React from 'react'
import { Hero } from '../containers/Hero'
import { Background } from "../components/Background"
import { HeroContent } from '../components/HeroContent'
import { Product } from '../components/Product'
import { PopularProducts } from '../containers/PopularProducts'

export const HomePage = () => {
  return (
    <main className="w-full h-auto">
      <Hero>
        <Background type={"home"} />
        <HeroContent />
      </Hero>

      <PopularProducts>
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </PopularProducts>



    </main>
  )
}
