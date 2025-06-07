import React from 'react'
import Pasteventelement from "../components/Pasteventelement";
import firstAid from "../../public/past-events/first-aid.jpg"; 
import bloodDonation from "../../public/past-events/bloodDonation.jpg"; // Example image import, adjust the path as needed

const PastEvents = () => {
  return (
    <div className='flex  flex-col justify-center items-center'>
       <div>
        <h1 className="roboto text-6xl font-bold text-[#A7101F] mb-4">Past Events</h1>
      </div>
      {/* <div className=" text-6xl roboto md:text-7xl font-bold mb-6 bg-[#A7101F]  mt-[200px]  bg-clip-text text-transparent"> No Past Events...</div> */}
         <Pasteventelement eventName="First-Aid & Disaster Management Event" image={firstAid}  />
         <Pasteventelement eventName="Blood Donation Event" image={bloodDonation}  />

    </div>
  )
}

export default PastEvents