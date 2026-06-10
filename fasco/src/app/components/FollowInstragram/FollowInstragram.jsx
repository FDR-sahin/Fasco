import React from 'react'
import Heading from '../Heading/Heading'
import Image from 'next/image'
import f1 from '@/assets/f1.png'
import f2 from '@/assets/f2.png'
import f3 from '@/assets/f3.png'
import f4 from '@/assets/f4.png'
import f5 from '@/assets/f5.png'
import f6 from '@/assets/f6.png'
import f7 from '@/assets/f7.png'


function FollowInstragram() {
  return (
    <section className='py-20'>
        <div className='max-w-7xl mx-auto px-12'>
            <Heading hed="Follow Us On Instagram" para="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque duis ultrices sollicitudin aliquam sem. Scelerisque duis ultrices sollicitudin "/>
        </div>

        <div className='flex items-center justify-center py-17'>
            <div className='w-[320px] h-77'>
                <Image className='w-full h-full object-cover' src={f1} alt="Hero Image" priority />
            </div>
            <div className='w-[256px] h-95'>
                <Image className='w-full h-full object-cover' src={f2} alt="Hero Image" priority />
            </div>

            <div className='w-[320px] h-77'>
                <Image className='w-full h-full object-cover' src={f3} alt="Hero Image" priority />
            </div>
            <div className='w-[256px] h-95'>
                <Image className='w-full h-full object-cover' src={f4} alt="Hero Image" priority />
            </div>
            <div className='w-[320px] h-77'>
                <Image className='w-full h-full object-cover' src={f5} alt="Hero Image" priority />
            </div>
            <div className='w-[256px] h-95'>
                <Image className='w-full h-full object-cover' src={f6} alt="Hero Image" priority />
            </div>
             <div className='w-[320px] h-77'>
                <Image className='w-full h-full object-cover' src={f7} alt="Hero Image" priority />
            </div>
        </div>

    </section>
  )
}

export default FollowInstragram