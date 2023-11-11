import './App.css'
import UserContextProvider from './context/UserContextProvider'
import Login from './components/Login'
import Profile from './components/Profile'





function App() {
  return (
    <UserContextProvider>
      <Login />
      <Profile />
      {/* Here whatever componet we take it will have access */}
    </UserContextProvider>
  )
}

export default App 
