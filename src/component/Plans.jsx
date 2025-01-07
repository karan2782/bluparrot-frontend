import React from 'react'
import PlanList from './PlanList'

const plans = [
    {
       plan:"Starter",
       price:"9.99",
       plans:["2 GB of space", "14 days of backups", "Social integrations", "Client billing", "Custom domain", "Remote access" ] 
    },
    {
        plan:"Starter",
        price:"9.99",
        plans:["2 GB of space", "14 days of backups", "Social integrations", "Client billing", "Custom domain", "Remote access" ] 
     },
     {
        plan:"Starter",
        price:"9.99",
        plans:["2 GB of space", "14 days of backups", "Social integrations", "Client billing", "Custom domain", "Remote access" ] 
     }
]

function Plans() {
  return (
    <div >
      <div className=' m-auto lg:w-[586px]  text-[#ffffff] text-center mb-[54px]'>
        <h3 className='lg:text-[42px] text-[30px] mb-[30px]'>Plans & Pricing</h3>
        <h5 className='lg:text-[22px]'>Startup Framework is free forever — you only pay for custom domain hosting or to export your site.</h5>
      </div>

      <div className='flex justify-around flex-wrap  gap-y-10' >

        {plans.map((item, index)=> <div key={index} className='text-[#ffffff] py-[56px] px-[50px] border-2 rounded-[10px]' >
            <div className='w-[134px]'>
                <p className='text-[22px] '>{item.plan}</p>
                <h2 className='lg:text-[58px] text-[30px] mb-7'>{item.price}</h2>
            </div>

            {item.plans.map((pln, idx)=><PlanList key={idx} plan={pln} />)}

            <button className='font-[500] text-[20px] px-[25px] py-[9px] lg:px-[55px] mt-[30px] lg:py-[17px] border-2 border-[#ffffff] rounded-[100px]'>Get Started</button>
        </div>)}
      </div>
    </div>
  )
}

export default Plans
