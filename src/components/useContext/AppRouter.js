import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from "react-router-dom";
import AboutScreen from "./AboutScreen";
import HomeScreen from "./HomeScreen";
import LoginScreen from "./LoginScreen";
import NavBar from "./NavBar";


const AppRouter = () => {
    return (
        <Router>
            <div>
                <NavBar/>
                <Routes>
                    <Route path="/about" element={ <AboutScreen/> }/>
                    <Route path="/login" element={ <LoginScreen/> }/>
                    <Route path="/" element={ <HomeScreen/> }/>

                    <Route path="*" element={<Navigate to="/" />} />
                </Routes>
            </div>
        </Router>
    );
};

export default AppRouter;