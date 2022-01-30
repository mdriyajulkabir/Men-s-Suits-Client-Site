import React, { createContext } from 'react';
import useFirebase from '../Hooks/useFirebase';

export const AuthContext = createContext();
const AuthProvider = (props) => {
    const {children} = props;
    const allContexts = useFirebase();
    const data = {
        contexts:allContexts,
        
    };
    return (
        <AuthContext.Provider value={data}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;