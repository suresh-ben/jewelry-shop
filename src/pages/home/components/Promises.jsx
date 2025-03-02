import React from 'react';

export default function Promises() {
    return (
        <div className='mt-14'>
            <p className='text-4xl relative z-[40] text-center w-full cormorant-garamond-semibold'>Promises</p>

            <div className='mt-10 flex gap-[10rem] justify-center px-2'>
                <Promise 
                    head='Timeless Elegance'
                    tag='Discover the beauty of jewelry that stands the test of time. Crafted to be as enduring as your most cherished memories, each piece reflects grace, sophistication, and elegance.'
                />
                <Promise 
                    head='Uncompromising Quality'
                    tag='We believe that only the finest materials should be used to create jewelry that lasts a lifetime. With every piece, we ensure exceptional quality that meets the highest standards of craftsmanship.'
                />
                <Promise 
                    head='Exquisite Craftsmanship'
                    tag='Each piece is meticulously crafted by expert artisans, blending tradition with innovation. We pay attention to every detail, so you can wear a masterpiece that speaks to your refined taste.'
                />
            </div>
        </div>
    )
}

function Promise({ head, tag, image }) {
    return (
        <div className='w-[16rem] h-[20rem] bg-gray-100 relative'>
            <div className='bg-[#FEFEFE] absolute -top-[3rem] w-full h-[3rem] z-[30]' />
            <div className='bg-[#FEFEFE] absolute -bottom-[3rem] left-[2rem] w-full h-[3rem] z-[30]' />

            <div className='absolute w-full h-full bg-gray-100 z-[20] border-black border flex justify-center items-center'>
                <div className='h-[95%] w-[95%] bg-white flex flex-col justify-center items-center'>
                    <p className='cormorant-garamond-bold text-xl w-full text-center mb-2'>{head}</p>
                    <p className='cormorant-garamond-regular w-full px-2 text-justify'>{tag}</p>
                </div>
            </div>

            <div className='bg-gray-300 w-full h-full absolute z-[10] rotate-12 translate-x-10 shadow-xl' />
        </div>
    )
}
