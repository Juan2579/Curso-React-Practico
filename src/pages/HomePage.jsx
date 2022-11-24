import React from 'react'
import { HeroBackground } from '../components/HeroBackground'
import { HeroContent } from '../components/HeroContent'
import { Product } from '../components/Product'
import { Hero } from '../containers/Hero'
import { PopularProducts } from '../containers/PopularProducts'

export const HomePage = () => {
  return (
    <main className="w-full h-auto">
      <Hero>
        <HeroBackground />
        <HeroContent />
      </Hero>

      <PopularProducts>
        <Product />
      </PopularProducts>



    </main>
  )
}
