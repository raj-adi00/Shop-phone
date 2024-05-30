import React, { useEffect, useState } from "react";
import UserContext from "./UserContext";


const UserContextProvider = ({ children }) => {
    const [user, setUser] = React.useState(null)
    const [pass,setpass]=useState(null);
    useEffect(()=>{setUser(localStorage.getItem("user"))
        setpass(localStorage.getItem("password"))
    },[])
    return (
        <UserContext.Provider value={{ user, setUser,pass,setpass }}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider