import React from 'react'
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"
 import logo from '../assets/mainlogo.jpg'
const Main = () => {
    return (
        <div className=' flex flex-col justify-center items-center '>
            
            {/* logo */}
            <div className='logo  h-55 w-55 rounded-full m-10'>  
                <img src={logo} alt=""
                className=' rounded-full shadow-[0_0_120px_rgba(255,0,0,0.6)]  transition-transform duration-300 hover:scale-90  '
                />
            </div>
            {/* title */}
            <div>
                <h1 className="roboto text-5xl md:text-7xl font-bold mb-6 bg-[#A7101F]    bg-clip-text text-transparent">
                    Youth Red Cross Club
                </h1>
            </div>
            {/* welcome */}
            <div className="relative h-16 mb-8 md:mb-1 flex items-center justify-center overflow-hidden">
              <h2 className="  typewriter mast text-2xl md:text-3xl  font-medium text-gray-700 overflow-hidden whitespace-nowrap animate-typewriter mx-auto">
                Welcome to our humanitarian community!
              </h2>
            </div>

            <div>
                <p className=' mast text-sm text-slate-600 mb-10  tracking-widest'>Empowering young people to serve their communities through leadership, service, and education</p>
            </div>
            <div className='mast flex gap-12' >
                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger className='hover:cursor-pointer hover:text-[#A7101F] hover:scale-125 transtion-transform duration-200 '> ❤️  Health</TooltipTrigger>
                        <TooltipContent > 
                            <p >A healthy body builds a strong mind</p>
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>

                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger className='hover:cursor-pointer hover:text-[#A7101F] hover:scale-125 transtion-transform duration-200'>🤝  Service</TooltipTrigger>
                        <TooltipContent>
                            <p>Helping others is the rent we pay for living on this planet</p>
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>

                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger className='hover:cursor-pointer hover:text-[#A7101F] hover:scale-125 transtion-transform duration-200'>👬  Friendship</TooltipTrigger>
                        <TooltipContent>
                            <p>Friends are the family we choose</p>
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>

            </div>
        </div>
    )
}

export default Main