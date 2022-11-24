import React from 'react'
import bgHomeMobile from "@images/homeBgMobile.jpg"

export const HeroBackground = () => {
  return (
    <picture className="absolute w-full h-full z-0">
        <source media="(min-width: 640px)" srcSet="" />
        <img className="absolute w-full h-full z-0 bg-cover bg-center" src={bgHomeMobile} alt="" />
    </picture>
  )
}
