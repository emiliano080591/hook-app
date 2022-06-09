import React, {useReducer} from 'react';

const initialState={
  counter1:0,
  counter2:10
};

const reducer=(state,action)=>{
    switch (action.type){
        case 'increment':
            return {...state,counter1: state.counter1+action.value};
        case 'decrement':
            return {...state,counter1: state.counter1-action.value};
        case 'increment2':
            return {...state,counter2: state.counter2+action.value};
        case 'decrement2':
            return {...state,counter2: state.counter2-action.value};
        case 'reset':
            return initialState;
        default:
            return state;
    }
}

const CounterReducerApp = () => {
    const [state,dispatch]=useReducer(reducer,initialState);

    return (
        <div>
            <h3>First counter->{state.counter1}</h3>
            <button className="btn btn-primary" onClick={()=>dispatch({type:'increment',value:1})}>Increment</button>
            <button className="btn btn-error" onClick={()=>dispatch({type:'decrement',value:1})}>Decrement</button>
            <button className="btn btn-info" onClick={()=>dispatch({type:'reset'})}>Reset</button>
            <hr/>
            <br/>
            <h3>Second counter->{state.counter2}</h3>
            <button className="btn btn-primary" onClick={()=>dispatch({type:'increment2',value:10})}>Increment</button>
            <button className="btn btn-error" onClick={()=>dispatch({type:'decrement2',value:10})}>Decrement</button>
        </div>
    );
};

export default CounterReducerApp;