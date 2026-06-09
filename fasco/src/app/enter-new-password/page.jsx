import React from 'react'
import login from '@/assets/login.png'

import Image from 'next/image'
import ButtonSubmit from '../components/ButtonSubmitt/ButtonSubmit'

function NewPassword() {
  return (
    <section className='max-w-350 mx-auto p-10 '>
      <div className='border-2 border-[#DBDBDB] grid md:grid-cols-2 grid-cols-1 gap-2'>
        <div>
          <Image className='w-full h-full object-cover' src={login} alt="Hero Image" priority />
        </div>
        <div className='p-10'>
          <h1 className='text-[66.6px] text-[#484848] '>FASCO</h1>
          <div className='mr-3'>
            <h3 className='text-[30px] text-[#000000] pt-35 pb-10'>Enter Your New Password</h3>
         
          <form className='pb-5' action="#">
            <div className='flex flex-col gap-4'>
              <input className='border-b-3 border-b-[#9D9D9D] placeholder:text-[#9D9D9D] pb-1.5 outline-none' type="password" placeholder='New Password'/>
               <input className='border-b-3 border-b-[#9D9D9D] placeholder:text-[#9D9D9D] pb-1.5 outline-none' type="password" placeholder='Confirmation Password'/>
            </div>
          </form>
         <div className='px-4 '>
           <ButtonSubmit text3="Submit"/>
         </div>
          {/* button */}
          
          </div>
          <p className='text-end mt-20'>FASCO Terms & Codnitions</p>
        </div>
        
        
      </div>
    </section>
  )
}

export default NewPassword