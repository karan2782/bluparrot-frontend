import React from 'react'
import UpperFooter from '../component/UpperFooter'
import LowerFooter from '../component/LowerFooter'

function FooterPage() {
  return (
    <div className='py-[70px] px-[54px] bg-[#2F1893] text-[#ffffff]' >
      <UpperFooter />
      <div className='h-[2px] border-2 border-[#ffffff]' ></div>
      <LowerFooter />
    </div>
  )
}

export default FooterPage
