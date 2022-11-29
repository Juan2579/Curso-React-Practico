import React from 'react'

export const HeroContent = () => {
  const scrollHero = (e) => {
    let products = document.getElementById("products")
    e.preventDefault()
    products && products.scrollIntoView({behavior: 'smooth'})
  }
  return (
    <section className="w-11/12 h-auto min-h-[500px] mx-auto py-7 flex flex-col justify-between items-center z-10 text-center lg:w-[80%] lg:min-h-screen lg:items-start lg:justify-center lg:gap-16">
      <h1 className="text-3xl font-bold lg:w-[55%] lg:text-6xl ">Explore the Newest Collections</h1>
      <a onClick={scrollHero} className="w-44 h-12 flex items-center bg-lightOrange rounded-lg shadow-xl  lg:w-[45%] lg:max-w-[250px] lg:h-20 lg:ml-44">
        <button className="w-full text-mainOrange text-lg font-bold lg:text-3xl">Shop Now</button>
      </a>
    </section>
  )
}
