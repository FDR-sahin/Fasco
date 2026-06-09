import React from 'react'
import login from '@/assets/login.png'
import Link from 'next/link'
import Image from 'next/image'
import Button from '../components/Button/Button'
import ButtonTrans from '../components/ButtonTrans/ButtonTrans'
import SignupGoogle from '../components/SignupGoogle/SignupGoogle'
import SignupEmail from '../components/SignupEmail/SignupEmail'

function Login() {
  return (
     <section className='max-w-350 mx-auto p-10 '>
      <div className='border-2 border-[#DBDBDB] grid md:grid-cols-2 grid-cols-1 gap-2'>
        <div>
          <Image className='w-full h-full object-cover' src={login} alt="Hero Image" priority />
        </div>
        <div className='p-10'>
          <h1 className='text-[66.6px] text-[#484848] '>FASCO</h1>
          <div className='mr-3'>
            <h3 className='text-[30px] text-[#000000] pt-10'>Sign In To FASCO</h3>
          <div className='flex items-center justify-between gap-7 py-4'>
            <SignupGoogle/>
            <SignupEmail/>
          </div>
          <div className='py-13 text-center text-[30px] text-[#838383]'>-OR-</div>
          <form className='pb-5' action="#">
            <div className='flex flex-col gap-4'>
              <input className='border-b-3 border-b-[#9D9D9D] placeholder:text-[#9D9D9D] pb-1.5 outline-none' type="email" placeholder='Email Address'/>
              <input className='border-b-3 border-b-[#9D9D9D] placeholder:text-[#9D9D9D] pb-1.5 outline-none' type="password" placeholder='Password'/>
            </div>
           
          </form>
         <div className='px-4'>
           <Button text1="Create Account"/>
          <ButtonTrans text2 = "Register Now"/> 
          <p className='pt-4 text-end text-[#000000]'><Link className='text-[#5B86E5]' href="/forget-password">Forget Password?</Link></p>
         </div>
          </div>
          <p className='text-end mt-20'>FASCO Terms & Codnitions</p>
        </div>
        
        
      </div>
    </section>
  )
  
}

export default Login