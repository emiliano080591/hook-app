import React, {useState} from 'react';
import '../useEffect/effects.css';
import MultipleCustomHooks from "../examples/MultipleCustomHooks";

const RealExampleRef = () => {
    const [show,setShow]=useState(false);

    return (
        <div>
            <h1>Real Example</h1>
            <hr/>
            {show && <MultipleCustomHooks/>}
            <button
                className="btn btn-primary"
                onClick={()=>{
                    setShow(!show);
                }}>
                    Show/Hide
            </button>
        </div>
    );
};

export default RealExampleRef;