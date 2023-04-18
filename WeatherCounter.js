import { orange } from '@mui/material/colors'
import React from 'react'
import { useState } from 'react'

const WeatherCounter = () => {
    const [count,setCount]=useState(0)

    const handleMinas = ()=>{
        if(count > 0 ){
            setCount(count -1)
        }
    }
  return (
    <div className='temp_card'>
        <h1 style={{backgroundColor: count < 10 ? "lightskyblue" : count < 18 ? "lightblue" : count < 24 ? "yellow" : count < 32 ? "orange" : "red"}}>{count}</h1>
        <div className='temp_button_div'>
            <button className='temp_button' onClick={()=>setCount(count+1)}>+</button>
            <button className='temp_button' onClick={handleMinas}>-</button>
        </div>
    </div>
  )
}

export default WeatherCounter