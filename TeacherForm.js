import React from 'react'


function TeacherForm(onSubmit) {
    const [AddInput,setAddInput]=useState('')
    const [RollNo,setRollNo]=useState('')
    
  const handleSubmit = (e)=>{
    e.preventDefault()
    if(!AddInput.trim()){
      alert('please enter a value')
    }else
    {
      if(editId !== null){
        setList(list.map((item)=> item.id === editId ? {...item, name:editName, role_no:editRole} : item))
        setEditId(null)
        setEditName('')
        setEditRole('')
      }else{

        const lists =
        {
          id:list.length === 0 ? 1 : list[list.length - 1].id +1,
          name:AddInput,
          role_no:RollNo,
          complited:false,
        }
      setList([...list,lists])
      setAddInput('')  
      setRollNo('')
      }
    }
    inputRef.current.value=" "
    ageRef.current.value=" "
    onSubmit({AddInput,RollNo})
  }

  return (
    <div>
        <form onSubmit={handleSubmit}>
        <input type="text" placeholder='Enter the name' onChange={(e)=>setAddInput(e.target.value)} ref={inputRef}/>
        <input type="number" placeholder='Role No' onChange={(e)=> setRollNo(e.target.value)} ref={ageRef}/>
        <button>Add</button>
      </form>
    </div>
  )
}

export default TeacherForm
