import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCoverflow, Navigation } from 'swiper/modules'
import { ArrowLeft, ArrowRight } from 'phosphor-react'

import reviewImage01 from '../../../assets/cato01.jpeg'
import reviewImage02 from '../../../assets/cato02.jpeg'
import reviewImage03 from '../../../assets/carousel03.jpeg'
import reviewImage04 from '../../../assets/cato04.jpg'
import reviewImage05 from '../../../assets/cato05.jpeg'
import reviewImage06 from '../../../assets/cato06.jpeg'
import reviewImage07 from '../../../assets/cato07.jpeg'

import 'swiper/css'
import 'swiper/css/effect-coverflow'

const Reviews = () => {

    const reviews = [
        {
            name: 'Mounika',
            review: 'purchased this diamond necklace as a gift for my wife, and it completely exceeded my expectations. The sparkle is absolutely breathtaking, and the craftsmanship is flawless. She loves it, and I’m sure it will be a piece she cherishes forever. Worth every penny!',
            image: reviewImage01
        },
        {
            name: 'Harsha',
            review: 'purchased this diamond necklace as a gift for my wife, and it completely exceeded my expectations. The sparkle is absolutely breathtaking, and the craftsmanship is flawless. She loves it, and I’m sure it will be a piece she cherishes forever. Worth every penny!',
            image: reviewImage02
        },
        {
            name: 'Taman',
            review: 'purchased this diamond necklace as a gift for my wife, and it completely exceeded my expectations. The sparkle is absolutely breathtaking, and the craftsmanship is flawless. She loves it, and I’m sure it will be a piece she cherishes forever. Worth every penny!',
            image: reviewImage03
        },
        {
            name: 'Jaswanth',
            review: 'purchased this diamond necklace as a gift for my wife, and it completely exceeded my expectations. The sparkle is absolutely breathtaking, and the craftsmanship is flawless. She loves it, and I’m sure it will be a piece she cherishes forever. Worth every penny!',
            image: reviewImage04
        },
        {
            name: 'Pravallika',
            review: 'purchased this diamond necklace as a gift for my wife, and it completely exceeded my expectations. The sparkle is absolutely breathtaking, and the craftsmanship is flawless. She loves it, and I’m sure it will be a piece she cherishes forever. Worth every penny!',
            image: reviewImage05
        },
        {
            name: 'Raju',
            review: 'purchased this diamond necklace as a gift for my wife, and it completely exceeded my expectations. The sparkle is absolutely breathtaking, and the craftsmanship is flawless. She loves it, and I’m sure it will be a piece she cherishes forever. Worth every penny!',
            image: reviewImage06
        },
        {
            name: 'Suresh',
            review: 'purchased this diamond necklace as a gift for my wife, and it completely exceeded my expectations. The sparkle is absolutely breathtaking, and the craftsmanship is flawless. She loves it, and I’m sure it will be a piece she cherishes forever. Worth every penny!',
            image: reviewImage07
        },
    ];

    return (
        <div className='slider-container mb-10 mt-14 relative'>
            <p className='text-4xl relative z-[40] text-center w-full cormorant-garamond-semibold mb-8'>Reviews</p>

            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                allowSlideNext
                allowSlidePrev
                loop={true}
                slidesPerView={3}
                coverflowEffect={{
                    rotate: 0,
                    stretch: -75,
                    depth: 250,
                    modifier: 3.5,
                    slideShadows: false,
                }}
                navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                    clickable: true,
                }}
                modules={[EffectCoverflow, Navigation]}
            >
                {
                    reviews?.map((review, ind) => {
                        return <SwiperSlide key={ind}>
                            <Review 
                                name={review.name}
                                review={review.review}
                                image={review.image}
                            />
                        </SwiperSlide>
                    })
                }

                <div className='slider-controler absolute z-[40] bottom-[1.5rem] w-full h-full flex justify-center items-center'>
                    <div className='w-full flex justify-between mt-[2rem]'>
                        <div className='swiper-button-prev bg-white border border-black p-2 rounded-full mx-4'>
                            <ArrowLeft size={20} />
                        </div>
                        <div className='swiper-button-next bg-white border border-black p-2 rounded-full mx-4'>
                            <ArrowRight size={20} />
                        </div>
                    </div>
                </div>
            </Swiper>
        </div>
    )
}

function Review({ name, review, image }) {
    return (
        <div className='w-full h-[22rem]'>
            <div className='w-full h-[20rem] bg-[#ffe1ec] rounded-xl flex flex-col justify-center items-center relative'>
                <p className='cormorant-garamond-bold text-4xl w-full text-center mb-2'>{name}</p>
                <p className='cormorant-garamond-regular text-xl w-full px-10 text-justify'>{review}</p>

                <div className='absolute -bottom-[1.5rem] flex w-full justify-center items-center'>
                    <img
                        src={image}
                        className='w-[5rem] h-[5rem] rounded-full object-cover'
                    />
                </div>
            </div>
        </div>
    )
}

export default Reviews