import React from 'react'

export const HeroContent = () => {
  return (
    <section className="w-11/12 h-auto min-h-[500px] mx-auto py-7 flex flex-col justify-between items-center z-10 text-center">
      <h1 className="text-3xl font-bold">Explore the Newest Collections</h1>
      <button className="w-44 h-12 bg-lightOrange rounded-md shadow-xl">
        <a className="text-mainOrange text-lg font-bold" href="">Shop Now</a>
      </button>
    </section>
  )
}
