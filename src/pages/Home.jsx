import React from 'react'
import image1 from '../assets/whoarewe.jpg'
import Footer from '../components/Footer'
import Main from '../components/Main'
import Mission from '../components/Mission'
import OnGoing from '../components/OnGoing'
import Mainpage from '../components/Mainpage'
// import About from './pages/About'
const Home = () => {
    return (
        <div className='' >
            <Mainpage/>
            <Main />
            <Mission />
            <div className='mast flex h-[500px] w-[100vw] justify-center items-center gap-12 mt-25 '>
               <div className='h-[60vh] w-[50wh]' >
                        <div  className='p-6'>
                        <p className='roboto text-[#A7101F] text-6xl text-center'>Who We Are</p> 
                        </div>
                        <div >
                            <p className='p-6 tracking-wider w-[700px] text-slate-700'>
                            <span className='text-5xl '>W</span>e are the Youth Red Cross Club of J.C. Bose University, a vibrant student-led community dedicated to humanity and service.
                            We conduct life-saving events like blood donation camps, first-aid training, and mental health drives, and proudly celebrate World Red Cross Day.
                            In collaboration with affiliated colleges, we unite a large network of passionate members driven by compassion and action.
                            Together, we strive to make a difference, one life at a time.
                            </p>
                        
                        </div>
                </div>
                <div className='relative h-[60vh] w-[50wh] '>
                   
                    <div className=' bg-[#E4002A] h-[400px] w-[400px] '>

                    </div>
                    <div className=' h-[400px] w-[400px] absolute   -top-4 right-6'>
                        <img  src={image1} alt=""  className='shadow-[0_0_100px_rgba(255,29,29,0.8)]'/>
                    </div>
                </div>
            </div>
            <OnGoing />
            {/* <About/> */}
            <Footer />
        </div >
    )
}

export default Home