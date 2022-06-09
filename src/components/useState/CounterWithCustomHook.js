import React from 'react';
import './counter.css';
import useCounter from "../../hooks/useCounter";

const CounterWithCustomHook = () => {
    const{state,increment,decrement,reset}=useCounter();

    return (
        <div>
            <h1>Counter with hook: {state}</h1>
            <hr/>
            <button className="btn btn-danger" onClick={()=>increment(2)}>+1</button>
            <button className="btn btn-primary" onClick={reset}>Reset</button>
            <button className="btn btn-warning" onClick={()=>decrement(2)}>-1</button>
        </div>
    );
};

export default CounterWithCustomHook;