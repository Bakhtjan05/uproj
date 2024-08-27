import Image from 'next/image'
import React from 'react'

function Loading() {
  return (
    <div className='fixed w-full h-full flex justify-center items-center z-[999] bg-[#19360F]'>
      <div className=''>
        <Image width={100} height={200} alt='loading' src={"/images/loadingAnim.gif"}></Image>
      </div>
    </div>
  )
}

export default Loading