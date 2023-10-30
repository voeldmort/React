import './App.css'
import Card from './components/Cards'

function App() {
//  let myAccount = {
//     username: "Ranavijay",
//     age:21
//  }
//   let newArray = [1,2, 3];
  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Talwind Test</h1>
      {/* <Card userName="Ranavijay" myObj={myAccount} /> */}
      <Card userName="User 1" btnText="Click Me"/>

      {/* We can't directly pass the object here we have to pass it into a variable */}
      {/* <Card userName="Simran" someArray={newArray} /> */}
      <Card userName="User 2" />
      

    </>
  )
}

export default App
