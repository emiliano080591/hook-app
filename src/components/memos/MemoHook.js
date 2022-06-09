import React, {useMemo, useState} from 'react';
import '../useEffect/effects.css';
import useCounter from "../../hooks/useCounter";

const MemoHook = () => {
    const {counter,increment}=useCounter(5000);
    const [show,setShow]=useState(true);

    const procesoPesado=(iteraciones)=>{
        for (let i = 0; i < iteraciones; i++) {
            console.log('Ahi vamos...')
        }
        return iteraciones+' interaciones realizadas';
    }

    const memoProceso=useMemo(()=>procesoPesado(counter),[counter]);
    
    return (
        <div>
            <h1>Memo Hook</h1>
            <h3>Memorize->{counter}</h3>
            <hr/>
            <p>{memoProceso}</p>
            <button
                className="btn btn-primary"
                onClick={increment}>
                +1
            </button>
            <button className="btn btn-primary ml-3"
                    onClick={()=>{setShow(!show)}}>
                Show/Hide {JSON.stringify(show)}
            </button>
        </div>
    );
};

export default MemoHook;