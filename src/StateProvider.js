import React, {createContext, useContext, useReducer} from "react";

//Prepare data layer
export const StateContext = createContext();

//wrap app and prodvide data layer
export const StateProvider = ({reducer, initialState, children}) => (
<StateContext.Provider value ={useReducer(reducer, initialState)}>
    {children}
</StateContext.Provider>
);

//Pull info from data layer
export const useStateValue = () => useContext(StateContext);