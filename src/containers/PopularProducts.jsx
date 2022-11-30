import React from 'react'
import { Product } from "../components/Product"
import { Skeleton } from '../components/Skeleton'
import { useGetProducts } from '../hooks/useGetProducts'


const API = "https://api.escuelajs.co/api/v1/products"

export const PopularProducts = () => {
  
  const {loading, products} = useGetProducts(API)
 
  return (
    <section className="w-full h-auto my-10 pl-7 pr-3 flex flex-col gap-3 lg:gap-10 lg:my-16">
      <h2 className="text-xl font-bold lg:text-3xl">Popular Products</h2>
      <div id='products' className="w-full h-auto pb-5 snap-x overflow-x-auto overflow-y-hidden flex items-center gap-5">
      { 
        loading ? 
          <>
            <Skeleton />
            <Skeleton />
            <Skeleton />
            <Skeleton />
            <Skeleton />
          </>
        : products.map((product, index) => {
            return <Product loading={loading} key={index} product={product} />
          })
      }
      </div>
    </section>
  )
}
