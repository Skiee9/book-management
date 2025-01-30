import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { useContext } from "react";

import  {AuthContext} from "../context/AuthContext";

// for navbar component
const Navbar=()=>{
    const { isAuthenticated , logout } = useContext(AuthContext);

    return(
        <nav>
       
        <link to = "/Home">Home</link>
        <link to ="/Book">Book</link>
        {!isAuthenticated ? ( <link to ="/Login">login</link>) :(<button onClick={logout}>Logout</button>)}

       
        
               

        </nav>
    )
}
export default Navbar;