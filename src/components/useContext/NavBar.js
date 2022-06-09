import React from 'react';
import {Link,NavLink} from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <Link className="navbar-brand" to="/">UseContext</Link>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <NavLink className="nav-item nav-link active" to="/">Home</NavLink>
                    <NavLink className="nav-item nav-link active" to="/about">About</NavLink>
                    <NavLink className="nav-item nav-link active" to="/login">Login</NavLink>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;