import React from 'react'

import bgHomeMobile from "@images/homeBgMobile2.jpg"
import bgHomeDesktop from "@images/bgHomeDesktop.png"

import bgProfileMobile from "@images/bgProfileMobile.png"
import bgProfileDesktop from "@images/bgProfileDesktop.png"

import bgCartMobile from "@images/bgCartMobile.png"
import bgCartDesktop from "@images/bgCartDesktop.png"

export const Background = ({type}) => {

  let bgMobile;
  let bgDesktop;
  const backgrounds = {
    hero: {
      bgMobile: bgHomeMobile,
      bgDesktop: bgHomeDesktop,
    },
    profile: {
      bgMobile: bgProfileMobile,
      bgDesktop: bgProfileDesktop,
    },
    cart: {
      bgMobile: bgCartMobile,
      bgDesktop: bgCartDesktop,
    }
  }
  
  if(type === "home"){
    bgMobile = backgrounds.hero.bgMobile
    bgDesktop = backgrounds.hero.bgDesktop
  }else if(type === "profile"){
    bgMobile = backgrounds.profile.bgMobile
    bgDesktop = backgrounds.profile.bgDesktop
  }else if(type === "cart"){
    bgMobile = backgrounds.cart.bgMobile
    bgDesktop = backgrounds.cart.bgDesktop
  }
  return (
    <picture className="absolute w-full h-full z-0">
        <source media="(min-width: 640px)" srcSet={bgDesktop} />
        <img className="absolute w-full h-full z-0 bg-cover bg-center" src={bgMobile} alt="" />
    </picture>
  )
}
