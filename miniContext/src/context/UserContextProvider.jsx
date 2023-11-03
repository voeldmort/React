import React from 'react'
import UserContet from './UserContext'



const UserContextProvider = ({ children }) => {
    const [user, setUser] = React.useState(null);
    //  ou can fetch the data here 
    // Inside value we have passed the objects , whatever we want to give access to children component
    return (    
        <UserContet.Provider value={{user,setUser}}>
        {children}
        
        </UserContet.Provider>
    )
}
  
export default UserContextProvider