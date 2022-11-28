import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'


export const Product = ({product}) => {
  
  const { addToCart } = useContext(AppContext)

  return (
    <article className="min-w-[200px] max-w-[220px] w-auto snap-center overflow-hidden shrink-0 shadow-2xl rounded-md flex flex-col">
      <div className="w-[90%] h-full mx-auto flex flex-col justify-center gap-5 px-2 pt-12 pb-3 items-center text-center relative">
        <button onClick={() => addToCart(product)} className="w-10 h-8 bg-mainOrange flex justify-center items-center absolute top-3 right-[-4px] rounded-lg shadow-xl">
          <svg className='w-7 fill-current text-lightOrange' viewBox="0 0 24 24">
            <path d="M12.2,9h1.6V6.8H16V5.2H13.8V3H12.2V5.2H10V6.8h2.2ZM20,5v5.5L7.45,12.72,5,3H1.25a1,1,0,0,0,0,2H3.47L6.7,18H20V16H8.26l-.33-1.33L22,12.18V5ZM7,19a1.5,1.5,0,1,0,1.5,1.5A1.5,1.5,0,0,0,7,19Zm12,0a1.5,1.5,0,1,0,1.5,1.5A1.5,1.5,0,0,0,19,19Z"/>
          </svg>
        </button>
        <img className="w-36 h-40 rounded-md bg-cover bg-center" src={product.images[0]} alt="" />
        <div className="flex flex-col gap-2">
          <p className="font-normal text-ellipsis whitespace-nowrap overflow-hidden">{product.title}</p>
          <p className="text-priceBlue font-bold">${product.price}</p> 
        </div>
      </div>
      <button className="w-full h-11 bg-mainOrange text-lightOrange font-bold ">Show</button>
    </article>
  )
}
