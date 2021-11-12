import React, { createContext } from 'react';
import useData from '../Hooks/Database/useDataBase';
export const DataProvider=createContext();
const DataContext = ({children}) => {
    return (
        <DataProvider.Provider value={useData()}>
            {children}
        </DataProvider.Provider>
    );
};

export default DataContext;