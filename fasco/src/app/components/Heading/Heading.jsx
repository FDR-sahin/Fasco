import React from 'react'

function Heading({hed,para}) {
  return (
    <div className='text-center '>
        <h1 className='text-[46px] text-[#484848] pb-5'>{hed}</h1>
        <p className='text-[#8A8A8A] max-w-153.5 mx-auto'>{para}</p>
    </div>
  )
}

export default Heading