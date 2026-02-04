import { useState,useEffect } from "react"
export default function CountDownTimer(props) {
    const[timer,SetTimer]=useState(0)

    useEffect(()=>{
         let time=setInterval(() => {
            SetTimer((timer)=> timer + 1);
            console.log(timer)
        },1000);

        return ()=> clearInterval(time)
        
    },[])

    return(
        <div style={{backgroundColor:"bisque"}}>
        
        <h1>CountDownTimer:</h1>
        <p> Timer:{timer}</p>
       
        
        
        </div>
    )
};

