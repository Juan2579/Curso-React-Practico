import React from 'react'
import { useHistory } from 'react-router-dom'
import { CartItem } from './CartItem'

export const CartProducts = () => {
  const history = useHistory()

  const goToHome = () => {
    history.replace("/")
  }

  return (
    <div className="w-[90%] h-full z-10 mx-auto flex flex-col  items-center text-left gap-10 pt-5 pb-28">
      <button onClick={goToHome} className="absolute top-6 left-5">
        <svg className="w-8 fill-current text-white" viewBox="0 0 612 612">
          <g>
            <g id="Left">
              <g>
                <path d="M353.812,172.125c-7.478,0-14.21,2.926-19.335,7.612l-0.058-0.077L219.67,284.848c-5.91,5.451-9.295,13.101-9.295,21.152
                s3.385,15.701,9.295,21.152L334.42,432.34l0.058-0.076c5.125,4.686,11.857,7.611,19.335,7.611
                c15.836,0,28.688-12.852,28.688-28.688c0-8.357-3.634-15.836-9.353-21.076l0.058-0.076L281.52,306l91.685-84.054l-0.058-0.077
                c5.719-5.221,9.353-12.68,9.353-21.057C382.5,184.977,369.648,172.125,353.812,172.125z M306,0C137.012,0,0,137.012,0,306
                s137.012,306,306,306s306-137.012,306-306S474.988,0,306,0z M306,554.625C168.912,554.625,57.375,443.088,57.375,306
                S168.912,57.375,306,57.375S554.625,168.912,554.625,306S443.088,554.625,306,554.625z"/>
              </g>
            </g>
          </g>
        </svg>
      </button>
      <h1 className='text-2xl font-bold text-white'>Shopping Cart</h1>
      <div className="w-full h-full py-4 px-2 snap-x overflow-y-auto flex flex-col rounded-md bg-gray-300 gap-3 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-40 border border-gray-100">
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
      </div>
      <div className='w-full h-20 flex items-center justify-around  bg-[#210F33] absolute rounded-t-xl bottom-0 px-2'>
        <p className="py-3 px-7 bg-orange-700 text-white rounded-lg font-bold">Total $1000</p>
        <p className="py-3 px-7 bg-green-500 text-white rounded-lg font-bold">Checkout</p>
      </div>
    </div>
  )
}
