import { headers } from 'next/headers'
import Link from 'next/link'
import React from 'react'
import Button from '../Button/Button'

function Navber() {
  return (
    <header className='fixed left-0 right-0 top-0 bg-white shadow-2xl'>
        <nav className='max-w-6xl mx-auto px-12 flex items-center justify-between pt-10'>
          <div>
            <h1 className='text-[52px] text-[#484848]'>FASCO</h1>
          </div>
          <div>
            <ul className='flex items-center gap-x-10'>
                <li>
                    <Link className='text-[#484848] text-[16px] cursor-pointer hover:text-blue-600 font-semibold' href="/">Home</Link>
                </li>
                <li>
                   <Link className='text-[#484848] text-[16px] cursor-pointer hover:text-blue-600 font-semibold' href="/">Deals</Link>
                </li>
                <li>
                    <Link className='text-[#484848] text-[16px] cursor-pointer hover:text-blue-600 font-semibold' href="/">New Arrivals</Link>
                </li>
                <li>
                   <Link className='text-[#484848] text-[16px] cursor-pointer hover:text-blue-600 font-semibold' href="/">Packages</Link>
                </li>
                <li>
                    <Link className='text-[#484848] text-[16px] cursor-pointer hover:text-blue-600 font-semibold' href="/login">Sign in</Link>
                </li>
                 <li>
                    <Link className='text-[#484848] text-[16px] cursor-pointer hover:text-blue-600 font-semibold' href="/signup"><Button text1="Sign Up"/> </Link>
                </li>
            </ul>
          </div>
        </nav>
    </header>
  )
}

export default Navber