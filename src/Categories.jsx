import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion';

import cato01 from './assets/cato01.jpeg';
import cato02 from './assets/cato02.jpg';
import cato03 from './assets/cato03.jpg';
import cato04 from './assets/cato04.jpg';
import cato05 from './assets/cato05.jpeg';
import cato06 from './assets/cato06.jpg';
import cato07 from './assets/cato07.jpg';

export default function Categories() {

    useEffect(() => {
        const handleResize = () => {
            const box = document.querySelector('.box-1')
            const h = box.getBoundingClientRect().height
            
            const box2 = document.querySelector('.box-2')
            box2.style.height = `${h}px`
        }

        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    return (
        <>
            <p className='w-full text-center mt-10 literata-regular'>Shop by</p>
            <p className='w-full text-center text-5xl pb-4 mb-2 literata-regular'>Category</p>
            <div className='w-full px-2 flex gap-2 mb-2 literata-bold'>
                <div className='w-[40%] flex flex-col gap-2 box-1'>
                    <div className='w-[1/2] aspect-[3/1] flex gap-2'>
                        <div className='flex-1 h-full relative overflow-hidden'>
                            <Image 
                                src={cato01}
                                aspectClass='aspect-[3/2]'
                                text='Rings'
                            />
                        </div>

                        <div className='flex-1 h-full overflow-hidden relative'>
                            <Image 
                                src={cato02}
                                aspectClass='aspect-[3/2]'
                                text='Necklaces'
                            />
                        </div>
                    </div>

                    <div className='w-[1/2] aspect-[3/1] relative'>
                        <div className='flex-1 h-full overflow-hidden relative'>
                            <Image 
                                src={cato03}
                                aspectClass='aspect-[3/1]'
                                text='Pendants'
                            />
                        </div>
                    </div>
                </div>

                <div className='w-[20%] box-2'>
                    <div className='flex-1 h-full overflow-hidden relative'>
                        <Image 
                            src={cato04}
                            aspectClass='aspect-[3/1]'
                            text='Anklets'
                        />
                    </div>
                </div>

                <div className='w-[40%] flex flex-col gap-2'>
                    
                    <div className='w-[1/2] aspect-[3/1]'>
                        <div className='flex-1 h-full overflow-hidden relative'>
                            <Image 
                                src={cato05}
                                aspectClass='aspect-[3/1]'
                                text='Bangels'
                            />
                        </div>
                    </div>

                    <div className='w-[1/2] aspect-[3/1] flex gap-2'>
                        <div className='flex-1 h-full overflow-hidden relative'>
                            <Image 
                                src={cato06}
                                aspectClass='aspect-[3/2]'
                                text='Ear rings'
                            />
                        </div>

                        <div className='flex-1 h-full overflow-hidden relative'>
                            <Image 
                                src={cato07}
                                aspectClass='aspect-[3/2]'
                                text='Marriage rings'
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

const Image = ({ aspectClass, src, text }) => {

    const [isHovering, setIsHovering] = useState(false);

    return (
        <>
            <motion.img 
                className={`w-full h-full object-cover ${aspectClass} cursor-pointer`}
                src={src}
                animate={{ scale: isHovering ? 1.1 : 1 }}

                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
            />

            <motion.p 
                className='absolute bottom-[.5rem] left-0 w-full text-center text-2xl cato-text text-[#6E2C2C]'
                animate={{ y: !isHovering ? '100%' : 0 }}
                transition={{ type: 'tween', duration: .1 }}
            >
                {text}
            </motion.p>
        </>
    )
}