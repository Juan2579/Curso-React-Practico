import React from 'react'

export const CartItem = ({product, deleteFromCart}) => {
  return (
    <article className='w-full h-24 px-3 py-3 flex justify-center items-center gap-3 bg-gray-50 rounded-lg lg:justify-around md:h-32 md:gap-0'>
      <img className='w-[90px] h-20 pr-4 lg:w-[150px] lg:h-24' src={product?.images[0]} alt="" />
      <div className='flex flex-col justify-center pr-4 gap-3'>
        <p className='w-40 text-clip text-base lg:w-48 lg:text-xl'>{product?.title}</p>
        <span className='w-20 py-0.5 rounded-2xl border-2 border-mainOrange text-mainOrange font-bold text-center lg:w-24 lg:text-lg'>$ {product?.price}</span>
      </div>
      <button onClick={() => deleteFromCart(product)}>
        <svg className='w-6 fill-current text-red-700 lg:w-9' viewBox="0 0 76 76">
          <g>
            <path d="M38,0C17,0,0,17,0,38s17,38,38,38s38-17,38-38S59,0,38,0z M38,72C19.2,72,4,56.8,4,38S19.2,4,38,4
              s34,15.2,34,34S56.8,72,38,72z M40.8,38l12.6-12.6c0.8-0.8,0.8-2,0-2.8s-2-0.8-2.8,0L38,35.2L25.4,22.6c-0.8-0.8-2-0.8-2.8,0
              s-0.8,2,0,2.8L35.2,38L22.6,50.6c-0.8,0.8-0.8,2,0,2.8s2,0.8,2.8,0L38,40.8l12.6,12.6c0.8,0.8,2,0.8,2.8,0s0.8-2,0-2.8L40.8,38z"/>
          </g>
        </svg>
      </button>
    </article>
  )
}
