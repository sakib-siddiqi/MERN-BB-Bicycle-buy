import React, { createContext } from 'react';
import useFirebase from '../Hooks/Firebase/useFirebase';
export const AuthProvider = createContext();
const AuthCotext = ({ children }) => {
    return (
        <AuthProvider.Provider value={useFirebase()}>
            {children}
        </AuthProvider.Provider>
    );
};

export default AuthCotext;