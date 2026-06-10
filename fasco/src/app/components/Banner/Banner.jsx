import React from 'react'
import Image from 'next/image' 
import hero1 from '@/assets/hero-1.png'
import hero3 from '@/assets/hero-3.png'
import hero4 from '@/assets/hero-4.png'
import hero2 from '@/assets/hero-2.png'
import sale from '@/assets/sale.png'
import Button from '@/app/components/Button/Button'
import chanel from '@/assets/chanel.png'
import louis from '@/assets/louis.png'
import prada from '@/assets/prada.png'
import calvin from '@/assets/calvin.png'
import denim from '@/assets/denim.png'

function Banner() {
  return (
       <section className='mt-35 '> 
     <div className='max-w-7xl mx-auto px-12'>
       <div className=' flex items-center gap-8.75'>
        <div className='bg-[#E0E0E0] w-98 h-189 rounded-[10px]'>
           <Image className='w-full h-full object-contain' src={hero1} alt="Hero Image" priority />
        </div>

        <div className='flex flex-col gap-2 '>
          <div>
            <Image className='w-full h-full object-cover' src={hero3} alt="Hero Image" priority />
          </div>
          <div className='p-2 text-center flex flex-col gap-3'>
            <p className='text-[91px] text-[#484848] font-medium'>ULTIMATE</p>
           <Image className='w-full h-full object-cover' src={sale} alt="Hero Image" priority />
           <p className='text-[20px] text-[#484848]'>NEW COLLECTION</p>
          <div className='w-fit mx-auto'>
             <Button text1="SHOP NOW"/>
          </div>
          </div>
          <div>
            <Image className='w-full h-full object-cover' src={hero4} alt="Hero Image" priority />
          </div>
        </div>

        <div className='bg-[#E0E0E0] w-98 h-189 rounded-[10px]'>
          <Image className='w-full h-full object-contain' src={hero2} alt="Hero Image" priority />
        </div>
      </div>

      <div className='flex items-center justify-center gap-8 py-20'>
         <Image className='w-full h-full object-contain' src={chanel} alt="Hero Image" priority />
          <Image className='w-full h-full object-contain' src={louis} alt="Hero Image" priority />
           <Image className='w-full h-full object-contain' src={prada} alt="Hero Image" priority />
            <Image className='w-full h-full object-contain' src={calvin} alt="Hero Image" priority />
             <Image className='w-full h-full object-contain' src={denim} alt="Hero Image" priority />
      </div>
     </div>

    </section>
  )
}

export default Banner