import React from 'react'
import Footer from '../components/Footer'
import Main from '../components/Main'
import Mission from '../components/Mission'
import OnGoing from '../components/OnGoing'
// import About from './pages/About'
const Home = () => {
    return (
        <div className='' >
            <Main />
            <Mission />
            <div className='mast flex flex-col  mt-25 gap-7'>
                <div >
                   <p className='text-[#A7101F] text-5xl text-center'>Who We Are</p> 
                </div>
                <div >
                    <p className='p-6 tracking-wider text-slate-700'>
                    <span className='text-5xl'>W</span>e are the Youth Red Cross Club of J.C. Bose University, a vibrant student-led community dedicated to humanity and service.
                    We conduct life-saving events like blood donation camps, first-aid training, and mental health drives, and proudly celebrate World Red Cross Day.
                    In collaboration with affiliated colleges, we unite a large network of passionate members driven by compassion and action.
                    Together, we strive to make a difference, one life at a time.
                    </p>
                   
                </div>
            </div>
            <OnGoing />
            {/* <About/> */}
            <Footer />
        </div >
    )
}

export default Home