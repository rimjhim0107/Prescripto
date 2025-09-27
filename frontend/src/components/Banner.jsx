import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const Banner = () => {

    const navigate = useNavigate();
  return (
    <div className="flex bg-primary rounded-lg px-6 sm:px-8 md:px-10 lg:px-12 my-16 md:mx-8">
      {/* --------left side-------- */}
      <div className="flex-1 py-8 sm:py-10 md:py-12 lg:py-16 lg:pl-4">
        <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-white leading-tight">
          <p>Book Appointment</p>
          <p className="mt-3">With 100+ Trusted Doctors</p>
        </div>
        <button onClick={() => {navigate('/login');scrollTo(0,0)}} className="bg-white text-sm sm:text-base text-gray-600 px-7 py-2.5 rounded-full mt-5 hover:scale-105 transition-all">
          Create account
        </button>
      </div>
      {/* --------right side-------- */}
      <div className="hidden md:block md:w-1/2 lg:w-[320px] relative">
        <img className="w-full absolute bottom-0 right-0 max-w-md" src={assets.appointment_img} alt="" />
      </div>
    </div>
  )
}

export default Banner
