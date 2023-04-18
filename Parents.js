import React, { useRef, useState } from 'react'
import { v4 as uut } from 'uuid';


export const Parents = () => {

  //--
const lists = [
  {
    id:1,
    name:"kumaran",
    age:'44'
  },
  {
    id:2,
    name:"kumaran",
    age:'44'
  }
]

console.log(uut());

//--
const [list,setList]=useState(lists)
const [updateList,setUpdateList]= useState(-1)

const handleUpdate = (id)=>{
  setUpdateList(id)
}

//delete function -------------------
const handleDelet =(name)=>{
  const nrewlist = list.filter((item)=>item.name !== name)
  setList(nrewlist)
}
//-------------------

const handelsubmits =(e)=>{
  e.preventDefault()
  const name =e.target.elements.name.value
  const age =e.target.elements.age.value
  const newList =   list.map((li)=>(
    li.id === updateList ? {...li, name:name, name:age} : li
  ))
  setList(newList)
  setUpdateList(-1)
}



//--
  return (
    <div className='teacherCURD'>
      <form onSubmit={handelsubmits}>
      <table>
         <thead className='teacherTHead'>
          <tr key="">
            <td>Id</td>
            <td>Name</td>
            <td>Age</td>
          </tr>
         </thead>
         <tbody >
          {
            list.map((current)=>{
       
              return(
                updateList === current.id ? <EditInputs  current={current} list={list} setList={setList}/>:
                <tr key="">
                  <td className='teacherTBody'>{current.id}</td>
                  <td>{current.name}</td>
                  <td>{current.age}</td>
                  <td>
                      <button type='button' className='TBtn' name='edit' onClick={()=>handleUpdate(current.id)}>Edit</button>
                  </td>
                  <td>
                      <button type='button' className='TBtn' name='delete' onClick={()=>handleDelet(current.name)}>Delete</button>
                  </td>
                </tr>
              )
            })
          }
         </tbody>
      </table>
      </form>
      <AddInputs setList={setList}/>
    </div>
  )
}
//-------------------------------------------

const EditInputs = ({current,list,setList})=>{

  // const handelEditname = (e)=>{
  //   const name = e.target.name
  //   const value = e.target.value
  // const nameList =   list.map((newName)=>(
  //   newName.id === current.id ? {...newName, name:value} : newName
  //   ))
  //   setList(nameList)
  // }


  const handelEditage = (e)=>{
    const agest = e.target.value
  const newList =   list.map((li)=>(
      li.id === current.id ? {...li, age:agest} : li
    ))
    setList(newList)
  }

  return(
    <tr key="">
      <td><input type="text" name='name'   value={current.name}/></td>
      <td><input type="number" name='age' onChange={handelEditage}  value={current.age}/></td>
      <td><button type='submit'>Update</button></td>
    </tr>
  )
}














//----------------------------------------------
const AddInputs = ({setList}) =>{
  const nameRef = useRef()
  const ageRef =useRef()
  const [Idt,setIdt]=useState(3)
  const coutnHant = ()=>{
    setIdt(Idt + 1)
  }
  const handelsubmit = (e)=>{
    e.preventDefault();
    const name = e.target.elements.name.value
    const age = e.target.elements.age.value
    
    const newList= {
      id:console.log(setIdt),
      name,
      age
    }
    setList((prevList)=>{
      return prevList.concat(newList)
    })
    nameRef.current.value= ""
    ageRef.current.value= ""
  }
  return(
    <form className="AddContiner" onSubmit={handelsubmit}>
      <input type="text" placeholder='Name' name='name' ref={nameRef}/>
      <input type="number" placeholder='Age' name='age' ref={ageRef}/>
      <button className='FormBtn'>Add</button>
    </form>
  )
}


//-------------------------------------
//to add the value in current value

//take the value from name="name"
//onsubmit handler => const name = e.target.element.name.value
//get then setState value in top and use it in here
//const newlist = {name,all}
//setstate((prevlist)=>{return prevlist.concat(newlist)})

//---------------------------------------

//To no value in input after the submit

//const name = useRef
// use in input ref= {name}
// name.current.value=""

// * current is list.map(current)

//----------------------------------------