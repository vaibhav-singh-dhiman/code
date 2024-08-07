import React, { createContext, useContext } from 'react';
import Deals from '../../assets/Deals'; // Adjust the path as necessary

// Create the DealContext
const DealContext = createContext(Deals);

// Create a provider component
const DealProvider = ({ children }) => {
    return (
        <DealContext.Provider value={Deals}>
            {children}
        </DealContext.Provider>
    );
};

// Custom hook to use the DealContext
const useDeals = () => {
    return useContext(DealContext);
};

export { DealProvider, useDeals };
