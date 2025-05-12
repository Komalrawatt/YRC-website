import React from 'react'
import { LuTarget } from "react-icons/lu";
import { FaRegHeart } from "react-icons/fa";
import { LuUsers } from "react-icons/lu";

const Mission = () => {
    return (

        <div className=" mast py-16 bg-white mt-30 ">
        <div className="max-w-7xl mx-auto  px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="roboto text-5xl font-extrabold text-gray-900 sm:text-4xl">Our Mission & Values</h2>
            <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
              "Service to humanity is the greatest service in this world"
            </p>
          </div>
      
          <div className=" mt-20 space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-8 ">
            
            {/* Our Mission */}
            <div className="text-center h-[400px] flex flex-col justify-center shadow-[20px_20px_10px_rgba(0,0,0,0.2)] rotate-[10deg]  bg-[#F88379]">
              <div className="flex items-center justify-center h-18 w-18 rounded-full bg-red-100 mx-auto">
                <LuTarget className="h-10 w-10 text-red-600" />
              </div>
              <h3 className="mt-6 text-4xl font-medium text-gray-900">Our Mission</h3>
              <p className="mt-5 text-base text-gray-500 p-2">
                To provide relief to the vulnerable by mobilizing the power of humanity through youth volunteers.
              </p>
            </div>
      
            {/* Our Vision */}
            <div className="text-center h-[450px] flex flex-col justify-center  shadow-[20px_20px_10px_rgba(0,0,0,0.2)] rotate-[-10deg]  bg-slate-300">
              <div className="flex items-center justify-center h-18 w-18 rounded-full bg-red-100 mx-auto">
                <FaRegHeart className="h-10 w-10 text-red-600" />
              </div>
              <h3 className="mt-6 text-4xl font-medium text-gray-900">Our Vision</h3>
              <p className="mt-5 text-base text-gray-500 p-2">
                To inspire, encourage, and initiate humanitarian activities that help vulnerable people with complete impartiality.
              </p>
            </div>
      
            {/* Our Values */}
            <div className="text-center h-[400px] flex flex-col justify-center shadow-[20px_20px_10px_rgba(0,0,0,0.2)] rotate-[10deg]  bg-[#F88379]">
              <div className="flex items-center justify-center h-18 w-18 rounded-full bg-red-100 mx-auto">
                <LuUsers className="h-10 w-10 text-red-600" />
              </div>
              <h3 className="mt-6 text-4xl font-medium text-gray-900">Our Values</h3>
              <p className="mt-5 text-base text-gray-500 p-2">
                Humanity, impartiality, neutrality, independence, voluntary service, unity, and universality.
              </p>
            </div>
            
          </div>
        </div>
      </div>
      

    )
}

export default Mission