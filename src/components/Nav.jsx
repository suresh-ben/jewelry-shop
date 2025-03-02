import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

import bag from '../assets/bag.png';
import love from '../assets/love.png';
import account from '../assets/account.png';
import preview from '../assets/cato02.jpg'

import diamond from '../assets/diamond.png';
import platinum from '../assets/platinum.png';
import gold from '../assets/gold.png';
import silver from '../assets/silver.png'
import logo from '../assets/logo.png';
import search from '../assets/search.png';

import model01 from '../assets/cato07.jpg';
import model02 from '../assets/cato04.jpg';
import model03 from '../assets/cato03.jpg';
import model04 from '../assets/cato01.jpeg';
import model05 from '../assets/cato07.jpeg';
import model06 from '../assets/cato02.jpg';

export default function Nav() {

    const navigate = useNavigate();
    const [isHoveringLink, setIsHoveringLink] = useState(false);

    return (
        <>
            <div className='fixed h-[6rem] bg-[#FEFEFE] z-[100] w-full border-b shadow-lg'>
                <div className='h-[4rem] top-0 border-b flex justify-between items-center p-8'>
                    <div className='flex gap-10 items-center '>
                        <div 
                            className='flex justify-center items-center cursor-pointer'
                            onClick={() => navigate('/')}
                        >
                            <img src={logo} className='h-[3rem]' />
                            
                            <div className='flex flex-col justify-center items-center'>
                                <p className='luxurious-script-regular text-3xl'>Luxuy</p>
                                {/* <p className='text-[.4rem] relative top-[-.4rem]'>- finest -</p> */}
                            </div>
                        </div>
                    </div>

                    <div className='border border-[#D2042D] rounded-md flex w-[40%]'>
                        <p className='flex-1 text-[.9rem] p-2'>Search</p>

                        <button
                            style={{
                                backgroundImage: 'linear-gradient(to right, #ef2b6b, #760307)'
                            }}
                            className='w-[4rem] text-white flex justify-center items-center'
                        >
                            <img src={search} className='h-[1.25rem] object-contain' />
                        </button>
                    </div>

                    <div className='flex gap-6'>
                        <img src={account} className='h-[1.25rem] cursor-pointer' />
                        <img src={love} className='h-[1.25rem] cursor-pointer' />
                        <img src={bag} className='h-[1.25rem] cursor-pointer' />
                    </div>
                </div>

                <div className='h-[2rem] flex items-center px-8 roboto-regular'>
                    <div className='flex gap-10 text-sm h-full items-center'>
                        <NavLink 
                            linkText='RINGS'
                            onHover={() => setIsHoveringLink(true)}
                            onExit={() => setIsHoveringLink(false)}
                        />
                        <NavLink 
                            linkText='EARRINGS'
                            onHover={() => setIsHoveringLink(true)}
                            onExit={() => setIsHoveringLink(false)}
                        />
                        <NavLink 
                            linkText='NECKLACE'
                            onHover={() => setIsHoveringLink(true)}
                            onExit={() => setIsHoveringLink(false)}
                        />
                        <NavLink 
                            linkText='BANGLES & BRACLETS'
                            onHover={() => setIsHoveringLink(true)}
                            onExit={() => setIsHoveringLink(false)}
                        />
                        <NavLink 
                            linkText='PENDENTS'
                            onHover={() => setIsHoveringLink(true)}
                            onExit={() => setIsHoveringLink(false)}
                        />
                        <NavLink 
                            linkText='BEST SELLERS'
                            onHover={() => setIsHoveringLink(true)}
                            onExit={() => setIsHoveringLink(false)}
                        />
                    </div>
                </div>
            </div>
            <div className='h-[6rem] border-b flex justify-between items-center p-8' />
            {
                isHoveringLink && <div className=''
                    onMouseEnter={() => setIsHoveringLink(true)}
                    onMouseLeave={() => setIsHoveringLink(false)}
                >
                    <div className='fixed z-[100] top-[6rem] left-0 right bg-[#FEFEFE] px-8 py-2 border-b w-full shadow-lg'>
                        <div className='flex border-b roboto-regular'>
                            <div className='w-[20%]'>
                                <p className=''>SHOP BY MATERIAL</p>
                                <hr className='w-[7rem]' />

                                <div className='flex items-center gap-1'>
                                    <img src={diamond} className='h-[1.25rem] w-[1.25rem] object-contain' />
                                    <p className='text-[.8rem] my-[.5rem]'>Diamond</p>
                                </div>
                                <div className='flex items-center gap-1'>
                                    <img src={platinum} className='h-[1.25rem] w-[1.25rem] object-contain' />
                                    <p className='text-[.8rem] my-[.5rem]'>Platinum</p>
                                </div>
                                <div className='flex items-center gap-1'>
                                    <img src={gold} className='h-[1.25rem] w-[1.25rem] object-contain' />
                                    <p className='text-[.8rem] my-[.5rem]'>Gold</p>
                                </div>
                                <div className='flex items-center gap-1'>
                                    <img src={silver} className='h-[1.25rem] w-[1.25rem] object-contain' />
                                    <p className='text-[.8rem] my-[.5rem]'>Silver</p>
                                </div>
                            </div>

                            <div className='w-[20%]'>
                                <p className=''>SHOP FOR</p>
                                <hr className='w-[7rem]' />

                                <p className='text-[.8rem] my-[.5rem]'>Under ₹10k</p>
                                <p className='text-[.8rem] my-[.5rem]'>₹10k - ₹20k</p>
                                <p className='text-[.8rem] my-[.5rem]'>₹20k - ₹30k</p>
                                <p className='text-[.8rem] my-[.5rem]'>₹30k - ₹40k</p>
                                <p className='text-[.8rem] my-[.5rem]'>₹40k - ₹50k</p>
                                <p className='text-[.8rem] my-[.5rem]'>₹50k - ₹60k</p>
                                <p className='text-[.8rem] my-[.5rem]'>₹60k - ₹70k</p>
                                <p className='text-[.8rem] my-[.5rem]'>₹70k - ₹80k</p>
                                <p className='text-[.8rem] my-[.5rem]'>₹80k+</p>
                            </div>

                            <div className='w-[20%]'>
                                <p className=''>MODALS</p>
                                <hr className='w-[7rem]' />

                                <div className='w-full flex flex-wrap mt-[.5rem] gap-[1.25rem]'>
                                    <img src={model01} className='w-[4rem] h-[4rem] object-cover' />
                                    <img src={model02} className='w-[4rem] h-[4rem] object-cover' />
                                    <img src={model03} className='w-[4rem] h-[4rem] object-cover' />
                                    <img src={model04} className='w-[4rem] h-[4rem] object-cover' />
                                    <img src={model05} className='w-[4rem] h-[4rem] object-cover' />
                                    <img src={model06} className='w-[4rem] h-[4rem] object-cover' />
                                </div>
                            </div>

                            <div className='w-[20%]' />

                            <div className='w-[30%]'>
                                <div className='w-full h-full flex justify-end items-center '>
                                    <img src={preview} className='w-[15rem] aspect-[1] object-cover' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

function NavLink({ linkText, onHover, onExit }) {
    return (
        <div
            onMouseEnter={onHover}
            onMouseLeave={onExit}
            className='flex items-center h-full'
        >
            <p 
                className='text-high cursor-pointer text-[.75rem] cursor-pointer'
                
            >{linkText}</p>
        </div>
    )
}