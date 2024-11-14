import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion';

import cato01 from './assets/new02.jpg';
import cato02 from './assets/new01.jpg';
import cato03 from './assets/new03.jpg';

export default function NewCollections() {

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

    const collections = [
        {
            image: cato02,
            head: 'Rings',
            tag: 'Lorem Ipsum is simply dummy text of the',
        },
        {
            image: cato01,
            head: 'Rings',
            tag: 'Lorem Ipsum is simply dummy text of the',
        },
        {
            image: cato03,
            head: 'Rings',
            tag: 'Lorem Ipsum is simply dummy text of the',
        }
    ];

    return (
        <>
            <p className='w-full text-center mb-2 text-3xl cormorant-garamond-medium'>New Collections You'll Love</p>
            <p className='w-full text-center mb-5 text-lg cormorant-garamond-medium'>Let's take a glimpse at our featured collections before diving in!</p>
            <div className='w-full px-2 flex gap-[2.5rem] mb-2 justify-center'>
                {
                    collections.map((item, ind) => {
                        return <div className='w-[25%] aspect-[0.9] overflow-hidden relative'>
                            <Image 
                                src={item.image}
                                {...item}
                            />
                        </div>
                    })
                
                }
            </div>
        </>
    )
}

const Image = ({ aspectClass, src, head, tag }) => {

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

            <motion.div
                style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)'}}
                className='absolute bottom-0 left-0 right-0 min-h-[5rem] z-10 flex flex-col justify-center items-center'
            >
                <p className='cormorant-garamond-bold w-full text-center text-2xl'>{head}</p>
                <p className='cormorant-garamond-medium w-full text-center text-md'>{tag}</p>
            </motion.div>
        </>
    )
}