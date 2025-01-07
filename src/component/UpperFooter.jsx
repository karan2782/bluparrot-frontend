import React from 'react'
import { TiSocialFacebook, TiSocialTwitter } from "react-icons/ti"
import { FaGooglePlusG } from "react-icons/fa";

function UpperFooter() {
  return (
    <div>

      <div className="flex justify-between">

        <h1 className='font-[700] text-[24px]'>Startup 3</h1>
        <div className='flex gap-x-[28px]'>
            <p>Privacy Policy</p>
            <p>Terms</p>
            <p className="text-[18px]"> <TiSocialFacebook /> </p>
            <p className="text-[18px]" ><TiSocialTwitter /></p>
            <p className="text-[18px]"><FaGooglePlusG /> </p>
        </div>
            
      </div>


    </div>
  )
}

export default UpperFooter
