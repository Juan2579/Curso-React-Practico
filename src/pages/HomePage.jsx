import React from 'react'
import { HeroBackground } from '../components/HeroBackground'
import { HeroContent } from '../components/HeroContent'
import { Hero } from '../containers/Hero'

export const HomePage = () => {
  return (
    <main className="w-full h-auto">
      <Hero>
        <HeroBackground />
        <HeroContent />
      </Hero>




    </main>
  )
}
