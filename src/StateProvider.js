import React, { createContext,useReducer,useContext } from "react";

// Prepares DataLayer
export const StateContext = createContext ();

export const StateProvider =({reducer,initialState,children}) => (
    <StateContext.Provider value = { useReducer(reducer, initialState)
    }>
    {children}

    </StateContext.Provider>
)


// pull information from Data Layer
export const useStateValue= () => useContext(StateContext);





// fat arrow function execution context me as a function store hoga ya fir as a variable 