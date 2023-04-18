import React from "react";
// import JsonData from './MackData.json'
import { useEffect } from "react";
import { useState } from "react";
// import axios from "axios";


function TesingForm() {
  const [greeting, setGreeting] = useState({
    firstName:"",
    lastName:'',
    Email:""
  });

  return (
    <div>
     <form>
      <input type="text" placeholder="First Name" value={greeting.firstName} onChange={(e)=>setGreeting({...greeting,firstName:e.target.value})} />

     </form>
     <h1>{greeting.firstName}</h1>
    </div>
  );
};


export default TesingForm;