import React from 'react'
import { CircularText } from './Icons'
import Image from 'next/image'
import hiremeText from '/public/images/circular-text.png'
import Link from 'next/link'

const HireMe = () => {
    return (
        <div className='fixed flex left-4 bottom-4 items-center justify-center overflow-hidden'>
            <div className="w-48 h-auto flex items-center justify-center relative">
                <Image src={hiremeText} width={140} height={140} className='animate-spin-slow' />
                <Link
                    href="mailto:vvtruong1007@gmail.com"
                    className='flex items-center justify-center absolute left-1/2 top-1/2 -translate-x-1/2 
                    -translate-y-1/2 bg-dark text-light shadow-md border border-solid border-dark 
                    w-20 h-20 rounded-full font-semibold hover:bg-light hover:text-dark transition'
                >
                    Hire Me
                </Link>
            </div>
        </div>
    )
}

export default HireMe