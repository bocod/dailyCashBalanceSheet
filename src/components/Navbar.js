import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Debits from "./Debits";
import { Footer } from "./Footer";
import MainContent from "./MainContent";

function Navbar (){
    return (
        <React.Fragment>
            <ul>
                <li>
                    <Link to='/'>
                        Home
                    </Link>
                </li>
                <hr/>
                <li>
                    <Link to='/login'>
                        Login
                    </Link>
                </li>
                <li>
                    <Link>
                        Logout
                    </Link>
                </li>
                <hr/>
                <li>
                    <Link to='/debits'>
                        Debits
                    </Link>
                </li>
                <li>
                    <Link to='/credits'>
                        Credits
                    </Link>
                </li>
            </ul>
            <BrowserRouter>
                <Routes>
                    <Route exact path="/">
                        <Footer />
                    </Route>
                    <Route path="/login">
                        <MainContent />
                    </Route>
                    <Route path="/debits">
                        <Debits  />
                    </Route>
                </Routes>
            </BrowserRouter>
        </React.Fragment>
    );
};

export default Navbar;