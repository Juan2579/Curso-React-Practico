import React from 'react'
import bgHomeMobile from "@images/homeBgMobile2.jpg"
import bgProfileMobile from "@images/bgProfileMobile.png"
import bgCartMobile from "@images/bgCartMobile.png"

export const Background = ({type}) => {

  let bgMobile
  const backgrounds = {
    hero: {
      bgMobile: bgHomeMobile
    },
    profile: {
      bgMobile: bgProfileMobile
    },
    cart: {
      bgMobile: bgCartMobile
    }
  }
  
  if(type === "home"){
    bgMobile = backgrounds.hero.bgMobile
  }else if(type === "profile"){
    bgMobile = backgrounds.profile.bgMobile
  }else if(type === "cart"){
    bgMobile = backgrounds.cart.bgMobile
  }
  return (
    <picture className="absolute w-full h-full z-0">
        <source media="(min-width: 640px)" srcSet="" />
        <img className="absolute w-full h-full z-0 bg-cover bg-center" src={bgMobile} alt="" />
    </picture>
  )
}
