import React from 'react'

import disc from './assets/discover.jpg'

export default function Discover() {
    return (
        <div className='cormorant-garamond-regular my-10'>
            <div className='flex justify-center items-center'>
                <p className='text-9xl text-center'>DISC</p>
                <img src={disc} className='h-[6rem] rounded-full' />
                <p className='text-9xl text-center'>VER</p>
            </div>

            <p className='text-9xl w-full text-center'>WORLD'S BEST</p>
            <p className='text-9xl w-full text-center'>JEWELRY</p>
        </div>
    )
}
