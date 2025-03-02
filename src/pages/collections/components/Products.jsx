import React from 'react'

import star from '../../../assets/star.png';
import love from '../../../assets/loveBorder.png';
import cart from '../../../assets/bagBorder.png'

import prod01 from '../../../assets/prod01.jpg';
import prod02 from '../../../assets/prod02.jpg';
import prod03 from '../../../assets/prod03.jpg';
import prod04 from '../../../assets/prod04.jpg';
import prod05 from '../../../assets/prod05.jpg';
import prod06 from '../../../assets/prod06.jpg';
import prod07 from '../../../assets/prod07.jpg';
import prod08 from '../../../assets/prod08.jpg';
import prod09 from '../../../assets/prod09.jpg';
import prod10 from '../../../assets/prod10.jpg';

import ban01 from '../../../assets/prodBan01.jpg'
import ban02 from '../../../assets/prodBan02.jpg'

export default function Products() {


    return (
        <div className='w-[75%] p-2'>
            <div className='flex flex-wrap gap-[1%] gap-y-[.5rem] roboto-regular'>
                {
                    [
                        {
                            image: prod01,
                            price: '15,789',
                            crossedPrice: '27,674',
                            name: 'Zenni Diamond Pendant Necklace',
                            offer: '10% OFF on making',
                            stars: '4.5',
                            starCount: '45'
                        },
                        {
                            image: prod02,
                            price: '17,739',
                            crossedPrice: '26,874',
                            name: 'Zenni Diamond Pendant Necklace',
                            offer: '10% OFF on making',
                            stars: '4.5',
                            starCount: '45'
                        },
                        {
                            image: prod03,
                            price: '15,789',
                            crossedPrice: '27,674',
                            name: 'Zenni Diamond Pendant Necklace',
                            offer: '10% OFF on making',
                            stars: '4.5',
                            starCount: '45'
                        },
                        {
                            image: prod04,
                            price: '15,789',
                            crossedPrice: '27,674',
                            name: 'Zenni Diamond Pendant Necklace',
                            offer: '10% OFF on making',
                            stars: '4.5',
                            starCount: '45'
                        },
                        {
                            type: 'Image',
                            image: ban01,
                        },
                        {
                            image: prod05,
                            price: '15,789',
                            crossedPrice: '27,674',
                            name: 'Zenni Diamond Pendant Necklace',
                            offer: '10% OFF on making',
                            stars: '4.5',
                            starCount: '45'
                        },
                        {
                            image: prod06,
                            price: '15,789',
                            crossedPrice: '27,674',
                            name: 'Zenni Diamond Pendant Necklace',
                            offer: '10% OFF on making',
                            stars: '4.5',
                            starCount: '45'
                        },
                        {
                            image: prod07,
                            price: '15,789',
                            crossedPrice: '27,674',
                            name: 'Zenni Diamond Pendant Necklace',
                            offer: '10% OFF on making',
                            stars: '4.5',
                            starCount: '45'
                        },
                        {
                            image: prod08,
                            price: '15,789',
                            crossedPrice: '27,674',
                            name: 'Zenni Diamond Pendant Necklace',
                            offer: '10% OFF on making',
                            stars: '4.5',
                            starCount: '45'
                        },
                        {
                            image: prod09,
                            price: '15,789',
                            crossedPrice: '27,674',
                            name: 'Zenni Diamond Pendant Necklace',
                            offer: '10% OFF on making',
                            stars: '4.5',
                            starCount: '45'
                        },
                        {
                            image: prod10,
                            price: '15,789',
                            crossedPrice: '27,674',
                            name: 'Zenni Diamond Pendant Necklace',
                            offer: '10% OFF on making',
                            stars: '4.5',
                            starCount: '45'
                        },
                        {
                            image: prod07,
                            price: '15,789',
                            crossedPrice: '27,674',
                            name: 'Zenni Diamond Pendant Necklace',
                            offer: '10% OFF on making',
                            stars: '4.5',
                            starCount: '45'
                        },
                        {
                            image: prod03,
                            price: '15,789',
                            crossedPrice: '27,674',
                            name: 'Zenni Diamond Pendant Necklace',
                            offer: '10% OFF on making',
                            stars: '4.5',
                            starCount: '45'
                        },
                        {
                            type: 'Image',
                            image: ban02,
                        },
                        {
                            image: prod01,
                            price: '15,789',
                            crossedPrice: '27,674',
                            name: 'Zenni Diamond Pendant Necklace',
                            offer: '10% OFF on making',
                            stars: '4.5',
                            starCount: '45'
                        },
                        {
                            image: prod04,
                            price: '15,789',
                            crossedPrice: '27,674',
                            name: 'Zenni Diamond Pendant Necklace',
                            offer: '10% OFF on making',
                            stars: '4.5',
                            starCount: '45'
                        }
                    ].map((item, ind) => {
                        return <Product key={ind} {...item} />
                    })
                }
            </div>

            <div className='w-[100%] mt-5 px-2 flex justify-center items-center'>
                <button 
                    style={{
                        backgroundColor: 'rgba(255, 0, 0, 0.15)'
                    }}
                    className='w-[50%] p-2 border border-[#D2042D] rounded-md text-[#D2042D]'>
                    <p>LOAD MORE</p>
                </button>
            </div>

            <div className='my-8 mb-10'>
                <p className='roboto-medium'>FAQs</p>
                
                <div className='my-5'>
                    <p className='roboto-medium text-[.95rem]'>What types of diamond necklaces are available?</p>
                    <p className='text-sm'>Popular options include diamond necklace sets, simple diamond necklaces, and diamond chain necklaces. Design styles range from ethnic and floral to geometric and fusion.</p>
                </div>

                <div className='my-5'>
                    <p className='roboto-medium text-[.95rem]'>How much do diamond necklaces cost?</p>
                    <p className='text-sm'>The diamond necklace price can vary, ranging from ₹15,001 to ₹50,000 based on design, metal, and diamond quality.</p>
                </div>

                <div className='my-5'>
                    <p className='roboto-medium text-[.95rem]'>Which necklace is ideal for a wedding?</p>
                    <p className='text-sm'>A wedding diamond necklace or diamond necklace for bride is often more intricate, with matching earrings or sets being popular.</p>
                </div>

                <div className='my-5'>
                    <p className='roboto-medium text-[.95rem]'>Can diamond necklaces be worn daily?</p>
                    <p className='text-sm'>Yes, a simple diamond necklace or diamond chain necklace is perfect for daily wear.</p>
                </div>

                <div className='my-5'>
                    <p className='roboto-medium text-[.95rem]'>How do I care for a diamond necklace?</p>
                    <p className='text-sm'>Store separately, avoid rough use, and clean regularly for maintaining brilliance.</p>
                </div>
            </div>
        </div>
    )
}

