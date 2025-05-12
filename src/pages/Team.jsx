import React from 'react'
import Wrapper from '../components/Wrapper';
// import Footer from '../components/Footer';

const Team = () => {
    return (
        <div className='flex justify-center flex-col mast items-center '>
            <h1 className=' roboto text-[#A7101F]  text-6xl mt-8 text-center mb-3'>Meet Our Team</h1>
            <p className='  p-6  text-center text-slate-500 tracking-wider  '><span className='text-[30px]'>E</span>very member of the Youth Red Cross Club embodies a spirit of compassion, dedication, and selfless service. Their unwavering commitment to humanitarian values and their willingness to step up during times of need create an atmosphere of unity and empathy. It's their teamwork, resilience, and constant support for one another that make the Youth Red Cross Club not just a group, but a family devoted to making a meaningful difference in society.</p>
            <Wrapper />
            <br />
            {/* <Footer/> */}
        </div>
    )
}

export default Team