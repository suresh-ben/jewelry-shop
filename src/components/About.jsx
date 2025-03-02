import React from 'react'

import insta from '../assets/insta.png';
import fb from '../assets/fb.png';
import twitter from '../assets/twitter.png';
import pint from '../assets/pint.png';
import wiki from '../assets/wiki.png';
import yt from '../assets/yt.png';


export default function About() {
    return (
        <div 
            style={{
                backgroundImage: 'linear-gradient(to bottom, #ef2b6b, #760307)'
            }}
            className='about-section'
        >
            <div className='flex py-16 px-10 border-b roboto-regular text-white'>
                <div className='w-[20%]'>
                    <p className=''>ABOUT US</p>
                    <hr className='w-[7rem]' />

                    <p className='text-[.8rem] my-[.5rem]'>About Our Company</p>
                    <p className='text-[.8rem] my-[.5rem]'>Terms and Conditions</p>
                    <p className='text-[.8rem] my-[.5rem]'>Privacy Policy</p>
                    <p className='text-[.8rem] my-[.5rem]'>FAQ</p>
                    <p className='text-[.8rem] my-[.5rem]'>Offers T&Cs</p>
                    <p className='text-[.8rem] my-[.5rem]'>Customer Reviews</p>
                    <p className='text-[.8rem] my-[.5rem]'>Sitemap</p>
                </div>

                <div className='w-[20%]'>
                    <p className=''>WHY US?</p>
                    <hr className='w-[7rem]' />

                    <p className='text-[.8rem] my-[.5rem]'>15-Day Returns</p>
                    <p className='text-[.8rem] my-[.5rem]'>Cancel & Refund</p>
                    <p className='text-[.8rem] my-[.5rem]'>DGRP</p>
                    <p className='text-[.8rem] my-[.5rem]'>Certified Jewellery</p>
                    <p className='text-[.8rem] my-[.5rem]'>Candere Wallet</p>
                    <p className='text-[.8rem] my-[.5rem]'>Lifetime Exchange</p>
                    <p className='text-[.8rem] my-[.5rem]'>Jewellery Insurance</p>
                    <p className='text-[.8rem] my-[.5rem]'>Liquiloans</p>
                </div>

                <div className='w-[20%]'>
                    <p className=''>EXPERIENCE CANDERE</p>
                    <hr className='w-[7rem]' />

                    <p className='text-[.8rem] my-[.5rem]'>About Our Company</p>
                    <p className='text-[.8rem] my-[.5rem]'>Terms and Conditions</p>
                    <p className='text-[.8rem] my-[.5rem]'>Privacy Policy</p>
                    <p className='text-[.8rem] my-[.5rem]'>FAQ</p>
                    <p className='text-[.8rem] my-[.5rem]'>Offers T&Cs</p>
                    <p className='text-[.8rem] my-[.5rem]'>Customer Reviews</p>
                    <p className='text-[.8rem] my-[.5rem]'>Sitemap</p>
                </div>

                <div className='w-[20%]'>
                    <p className=''>Jewellery guides</p>
                    <hr className='w-[7rem]' />

                    <p className='text-[.8rem] my-[.5rem]'>15-Day Returns</p>
                    <p className='text-[.8rem] my-[.5rem]'>Cancel & Refund</p>
                    <p className='text-[.8rem] my-[.5rem]'>DGRP</p>
                    <p className='text-[.8rem] my-[.5rem]'>Certified Jewellery</p>
                    <p className='text-[.8rem] my-[.5rem]'>Candere Wallet</p>
                    <p className='text-[.8rem] my-[.5rem]'>Lifetime Exchange</p>
                    <p className='text-[.8rem] my-[.5rem]'>Jewellery Insurance</p>
                    <p className='text-[.8rem] my-[.5rem]'>Liquiloans</p>
                </div>

                <div className='w-[20%]'>
                    <p className=''>Jewellery guides</p>
                    <hr className='w-[7rem]' />

                    <p className='text-[.8rem] my-[.5rem]'>15-Day Returns</p>
                    <p className='text-[.8rem] my-[.5rem]'>Cancel & Refund</p>
                    <p className='text-[.8rem] my-[.5rem]'>DGRP</p>
                    <p className='text-[.8rem] my-[.5rem]'>Certified Jewellery</p>
                    <p className='text-[.8rem] my-[.5rem]'>Candere Wallet</p>
                    <p className='text-[.8rem] my-[.5rem]'>Lifetime Exchange</p>
                    <p className='text-[.8rem] my-[.5rem]'>Jewellery Insurance</p>
                    <p className='text-[.8rem] my-[.5rem]'>Liquiloans</p>
                </div>

                <div className='w-[20%]'>
                    <p>FOLLOW US</p>
                    <hr className='w-[7rem]' />

                    <div className='w-full mt-[.5rem] flex flex-wrap items-center w-[8rem] '>
                        <img src={insta} className='w-[2.5rem] h-[2.5rem] object-cover' />
                        <img src={fb} className='w-[2.4rem] h-[2.4rem] object-cover' />
                        <img src={twitter} className='w-[2.2rem] h-[2.2rem] object-cover' />

                        <img src={pint} className='w-[2.5rem] h-[2.5rem] object-cover' />
                        <img src={wiki} className='w-[2.4rem] h-[2.4rem] object-cover' />
                        <img src={yt} className='w-[2.2rem] h-[2.2rem] object-cover' />
                    </div>
                </div>
            </div>

            <div className='px-10 text-white py-3 text-[.8rem]'>
                © 2024 CANDERE.COM . ALL RIGHTS RESERVED. SITE MAP
            </div>
        </div>
    )
}
