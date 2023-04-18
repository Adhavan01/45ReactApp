import React from 'react'

const Test1 = ({hadleClick,handelechange,addvalue}) => {
    
  return (
    <div>
         <input type="text" onChange={handelechange}/>
        <button onClick={hadleClick}>add</button>
    </div>
  )
}

export default Test1