import React from 'react'

export const Skeleton = () => {
  return (
    <div className="w-[200px] h-[340px] shadow-2xl rounded-md snap-center overflow-hidden flex flex-col shrink-0 lg:min-w-[300px] lg:max-w-[320px]">
      <div className="w-[90%] h-full mx-auto flex flex-col justify-center gap-5 px-2 pt-14 pb-3 items-center relative animate-pulse">
        <div className="w-10 h-8 bg-gray-300 flex justify-center items-center absolute top-3 right-[-4px] rounded-full shadow-xl lg:w-12 lg:h-10"></div>
        <div className="w-36 h-40 rounded-md bg-gray-300 lg:w-44 lg:h-44"></div>
        <div className="flex flex-col gap-4">
          <div className='w-[170px] h-6 bg-gray-300 lg:w-[200] lg:h-7'></div>
          <div className='w-[170px] h-6 bg-gray-300 lg:w-[200] lg:h-7'></div>
        </div> 
      </div>
    </div>
  )
}
