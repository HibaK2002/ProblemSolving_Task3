import React, { useState, useEffect } from 'react';

const Timer = () => {
    const [time, setTime] = useState(0); //UseState returns an array with 2 elements (State Value and a func to update state value)  , and it takes one argument for the var in the returned array
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
        let interval;

        if (isRunning) {
            interval = setInterval(() => { // js built-in func it takes (func,delay(period))
                setTime(Time => Time + 1);
            }, 1000);
        } 

        return () => clearInterval(interval); //will excute only if isRunning is false
    }, [isRunning]); //[isRunning] , a Dependency array that tells the useEffect when to re-run (whenever there is a value to 'isRunning')
//these are arrow func's to give values to the already setted func's to excute the program
    const startTimer = () => setIsRunning(true); 
    const stopTimer = () => setIsRunning(false);
    const resetTimer = () => {
        setIsRunning(false);
        setTime(0);
    };

    return (
        <div>
            <h1>{time} Timer</h1>
            <button onClick={startTimer}>Start</button>
            <button onClick={stopTimer}>Stop</button>
            <button onClick={resetTimer}>Reset</button>
        </div>
    );
};

export default Timer;
