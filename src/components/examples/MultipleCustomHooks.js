import React from 'react';
import '../useEffect/effects.css';
import useFetch from "../../hooks/useFetch";
import useCounter from "../../hooks/useCounter";

const MultipleCustomHooks = () => {

    const {counter,increment}=useCounter(1)

    const {loading,data} = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`)

    const {author, quote} = data ? data[0] : {undefined}
    return (
        <div>
            <h1>Custom Hooks</h1>
            <hr/>
            {
                loading ?
                    (
                        <div className="alert alert-info text-center">
                            Loading...
                        </div>
                    )
                    :
                    (
                        <blockquote className="blockquote text-right">
                            <p className="mb-0">{quote}</p>
                            <footer className="blockquote">{author}</footer>
                        </blockquote>
                    )
            }
            <button
                className="btn btn-primary"
                onClick={()=>increment()}>Next Quote</button>
        </div>
    );
};

export default MultipleCustomHooks;