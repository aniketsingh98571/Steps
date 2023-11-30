import {useState} from "react"
import './App.css';
function Button({textColor,backgroundColor,action,children}){
  return (
    <button style={{backgroundColor:backgroundColor,color:textColor}} onClick={action}>{children}</button>
  )
}
function StepMessage({step,children}){
  return (
    
    <p className="message">
      <h3>Step {step}:</h3>{children}
      </p>
  )
}
function App() {
  const messages = [
    "Learn React ⚛️",
    "Apply for jobs 💼",
    "Invest your new income 🤑",
  ];
  const [step,setStep]=useState(1)
  const [isOpen,setIsOpen]=useState(true)
  function handlePrevious(){
    if(step>1)
    setStep((prevStep)=>{
      return prevStep-1
    })
  }
  function handleNext(){
    if(step<3)
    setStep((prevStep)=>{
      return prevStep+1
    })
  }
  return (
    <>
    <button className="close" onClick={()=>setIsOpen((prevCondition)=>!prevCondition)}>&times;</button>
    {
    isOpen&&
    <div className='steps'>
      <div className='numbers'>
        <div className={step>=1?"active":""} >1</div>
        <div className={step>=2?"active":""}>2</div>
        <div className={step>=3?"active":""}>3</div>
      </div>
      <StepMessage step={step}>
        {messages[step-1]}
      </StepMessage>
      <div className="buttons"> 
       <Button textColor='#ffffff' backgroundColor='#7950f2' action={handlePrevious}>
        <span>👈</span>Previous</Button>
       <Button textColor='#ffffff' backgroundColor='#7950f2' action={handleNext}>
        Next<span>👉</span></Button>
      </div>
    </div>
   
    }
     </>
  );
}

export default App;
