import React from 'react'

export const PopularProducts = ({children}) => {
  return (
    <section className="w-full h-auto my-10 pl-7 pr-3 flex flex-col gap-3">
      <h2 className="text-xl font-bold">Popular Products</h2>
      <div className="w-full h-auto snap-x overflow-x-auto overflow-y-hidden flex items-center gap-5">
      {children}
      </div>
    </section>
  )
}
