import React from 'react'

export const PopularProducts = ({children}) => {
  return (
    <section className="w-full h-auto mt-10 mx-10 flex flex-col gap-3">
      <h2 className="text-xl font-bold">Popular Products</h2>
      <div className="w-full h-52 snap-x overflow-x-auto overflow-y-hidden">
      PopularProductsSlider
      {children}
      </div>
    </section>
  )
}
