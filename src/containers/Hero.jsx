import React from 'react'

export const Hero = ({children}) => {
  return (
    <div className="w-full min-h-[500px] relative flex flex-col">
      {children}
    </div>
  )
}
