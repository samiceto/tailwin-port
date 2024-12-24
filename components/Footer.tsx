import React from 'react'
import { Magicbutton } from './ui/Magicbutton'
import { FaLocationArrow } from 'react-icons/fa6'
import { socialMedia } from '@/data'
import Link from 'next/link'

export const Footer = () => {
  return (
    <footer className='w-full mb-[100px] pb-10 md:mb-5' id='contect'>
        
        <div className='flex flex-col items-center'>
            <h1 className='heading lg:max-w-[45vw]'>Ready to take <span className='text-purple'>your</span> digital presence to the next level?</h1>
            <p className='text-white-200 md:mt-10 my-5 text-center'>Reach out to me today and let &apos;s discuss how I can help you achieve your goals.</p>
        <a href="mailto:samiullahmalik7474@gmail.com">
            <Magicbutton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            possition='right'
            />
        </a>
        </div>
        <div className='flex mt-16 md:flex-row flex-col justify-between items-center'>
            <p className='md:text-base text-sm md:font-normal font-light'>Copyright © 2024 Samiullah</p>
            <div className='flex items-center md:gap-2 gap-6'>
                {socialMedia.map((profile) => (
                    <div key={profile.id} className='w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300'>
                    <Link href={profile.link}><img src={profile.img}alt="icons"
                    width={20} height={20} /></Link>
                    </div>    
                ))}
            </div>
        </div>

    </footer>
  )
}
