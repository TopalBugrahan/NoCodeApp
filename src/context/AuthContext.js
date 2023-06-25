import { createContext, useContext, useEffect, useState } from 'react';
import { useLocalStorage } from '../hook/useLocalStorage';

const Context = createContext();
export const AuthProvider = ({ children }) => {
    const [user, setUser] = useLocalStorage("user", null);
    
    if(user)
    {
        let expirationTime = new Date(user.expirationTime);
        let currentTime = new Date();

        if(currentTime > expirationTime)
        {
            setUser(null);
        }
    }

    const data = {
        user,
        setUser,
    };

    return <Context.Provider value={data}>{children}</Context.Provider>;
};

export const useAuth = () => useContext(Context);
