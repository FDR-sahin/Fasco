import React from 'react'
import Image from 'next/image'
import google from '@/assets/google.png'

function SignupGoogle() {
  return (
    <button className='flex items-center gap-1 flex-1  cursor-pointer text-[16px] text-[#000000] border-2 border-[#5B86E5] py-2 px-8 rounded-[10px]'>
         <Image src={google} alt="Hero Image" priority />
         <p>Sign up with Google</p>
    </button>
  )
}

export default SignupGoogle