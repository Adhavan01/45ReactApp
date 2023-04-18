import React from 'react'
import { useState } from 'react'

export const LoginValidation = () => {

  const [values,setValues]=useState({
    firstName:'',
    lastName:'',
    Email:''
  })

  const [submits,setSubmits]= useState(false)
  const [val,setVel]=useState(false)

  const handelSubmit = (e) =>{
    e.preventDefault()
    if(values.firstName && values.lastName && values.Email){
      setVel(true);
    };
    setSubmits(true)
  }
  return (
    <div className='FormValidation'>
      <form onSubmit={handelSubmit} className='LoginForm'> 
          { submits && val ? <div className='succuess'> Success! Thank you for Login </div> :null}  
        <input type="text" placeholder='First name' value={values.firstName} onChange={(e)=>setValues({...values,firstName:e.target.value})}/>
          { submits && !values.firstName ? <div className='warning'>*Requird First Name </div> :null} 
        <input type="text" placeholder='Last Name' value={values.lastName} onChange={(e)=>setValues({...values,lastName:e.target.value})}/>
          { submits && !values.lastName ? <div className='warning'>*Requird Last Name</div> :null} 
        <input type="email" placeholder='abcd@pqr.xyz' value={values.Email} onChange={(e)=>setValues({...values,Email:e.target.value})}/> 
          { submits && !values.Email ? <div className='warning'>*Requird E-mail ID </div> :null} 
        <button type='submit'>Login</button>
      </form>
    </div>
  )
}
