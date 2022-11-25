import React from 'react'
import popularProduct1 from "@images/popularproduct1.png"

export const Product = () => {
  return (
    <article className="w-48 h-64 snap-center overflow-hidden shrink-0 shadow-2xl rounded-md flex flex-col ">
      <div className="w-10/12 mx-auto flex flex-col justify-around items-center text-center">
        <img className="w-10/12 " src={popularProduct1} alt="" />
        <div className="my-3 flex flex-col gap-2">
          <p className="font-normal">Nike Air Force One</p>
          <p className="text-priceBlue font-bold">$70.99</p> 
        </div>
      </div>
      <button className="w-full h-11 bg-mainOrange text-lightOrange font-bold ">Show</button>
    </article>
  )
}
