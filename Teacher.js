// import React from 'react'

// function LandingPageA({ username }) {
//   return (
//     <div>
//       <h1>Welcome to Teacher Page, {username}!</h1>
//       <div>

//       </div>
//     </div>
//   );
// }


// export default LandingPageA


// import React, { useState } from 'react';

// const UserDetial = ['adhavvan',"boominga","nellafda"]

// function LandingPageA({username}) {
//   const [items, setItems] = useState([]);
//   const [inputValue, setInputValue] = useState('');
//   const [selectedItem, setSelectedItem] = useState(null);

//   const handleInputChange = (event) => {
//     setInputValue(event.target.value);
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     if (selectedItem) {
//       // Update operation
//       const updatedItems = items.map((item) => {
//         if (item.id === selectedItem.id) {
//           return { ...item, name: inputValue };
//         }
//         return item;
//       });
//       setItems(updatedItems);
//       setSelectedItem(null);
//     } else {
//       // Create operation
//       const newItem = { id: Date.now(), name: inputValue };
//       setItems([...items, newItem]);
//     }
//   };

//   const handleEdit = (item) => {
//     setSelectedItem(item);
//     setInputValue(item.name);
//   };

//   const handleDelete = (item) => {
//     // Delete operation
//     const updatedItems = items.filter((i) => i.id !== item.id);
//     setItems(updatedItems);
//   };

//   return (
//     <div>
//       <h1>Welcome to Teacher Page, <code>{username}</code></h1>
//       <form onSubmit={handleSubmit}>
//         <input type="text" value={inputValue} onChange={handleInputChange} />
//         <button type="submit">{selectedItem ? 'Update' : 'Add'}</button>
//       </form>
//       <ul>
//         {items.map((item) => (
//           <li key={item.id}>
//             {item.name}
//             <button onClick={() => handleEdit(item)}>Edit</button>
//             <button onClick={() => handleDelete(item)}>Delete</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default LandingPageA;
import React, { useRef } from 'react'
import { useState } from 'react'
// import TeacherForm from './TeacherForm'
import {UserData} from './UserData'
import { FaAdn, FaCanadianMapleLeaf} from 'react-icons/fa';



function Teacher({username}) {
  const [ImageClick,setImageClick]=useState(false)
  const [AddInput,setAddInput]=useState('')
  const [RollNo,setRollNo]=useState('')
  const [Tamil,setTamil]=useState('')
  const [English,setEnglish]=useState('')
  const [Maths,setMaths]=useState('')
  // const [AddInput,setAddInput]=useState('')
  // const [AddInput,setAddInput]=useState('')
  // const [AddInput,setAddInput]=useState('')
  const [list,setList]=useState(UserData)
  const [editId,setEditId]=useState(null)
  const [editName,setEditName]=useState('')
  const [editRole,setEditRole]=useState('')
  const [editTamil,setEditTamil]=useState('')
  const [editEnglish,setEditEnglish]=useState('')
  const [editMaths,setEditMaths]=useState('')
  const inputRef = useRef(null)
  const ageRef = useRef(null)
  const TamilRef = useRef(null)
  const EnglishRef = useRef(null)
  const MathsRef = useRef(null)


const OpenForm = ()=>{
  setImageClick(!ImageClick)
}

  const handleSubmit = (e)=>{
    e.preventDefault()
    if(!AddInput.trim()){
      alert('please enter a value')
    }else
    {
      if(editId !== null){
        setList(list.map((item)=> item.id === editId ? {...item, name:editName, role_no:editRole, tamil:editTamil, english:editEnglish, maths:editMaths } : item))
        setEditId(null)
        setEditName('')
        setEditRole('')
        setEditTamil('')
        setEditEnglish('')
        setEditMaths('')
      }else{

        const lists =
        {
          id:list.length === 0 ? 1 : list[list.length - 1].id +1,
          name:AddInput,
          role_no:RollNo,
          tamil:Tamil,
          english:English,
          maths:Maths,
          complited:false,
        }
      setList([...list,lists])
      setAddInput('')  
      setRollNo('')
      setTamil('')
      setEnglish('')
      setMaths('')
      }
    }
    inputRef.current.value=" "
    ageRef.current.value=" "
    TamilRef.current.value=" "
    EnglishRef.current.value=" "
    MathsRef.current.value=" "
  }

  const handleDelete =(id)=>{
    setList(list.filter((item)=> item.id !== id))
  }

  const handleComplited = (id)=>{
    setList(list.map((item)=>item.id === id ? {...item,complited:!item.complited} : item))
  }

  const handlEdit =(id,name, role_no,tamil,english,maths)=>{
    setEditId(id)
    setEditName(name)
    setEditRole(role_no)
    setEditTamil(tamil)
    setEditEnglish(english)
    setEditMaths(maths)
  }
 
  const handleSave = ()=>{
    if(!editName.trim()){
      alert('please enter the value')
    }else{
      setList(list.map((item)=> item.id === editId ? {...item, name:editName, role_no:editRole , tamil:editTamil, english:editEnglish, maths:editMaths} : item ))
      setEditName('')
      setEditId(null)
      setEditRole('')
      setEditTamil('')
      setEditEnglish('')
      setEditMaths('')
    }
 
  }

  const handleCancle = ()=>{
    setEditId(null)
    setAddInput('')
    setEditRole('')
    setEditTamil('')
    setEditEnglish('')
    setEditMaths('')
  }


  return (
    <div>
      <div>
        <h1>Teacher Login</h1>
        <h4>{username}</h4>

      </div>
      <button onClick={OpenForm}>{ImageClick ? <FaAdn/> : <FaCanadianMapleLeaf/> }</button>
      {ImageClick &&
         <form onSubmit={handleSubmit}>
         <input type="text" placeholder='Enter the name' onChange={(e)=>setAddInput(e.target.value)} ref={inputRef}/>
         <input type="number" placeholder='Role No' onChange={(e)=> setRollNo(e.target.value)} ref={ageRef}/>
         <input type="number" placeholder='Tamil Mark' onChange={(e)=> setTamil(e.target.value)} ref={TamilRef}/>
         <input type="number" placeholder='English Mark' onChange={(e)=> setEnglish(e.target.value)} ref={EnglishRef}/>
         <input type="number" placeholder='Maths Mark' onChange={(e)=> setMaths(e.target.value)} ref={MathsRef}/>
 
         <button>submit</button>
       </form> }
   
      <div>
        <table>
          <thead>
            <tr key="">
              <td>No</td>
              <td>Name</td>
              <td>Role No</td>
              <td>Tamil</td>
              <td>English</td>
              <td>Maths</td>
            </tr>
          </thead>
          <tbody>
            {
              list.map((item)=>{
                return(
                <tr key="" style={{color:item.complited?'red':"green", textDecoration:item.complited? "line-through" : "none"}}>
                  <td>{item.id}</td>
                  <td>
                    {
                      editId === item.id ? (
                        <input type="text" value={editName} onChange={(e)=>setEditName(e.target.value.trim())} />
                      ):(
                        item.name
                      )
                    }
                  </td>
                  <td>
                    {
                      editId === item.id ? (
                        <input type="number" value={editRole} onChange={(e)=>setEditRole(e.target.value.trim())} />
                      ):(
                        item.role_no
                      )
                    }
                  </td>
                  <td>
                    {
                      editId === item.id ? (
                        <input type="number" value={editTamil} onChange={(e)=>setEditTamil(e.target.value.trim())} />
                      ):(
                        item.tamil
                      )
                    }
                  </td>
                  <td>
                    {
                      editId === item.id ? (
                        <input type="number" value={editEnglish} onChange={(e)=>setEditEnglish(e.target.value.trim())} />
                      ):(
                        item.english
                      )
                    }
                  </td>
                  <td>
                    {
                      editId === item.id ? (
                        <input type="number" value={editMaths} onChange={(e)=>setEditMaths(e.target.value.trim())} />
                      ):(
                        item.maths
                      )
                    }
                  </td>
                  <td>
                  {
                            editId !== item.id ? (
                              <button onClick={()=>handleComplited(item.id)}>Completed</button>
                            ):(
                              <button onClick={handleSave}>Save</button>
                            )
                      }
                  </td>
                  <td>
                  {
                          editId !== item.id ? (
                            <button onClick={()=>handlEdit(item
                              .id,item.name,item.role_no)}>Edit</button>
                          ):(
                            <button onClick={handleCancle}>cancel</button>
                          )
                      }
                  </td>
                  <td>
                  <button onClick={()=>handleDelete(item.id)}>Delete</button>
                  </td>
                </tr>
                )
              })
            }
          </tbody>
        </table>    


        {/* {
          list.map((item)=>{
            return(
              <div style={{color:item.complited?'red':"green"}}>
                {
                  editId === item.id ?(
                    <div>
                       <input type="text" value={editName} onChange={(e)=>setEditName(e.target.value.trim())} />
                    <input type="text" value={editRole} onChange={(e)=>setEditRole(e.target.value.trim())} />
                    </div>
                   
                  ):(
                  //   <h1 f}>
                  //   {item.name}<br/>
                  //   {item.role_no}
                  // </h1>
                 <table>
                  <thead>
                    <tr key="">
                      <td>Name</td>
                      <td>Role No:</td>
                      <td>Tamil</td>
                      <td>English</td>
                      <td>Maths</td>
                    </tr>
                  </thead>
                  <tbody>
                    <tr key="item.id">
                      <td>{item.id}</td>
                      <td>{item.name}</td>
                      <td>{item.role_no}</td>
                      <td>
                      {
                            editId !== item.id ? (
                              <button onClick={()=>handleComplited(item.id)}>Completed</button>
                            ):(
                              <button onClick={handleSave}>Save</button>
                            )
                      }
                      </td>
                      <td>
                      {
                          editId !== item.id ? (
                            <button onClick={()=>handlEdit(item
                              .id,item.name,item.role_no)}>Edit</button>
                          ):(
                            <button onClick={handleCancle}>cancel</button>
                          )
                      }
                      </td>
                      <td>
                      <button onClick={()=>handleDelete(item.id)}>Delete</button>
                      </td>
                    </tr>
                  </tbody>
                 </table>
                  )
                }
              </div>
            )
          })
        } */}
      </div>
    </div>
  )
}

export default Teacher