import React from 'react'

export const Photowrap = (props) => {
   const item=props.values;
  return (
    <div>
      <img src={item.photo} alt={item.name} style={{ width: '200px', height: '200px', objectFit: 'cover' }} />
      <h3>{item.name}</h3>
    </div>
  )
}
export default Photowrap;