function Product({ type, image, price, crossedPrice, name, offer, stars, starCount }) {
    if(type == 'Image') 
        return (
            <div className='w-[49%] relative'>
                <div className='w-full mb-1 border-black rounded-md overflow-hidden'>
                    <img src={image} className='h-full w-full object-cover absolute' />
                </div>
            </div>
        )

    return (
        <div className='w-[24%] p-1 flex flex-col gap-1 hover:shadow-2xl p-2 rounded-md border cursor-pointer relative'>
            <div className='absolute right-0 top-0 flex gap-2 p-3 items-center'>
                <img src={love} className='h-[1.4rem] w-[1.4rem]' />
                <img src={cart} className='h-[1.1rem] w-[1.1rem]' />
            </div>

            <div className='w-full aspect-[1/1] mb-1 border border-black rounded-md overflow-hidden'>
                <img src={image} className='h-full w-full object-cover' />
            </div>

            <div className='flex justify-between'>
                <div className='flex gap-1 items-center'>
                    <p className='text-sm text-green-600'>₹{price}</p>
                    <p className='text-xs line-through'>₹{crossedPrice}</p>
                </div>

                <div className='flex items-center'>
                    <p className='text-xs'>{stars}</p>
                    <img src={star} className='h-[1rem] w-[1rem] object-contain' />
                    <p className='text-xs mx-1'>|</p>
                    <p className='text-xs'>{`(${starCount})`}</p>
                </div>
            </div>

            <p className='text-sm'>{offer}</p>
            <p className='text-sm'>{name}</p>
        </div>
    )
}