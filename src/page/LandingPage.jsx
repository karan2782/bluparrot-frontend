import React from 'react'
import Navbar from '../component/Navbar'
import Slider from '../component/Slider'
import CreateButton from '../component/CreateButton'
import ContentPage from './ContentPage'
import FormPage from "./FormPage"
import PlansPage from './PlansPage'
import FooterPage from './FooterPage'

function LandingPage() {
  return (
    <div>
    <div className="bg-[url('/landing.jpg')]  bg-cover  bg-center bg-no-repeat w-full h-full "  >
      <Navbar />
      <Slider />
      <CreateButton />
      </div>
      <ContentPage />

      <FormPage />

      <PlansPage />

      <FooterPage />
    </div>
  )
}

export default LandingPage
