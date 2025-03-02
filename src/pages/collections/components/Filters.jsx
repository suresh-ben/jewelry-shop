import { div } from 'framer-motion/client'
import React, { useEffect } from 'react'

export default function Filters() {

    useEffect(() => {
        const handleFiltersAlignment = () => {
            const filtersDivRef = document.getElementsByClassName('filters')[0];
            const parentDivRef = document.getElementsByClassName('parent-prods')[0];

            if((parentDivRef.getClientRects()[0].top < 6*16) && parentDivRef.getClientRects()[0].bottom > window.innerHeight) {
                filtersDivRef.style.position = 'fixed'; // or 'relative' as needed
                filtersDivRef.style.top = `${6*16}px`;
                filtersDivRef.style.left = `${0}px`;
            } 
            else if(parentDivRef.getClientRects()[0].bottom <= window.innerHeight) {
                filtersDivRef.style.position = 'absolute'; // or 'relative' as needed
                filtersDivRef.style.top = `auto`;
                filtersDivRef.style.bottom = `${0}px`;
                filtersDivRef.style.left = `${0}px`;
            }
            else {
                filtersDivRef.style.position = 'static';
            }
        }

        window.addEventListener('scroll', handleFiltersAlignment);
        window.addEventListener('wheel', handleFiltersAlignment);
        return () => {
            window.removeEventListener('scroll', handleFiltersAlignment);
            window.removeEventListener('wheel', handleFiltersAlignment);
        }
    }, [])

    return (
        <div className='w-[23.5%] ml-[1.5%] flex flex-col roboto-regular bg-gray-100 rounded-md pb-0 my-4 h-[calc(100vh-8rem)] filters'>
            <p className='roboto-medium py-4 px-4 border-b w-full'>FILTERS</p>

            <div className='flex-1 overflow-y-auto px-4'>
                {
                    [
                        {
                            heading: 'Type',
                            cats: [
                                'Rings', 'Necklaces', 'Nose Pins', 'Pendants', 'Earrings', 'Bangles', 'Anklets'
                            ],
                            tag: '+15 more'
                        },
                        {
                            heading: 'Price',
                            cats: [
                                'Below ₹10,000', '₹10,000 - ₹20,000', '₹20,000 - ₹30,000', '₹30,000 - ₹40,000', '₹40,000 - ₹50,000', '₹50,000 and Above'
                            ],
                        },
                        {
                            heading: 'Metal',
                            cats: [
                                'Gold', 'Rose Gold', 'White Gold', 'Platinum', 'Plain Gold/Platinum'
                            ],
                        },
                        {
                            heading: 'Metal',
                            cats: [
                                'Gold', 'Rose Gold', 'White Gold', 'Platinum', 'Plain Gold/Platinum'
                            ],
                        },
                        {
                            heading: 'Gold Purity',
                            cats: [
                                '18k', '22k'
                            ],
                        },
                        {
                            heading: 'Stones',
                            cats: [
                                'Diamond', 'Gemstone', 'Ruby', 'Sapphire', 'Emerald'
                            ],
                            tag: '+5 more'
                        },
                        {
                            heading: 'Design',
                            cats: [
                                'Fashion', 'Classic', 'Fusion', 'Two Tone', 'Zodiac'
                            ],
                            tag: '+7 more'
                        },
                    ].map((category, ind) => <Catogery key={ind} {...category} />)
                }
            </div>
        </div>
    )
}

function Catogery({ heading, cats, tag}) {
    return <div className='w-full border-y flex flex-col pb-2'>
        <p className='pt-2 pb-2 roboto-medium'>{heading}</p>

        <div className='flex flex-col gap-1'>
            {
                cats.map((cat, ind) => {
                    return <div key={ind} className='flex items-center gap-2'>
                        <div className='rounded-full h-[1.25rem] w-[1.25rem] border border-gray-300' />
                        <p className='text-sm'>{cat}</p>
                    </div>
                })
            }
        </div>

        <p className='text-xs mt-1 ml-[1.5rem] text-[#D2042D]'>{tag}</p>
    </div>
}