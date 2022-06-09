import React, {useContext} from 'react';
import {UserContext} from "./UserContext";

const HomeScreen = () => {
    const {user}=useContext(UserContext);

    return (
        <div>
            <h1>Home Screen</h1>
            <hr/>
            <pre className="container">
                {JSON.stringify(user,null,3)}
            </pre>
        </div>
    );
};

export default HomeScreen;