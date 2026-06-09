import React from 'react'
import Image from 'next/image'
import email from '@/assets/email.png'

function SignupEmail() {
  return (
    <button className='flex items-center gap-3 flex-1  cursor-pointer border-2 border-[#5B86E5] py-2 px-8 rounded-[10px]'>
         <Image src={email} alt="Hero Image" priority />
         <p>Sign up with Email</p>
    </button>
  )
}

export default SignupEmail