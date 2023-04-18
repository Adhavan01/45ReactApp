import React, { useState } from 'react'
import LandingPageA from './Teacher'

const Students = [
    {
        id:1,
        name:"kannan",
        Role_No:741852,
        Tamil:45,
        English:68,
        Maths:55
    },
    {
        id:2,
        name:"vincent",
        Role_No:785416,
        Tamil:45,
        English:68,
        Maths:55
    },
    {
        id:3,
        name:"anirouth",
        Role_No:852456,
        Tamil:45,
        English:68,
        Maths:55
    },
    {
        id:4,
        name:"sillutu",
        Role_No:952123,
        Tamil:45,
        English:68,
        Maths:55
    },
]

function Demo() {
    const [user,setUser]=useState(Students)
    const [add,setAdd]=useState('')
    const [role,setRole]=useState('')

    const [tamil,setTamil]=useState('')

    const [english,setEnglish]=useState('')
    const [maths,setMaths]=useState('')


    const [Upadate,setUpdate]=useState(null)

    const handlesubmit=(e)=>{
        e.preventDefault();
    }
  return (
    <div>
        <form onSubmit={handlesubmit}>
            <label>Name</label>
            <input type="text" value={add} onChange={(e)=>setAdd(e.target.value)} />
            <label>Role No.</label>
            <input type="text" value={role} onChange={(e)=>setRole(e.target.value)}/>
            <label>Tamil</label>
            <input type="number" value={tamil} onChange={(e)=>setTamil(e.target.value)}/>
            <label>English</label>
            <input type="number" value={english} onChange={(e)=>setEnglish(e.target.value)}/>
            <label>Maths</label>
            <input type="number" value={maths} onChange={(e)=>setMaths(e.target.value)}/>
            <button type='submit'>{Upadate ? "Update" : "Add"}</button>
        </form>
        <table>
            <thead>
                <tr key="">
                    <th>Name</th>
                    <th>Role.No</th>
                    <th>Tamil</th>
                    <th>English</th>
                    <th>Maths</th>
                </tr>
            </thead>
            <tbody>
                {
                    user.map((user)=>{
                        return(
                            <tr key="id">
                            <td>{user.name}</td>
                            <td>{user.Role_No}</td>
                            <td>{user.Tamil}</td>
                            <td>{user.English}</td>
                            <td>{user.Maths}</td>
                           </tr>
                        )
                    })
                }
                {
                    <tr key="id">
                    <td>{add}</td>
                    <td>{role}</td>
                    <td>{tamil}</td>
                    <td>{english}</td>
                    <td>{maths}</td>
                    </tr>
           
                }
            </tbody>
        </table>
        <LandingPageA/>
        </div>
  
  )
}

export default Demo