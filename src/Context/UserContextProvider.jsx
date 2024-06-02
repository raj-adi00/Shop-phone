import React, { useEffect, useState } from "react";
import UserContext from "./UserContext";


const UserContextProvider = ({ children }) => {
    const [user, setUser] = React.useState(null)
    const [pass, setpass] = useState(null);
    const [currentopen, setcurrentopen] = useState(null)
    useEffect(() => {
        setUser(localStorage.getItem("user"))
        setpass(localStorage.getItem("password"))
    }, [])
    // useEffect(() => {
    //     // console.log(currentopen)
    //     if (currentopen != null) {
    //         document.addEventListener('click', (e) => {
    //             console.log(e.target)
    //             if (e.currentTarget == currentopen) {
    //                 currentopen.querySelector(".fulldescription").style.transform = 'scale(1)'
    //                 setcurrentopen(null)
    //             }
    //         })
    //     }
    // }, [currentopen])
    return (
        <UserContext.Provider value={{ user, setUser, pass, setpass, currentopen, setcurrentopen }}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider