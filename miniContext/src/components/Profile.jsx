import React, { useContext } from 'react'
import UserContet from '../context/UserContext'

function Profile() {
    const { user } = useContext(UserContet);

  if (!user) {
        return <div>Pease login</div>
    }
    return <div>Welcome { user.userName}</div>
    
 
}

export default Profile