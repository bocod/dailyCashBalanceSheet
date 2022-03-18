import React from "react";

function Navbar (){
    return (
        <React.Fragment>
            <ul>
                <li>Home</li>
                <hr/>
                <li>Login</li>
                <li>Logout</li>
                <hr/>
                <li>Add</li>
                <li>Remove</li>
            </ul>
        </React.Fragment>
    );
};

export default Navbar;