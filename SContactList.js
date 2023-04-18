import React, { useState } from 'react'

const SContactList = ({name,diss,age,src}) => {
 
  const [AgeShow,setAgeShow]=useState(false)

  const handleAge = ()=>{
    setAgeShow(!AgeShow)
  }

  return (
     <div className='chat_continer'>
        <div className='img_div'>
          <img  src={src} alt="" />
        </div>
        <div className='cont_div'>
          <h6>{name}</h6>
          <h3>{diss}</h3>
          <button type='button' onClick={handleAge} className='btnAge'>Age</button>
          <p>{AgeShow === true ? `Age: ${age}` : null}</p>
        </div>
    </div>
  )
}

export default SContactList