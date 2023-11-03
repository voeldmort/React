import React, { useState, useContext } from 'react'
import UserContet from '../context/UserContext'

export default function Login() {




    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');


    const { setUser } = useContext(UserContet);


    const handleSubmit = (e) => {
        e.preventDefault();
        setUser({ userName, password });
    }
    //  data sending
  return (
      <div>
          <h2>Login</h2>
          <input type="text" value={userName} onChange={(e)=>setUserName(e.target.value)}  placeholder='Username' /> 
          <input type="text" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Password' />
          <button onClick={handleSubmit}> Submit</button>
          

            

     </div>
  )
    
}
