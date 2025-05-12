import React from 'react'

export const Photowrap = (props) => {
   const item=props.values;
  return (
    <div className='mast m-5'>
      <img className='h-[70px] w-[70px] rounded-full shadow-[0_0_50px_rgba(12,34,34,0.6)] ' src={item.photo} alt={item.name} style={{ width: '200px', height: '200px', objectFit: 'cover' }} />
      
      <div className='flex flex-col items-center justify-center text-center text-sm mt-5 text-slate-600'>
      <h3>{item.name}</h3>
      <h3>{item.role}</h3>
        </div>
       
    </div>
  )
}
export default Photowrap;