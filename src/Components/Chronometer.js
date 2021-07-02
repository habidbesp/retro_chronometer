import React, { useState } from 'react'
import "./Chronometer.css"

function Chronometer() {
    
   const [ timer, setTimer ] = useState( { ms: 0, s: 0, m: 0 } ) 

   const [ interv, setInterv ] = useState()

   const [ disabled, setDisabled ] = useState(false)

   const start = () => {
       run()
       setInterv(setInterval(run, 10)); 
       setDisabled(true)
      
   }

   let updatedMs = timer.ms
   let updatedS = timer.s
   let updatedM = timer.m
   
   const run = () => {
       if(updatedM === 60){
           updatedM = 0;
       }
       if(updatedS === 60){
           updatedM++;
           updatedS = 0
       }
       if(updatedMs === 100){
           updatedS++;
           updatedMs = 0
       }

       updatedMs++;
       
       return setTimer({
        ms: updatedMs,
        s: updatedS,
        m: updatedM
       })
   }

   const stop = () => {
        clearInterval(interv) 
        setDisabled(false)
    }

    const reset = () => {
        clearInterval(interv) 
        setTimer( { ms: 0, s: 0, m: 0 } )
        setDisabled( false )
    }

    return (
        <>
        <div className="chronometer">
            <div className="timers">
                <span>
                    { timer.m < 10 ? "0" + timer.m : timer.m }
                </span>
                :
                <span>
                    { timer.s < 10 ? "0" + timer.s : timer.s } 
                </span>
                :
                <span>
                    { timer.ms < 10 ? "0" + timer.ms : timer.ms }
                </span>    
            </div>
            <div className="btn-container">
                <div className="btn-box">
                    <button className="hvr-float-shadow btn" disabled={disabled} onClick={start}>
                    {timer.ms === 0 && timer.s === 0 && timer.m === 0 ? "START" : "CONTINUE"}
                    </button>
                </div>
                <div className="btn-box">
                    <button className="hvr-float-shadow btn" onClick={stop}>STOP</button>
                </div>
                <div className="btn-box">
                    <button className="hvr-float-shadow btn" onClick={reset}>RESET</button>
                </div>
            </div>
        </div>
        </>
    )
}

export default Chronometer
