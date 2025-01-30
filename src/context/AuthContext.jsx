import React, {createContext, useState} from 'react'
import {useNavigate} from 'react-router-dom';
    
export const AuthContext = createContext();

export const AuthProvider = ({props})=>{
    const [isAuthenticated, setIsAuthenticated]= useState(
        localStorage.getItem('auth') === "true"
    );
    const Navigate = useNavigate();
    const login = () => {
        setIsAuthenticated(true);
        localStorage.setItem('auth', 'true');
        Navigate('/Books');
    };

    const logout =()=>{
        setIsAuthenticated(false);
        localStorage.removeItem('auth');
        Navigate('/login')
    };
    return(
        <AuthContext.Provider value={{isAuthenticated, login, logout}}>
            {props.children}
        </AuthContext.Provider>
    )
}
