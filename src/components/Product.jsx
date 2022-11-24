import React from 'react'
import popularProduct1 from "@images/popularproduct1.png"

export const Product = () => {
  return (
    <article className="w-48 h-52 snap-center overflow-hidden shrink-0 shadow-xl">
      <div>
        <img src={popularProduct1} alt="" />
      </div>
    </article>
  )
}
