import React from 'react'

export const Hero = ({children}) => {
  return (
    <section className="w-full min-h-[500px] relative flex flex-col">
      {children}
    </section>
  )
}
