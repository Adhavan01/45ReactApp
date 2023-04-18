import React from 'react'
import { useState } from 'react'
import {evaluate} from 'mathjs';

const Calc = () => {
    const[input,setInput]=useState('')

    const handleClick =(e)=>{
        setInput(input + e.target.value)
    }

    const handleClearClick=()=>{
        setInput('')
    }

    const handleClculate = ()=>{
        try{
            const result = evaluate(input);
            setInput(result.toString());
        }
        catch(error){
            setInput("error")
        }
    }

  return (
    <div className='calc_contine'>
        <div className='inputCal'>
            <input type="text" value={input} readOnly/>
        </div>
        <div className='buttonCal'>
            <button onClick={handleClick} value={"1"} >1</button>
            <button onClick={handleClick} value={'2'} >2</button>
            <button onClick={handleClick} value={"3"} >3</button>
            <button onClick={handleClick} value={"*"} >*</button>
            <button onClick={handleClick} value={"4"} >4</button>
            <button onClick={handleClick} value={"5"} >5</button>
            <button onClick={handleClick} value={"6"} >6</button>
            <button onClick={handleClick} value={"-"} >-</button>
            <button onClick={handleClick} value={"7"} >7</button>
            <button onClick={handleClick} value={"8"} >8</button>
            <button onClick={handleClick} value={"9"} >9</button>
            <button onClick={handleClick} value={'+'} >+</button>
            <button onClick={handleClick} value={"0"} >.</button>
            <button onClick={handleClick} value={"0"} >0</button>
            <button onClick={handleClick} value={'/'} >/</button>
            <button onClick={handleClearClick} className='btnclr'>Clr</button>
            <button onClick={handleClick} value={'%'} >%</button>
            <button onClick={handleClculate} className='btncall' >=</button>

        </div>
    </div>
  )
}

export default Calc