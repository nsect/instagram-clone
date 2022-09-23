/* eslint-disable @next/next/no-img-element */
import Image from 'next/image'
import React from 'react'

function Story({img, username}) {
  return (
    <div>
        <img className='h-14 w-14 rounded-full p-[1.5px] border-red-500 border-2 object-contain cursor-pointer hover:scale-110 transition transform duration-200 ease-out' src={img} alt={username}/>
        <p className='text-xs w-14 truncate text-center'>{username}</p>
    </div>
  )
}

export default Story