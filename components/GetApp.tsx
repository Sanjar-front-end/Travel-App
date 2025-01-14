import React from 'react'
import Button from './Button'
import Image from 'next/image'

const GetApp = () => {
  return (
    <section className='flexCenter w-full flex-col pb-[100px]'>
      <div className='get-app'>
        <div className='flex flex-col flex-1 w-full gap-12 justify-center items-start'>
          <h2 className='bold-40 lg:bold-64 lg:max-w-[320px]'>Get for free now!</h2>
          <p className='regular-16 text-gray-10'>Available on iOS and Android, download now!</p>
          <div className='flex flex-col w-full lg:flex-row gap-3'>
            <Button
              type='button'
              title="App Store"
              icon='/apple.svg'
              variant='btn_white'
              full
            />
            <Button
              type='button'
              title="Play store"
              icon='/android.svg'
              variant='btn_dark_green_outline'
              full
            />
          </div>
        </div>

        <div className='flex flex-1 items-center justify-end'> 
          <Image
            src="/phones.png"
            alt='phones'
            width={550}
            height={770}
          />
        </div>
      </div>
    </section>
  )
}

export default GetApp