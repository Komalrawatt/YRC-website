import React from 'react';
import ongoing from "../assets/ongoing.jpg";
import { Button } from "@/components/ui/button"


const OnGoing = () => {
    return (
        <div className=" mast p-6 bg-white text-center flex  flex-col mt-20 ">
            <div>
                <h1 className="roboto text-6xl font-bold text-[#A7101F] mb-4">OnGoing Events</h1>

            </div>
            <div>
                <p className="text-xl mb-6">⛑️ Life Saving Event ⛑️</p>

            </div>

            <div className='mt-25 flex w-screen h-[600px] justify-center items-center ' >
                <img src={ongoing} alt="Ongoing Event" className='w-[500px] h-[700px] object-cover rounded-lg shadow-[0_0_100px_rgba(255,0,0,0.8)] transition duration-300 hover:scale-110 '
                    
                />

            </div>
            <div className="flex flex-wrap justify-center min-w-screen  mt-25 p-4 text-left space-y-2">
                <div className='flex justify-evenly flex-wrap items-center h-[300px] w-[600px]'>
                    <div className='w-[300px] h-[150px] text-center' ><strong className='text-2xl text-[]'>📝 Event Details:</strong><br /> Life Saving Workshop</div>
                    <div className='w-[300px]  h-[150px] text-center'><strong className='text-2xl'>📍 Venue:</strong><br /> Shakuntalam Hall, YMCA</div>
                    <div className='w-[300px]  h-[150px] text-center'><strong className='text-2xl'>🎁 Perks:</strong> <br /> Certificate, Free Kit, Snacks</div>
                    <div className='w-[300px]  h-[150px] text-center'><strong className='text-2xl'>📞 Contact:</strong><br /> 0000000000</div>
                </div>
            </div>

            <div >
                <Button className='bg-[#A7101F] text-1xl hover:bg-[#E4002A] w-45 cursor-pointer transition duration-100 ease-out hover:scale-90 mr-3 shadow-[0_0_90px_rgba(255,0,0,0.6)]'>Registration</Button>
            </div>


        </div>
    );
};

export default OnGoing;
