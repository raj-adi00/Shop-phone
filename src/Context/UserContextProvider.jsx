import React, { useState } from "react";
import UserContext from "./UserContext";


const UserContextProvider = ({ children }) => {
    const [user, setUser] = React.useState(null)
    const [pass,setpass]=useState(null);
    return (
        <UserContext.Provider value={{ user, setUser,pass,setpass }}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider