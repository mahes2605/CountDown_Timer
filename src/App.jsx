import { useState } from 'react'
import './App.css'
import CountDownTimer from './components/CountDown_Timer'
function App() {
const [IsOn,SetIsOn]=useState(false)

function StartTimer(){
  SetIsOn((IsOn)=>!IsOn)
}
  return (
    
    
    <>
    <button onClick={StartTimer}> Start timer</button>


    {IsOn ? <CountDownTimer/>:<h1>Timer is off</h1>}
       
    </>
  )
}

export default App
