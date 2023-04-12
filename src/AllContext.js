import React,{useState,createContext} from 'react';

// context
export const AllContext = createContext();

const AllContextPlug = ({children}) =>{
    const [search, setSearch] = useState(false);

    const value={
        search,
        setSearch
    }
    return(
        <AllContext.Provider value={value}>
            {children}
        </AllContext.Provider>
    )
}
export default AllContextPlug