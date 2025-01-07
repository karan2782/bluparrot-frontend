import React from 'react'

function Content({item}) {
  return (
    <div className='lg:w-[736px]  text-center '>
      <p className='lg:text-[24px] lg:font-[700] text-[#FFFFFF]'>{item.subheading}</p>
      <h1 className='lg:text-[72px] text-[30px] lg:font-[700] text-[#FFFFFF] my-[27px]'>{item.heading}</h1>
      <p className='lg:text-[22px] text-[14px] lg:font-[500] text-[#FFFFFF]'>{item.content}</p>
    </div>
  )
}

export default Content
