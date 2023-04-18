import React, { useState } from 'react'
import JSanData from '../DataPass/MackData.json'

const SearchFilter = () => {
  const [list,setList]=useState("")

  const handleInput =(e)=>{
    setList(e.target.value)
  }
  return (
    <div>
      <input type="text" placeholder='Search....' onChange={handleInput}/>
            {
              JSanData.filter((item)=>{
                if(list === ""){
                  return item
                }else if(item.first_name.toLocaleLowerCase().includes(list)){
                  return item
                }
              }).map((item)=>{
                return(
                  <ul className='searchData'>
                       <li>{item.first_name} &nbsp; {item.last_name}</li>
                  </ul>
                )
              }
               
              )
                

            }

    </div>
  )
}

export default SearchFilter