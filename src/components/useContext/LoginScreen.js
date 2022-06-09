import React, {useContext} from 'react';
import {UserContext} from "./UserContext";

const LoginScreen = () => {
    const {setUser}=useContext(UserContext);

    return (
        <div>
            <h1>Login Screen</h1>
            <hr/>
            <button
                className="btn btn-outline-primary mt-5"
                onClick={()=>setUser({
                    id:1133,
                    name:'Emiliano',
                    email:'test@gmail.com'
                })}
            >
                Login
            </button>
        </div>
    );
};

export default LoginScreen;