import React, { useRef, useEffect } from "react";
import main from "../../public/main.jpg";
import { gsap } from "gsap";

const Mainpage = () => {

  const textRef = useRef(null);
  const redCrossRef = useRef(null);
  const imageRef = useRef(null); // Ref for the image


  useEffect(() => {
    gsap.fromTo(
      textRef.current,
      { x: 700, opacity: 0 }, // Start from 200px right and invisible
      { x: 0, opacity: 1, duration: 2, ease: "power3.out" } // Move to original position and fade in
    );
    gsap.fromTo(
      redCrossRef.current,
      { x: 600, opacity: 0 },
      { x: 0, opacity: 1, duration: 2, delay: 0.2 }
    );
    gsap.fromTo(
      imageRef.current,
      { y: 200, opacity: 0 }, // Start from 200px below and invisible
      { y: 0, opacity: 1, duration: 3, ease: "power3.out" } // Slide to original position
    );
  }, []);
  return (
    <div className="mb-3">
      <div className='flex text-[230px]  flex-col leading-[180px] text-[#A7101F] p-3  hover:text-[#E4002A] transition-transform duration-500 ease-in-out'>
        <p className="font-bold tracking-[-10.4412px]" ref={textRef}

        >
          YOUTH
        </p>
        <p className=" font-bold tracking-[-10.4412px]  " ref={redCrossRef} >
          RED CROSS
        </p>        </div>
      <div className='flex   justify-center items-center h-[500px] mt-10 p-2'>
        <img ref={imageRef} src={main} alt="" className='shadow-[0_0_50px_rgba(12,34,34,0.6)] ' />
      </div>
    </div>
  )
}

export default Mainpage