import React, { useState } from 'react'

const Qustionset = [
    {
        Qustion:"What year did the Titanic sink in the Atlantic Ocean on 15 April, on its maiden voyage from Southampton?",
        OptionAnswer:
        [
          {answerText:1955, isCorrect:false},
          {answerText:1912, isCorrect:true},
          {answerText:1915, isCorrect:false},
          {answerText:1921, isCorrect:false} 
        ],
    },
    {
        Qustion:"How many breaths does the human body take daily?",
        OptionAnswer:
        [
          {answerText:"10,000 daily", isCorrect:false},
          {answerText:"20,500 daily", isCorrect:false},
          {answerText:"20,000 daily", isCorrect:true},
          {answerText:"30,000 daily", isCorrect:false} 
        ],
    },
    {
        Qustion:"What is the lifespan of a dragonfly?",
        OptionAnswer:
        [
          {answerText:"21 hours", isCorrect:false},
          {answerText:"22 hours", isCorrect:false},
          {answerText:"23 hours", isCorrect:false},
          {answerText:"24 hours", isCorrect:true} 
        ],
    },
    {
        Qustion:"What did Al Capone’s business card state his occupation was?",
        OptionAnswer:
        [
          {answerText:"A used furniture salesman", isCorrect:true},
          {answerText:"The loudest burp", isCorrect:false},
          {answerText:"Barbara Millicent Roberts", isCorrect:false},
          {answerText:"Bee Hummingbird", isCorrect:false} 
        ],
    },
]



const QuizApp = () => {
    const [currentQust,setCurrentQust]=useState(0)
    const [showScore,setShowScore]=useState(false)
    const [Score,setScore]=useState(0)


    const handleChange = (isCorrect)=>{
        if(isCorrect === true){
            setScore(Score+1)
        }
        

        if(currentQust < Qustionset.length-1){
            setCurrentQust(currentQust + 1)
           
        }else{
           setShowScore(true)
        }
        
    }
     
    const hanleBack = ()=>{
        if(showScore === true){
            setShowScore(false)
        }
        else if (currentQust > 0){
            setCurrentQust(currentQust -1)
        }

        setScore(0)
    }
        
    

  return (
    <div className='quizContiner'>
        {
            showScore ? (<div className='showscore back'>You Scored {Score} out of {Qustionset.length}
             <button onClick={hanleBack}>&laquo; back</button></div>) :
            (
                <> 
                     <div className='quizQustion'>
                <div className='Qustlenght'> 
                <h1>Qustion</h1>&ensp;<h1>{currentQust+1}/<code>{Qustionset.length}</code></h1>
                </div>
                
                <div>
                    <p>{Qustionset[currentQust].Qustion}</p>
                </div>

                <div className='back'>
                <button onClick={hanleBack}>&laquo; back </button>
                </div>
            </div>
            <div className='quizAnswer'> 
               {Qustionset[currentQust].OptionAnswer.map((item)=>(<button onClick={()=>handleChange(item.isCorrect)} >{item.answerText}</button>))}
            </div>
            </>
           
            )
           
        }
       
    </div>
  )
}

export default QuizApp