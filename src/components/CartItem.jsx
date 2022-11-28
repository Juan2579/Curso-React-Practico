import React from 'react'
import productImage from "@images/popularproduct1.png"

export const CartItem = () => {
  return (
    <article className='w-full h-24 px-3 py-3 flex justify-center items-center gap-3 bg-gray-200 rounded-lg'>
      <img className='min-w-[80px] max-w-[110px] h-24 pr-4' src={productImage} alt="" />
      <div className='flex flex-col justify-center pr-4 gap-3'>
        <p className='text-base'>Sneaker Jordan</p>
        <span className='w-20 py-0.5 rounded-2xl border-2 border-mainOrange text-mainOrange font-bold text-center'>$ 849.90</span>
      </div>
      <button>
        <svg className='w-6 fill-current text-red-700' viewBox="0 0 76 76">
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
