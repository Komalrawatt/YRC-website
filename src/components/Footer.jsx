import React from 'react'
import { IoIosMail } from "react-icons/io";
import { BsInstagram } from "react-icons/bs";
import { FaPhone } from "react-icons/fa6";


const Footer = () => {
  return (
    <div className='absolute bg-[#111827] w-full min-h-screen mt-20' >
      <div className='text-center w-full h-[200px]  '>
        <p className='zen  text-[#A7101F] text-9xl mt-20 tracking-widest hover:scale-90 transition-transform duration-300'
        style={{
          color: 'white',
          textShadow: '0 0 5px #f00, 0 0 10px #f00, 0 0 20px #f00',
        }}
        
        >YRC JCBUST</p>
      </div>
      
      <div className='flex gap-7 text-white items-center justify-center mt-2  cursor-pointer'>
              <div>
                <IoIosMail  className='text-4xl hover:text-[#A7101F] hover:scale-90'/>

              </div>
              <div className='flex items-center'>
                <BsInstagram className='text-2xl hover:text-[#A7101F] hover:scale-90' />

              </div>
              <div className='flex items-center'>
                <FaPhone className='text-2xl hover:text-[#A7101F] hover:scale-90'/>

              </div>
      </div>
     {/* map */}
     <div className="mb-10 bg-gray-800 p-2 rounded-lg overflow-hidden mt-5">
          <h3 className="text-xl font-bold text-white mb-4 text-center">Find Us</h3>
          <div className="w-full h-64 rounded-lg overflow-hidden">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3507.863994055184!2d77.31945001508657!3d28.467825982485386!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce626851f7009%3A0x621206784a69e4a8!2sJ.C.%20Bose%20University%20of%20Science%20and%20Technology%2C%20YMCA!5e0!3m2!1sen!2sin!4v1650000000000!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="J.C. Bose University of Science & Technology Map"
            ></iframe>
          </div>
        </div>

     <div className='text-center mt-5 flex flex-col text-sm gap-2 text-slate-600'>
         <div>© 2025 Youth Red Cross Club, J.C. Bose UST </div>
         <div>All rights reserved</div>
     </div>
    </div>
  )
}

export default Footer