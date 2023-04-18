import React from 'react'
import { useState } from 'react'
import { UserData } from './UserData'
import Test1 from './Test1'

const AddCUrd = () => {
    const[data,setData]=useState(UserData);
    const [addvalue,SetAddValue]=useState('')
   

    const handelechange = (e)=>{
    const newValue = e.target.value
    SetAddValue(newValue)
  
    }
    const hadleClick = ()=>{
        const newID = data.length + 1
        setData([...data,{id:newID, name:addvalue}])
        SetAddValue('')
    }
    const handleDelete = (id)=>{
        setData(data.filter((item)=> item.id !== id))
    }
    const handleUpdate = (id, newValue) => {
    const newData = data.map((item) => {
      if (item.id === id) {
        return { ...item, name: newValue }
      }
      return item
    })
    setData(newData)
  }

  return (
    <>
       
       
        <h3>{addvalue}</h3>
        <Test1 hadleClick={hadleClick} handelechange={handelechange} addvalue={addvalue} />
        {
            data.map((item)=>(
                <p key={item.id}>
                    {item.id}
                    {item.name}
                    <button onClick={()=>handleDelete(item.id)}>delete</button>
                    <input
            type="text"
            defaultValue={item.name}
            onChange={(e) => handleUpdate(item.id, e.target.value)}
          />
                </p>
            ))
        }
    </>
  )
}

export default AddCUrd