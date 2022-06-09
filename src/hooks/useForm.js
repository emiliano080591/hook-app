import {useState} from "react";

const UseForm = (initialState={}) => {
    const [values,setValues]=useState(initialState);

    const reset=()=>{
        setValues(initialState);
    }

    const handleInputChange=({target})=>{
        setValues({
            ...values,
            [target.name]:target.value
        });
    }

    return [values,handleInputChange,reset];
};

export default UseForm;