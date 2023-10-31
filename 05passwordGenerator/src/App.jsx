import { useState,useCallback,useEffect,useRef } from 'react';


function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("")
  
  //useRef Hook
  const passwordRef = useRef(null);


  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJLMNOPQRSTUVWXYYZ";
    if (numberAllowed) str += "0123456789"
    if (charAllowed) str += "!@#$%^&*-_+={}[]~`"
    
    for (let i = 0; i < length; i++) {
      pass += str[Math.floor(Math.random() * str.length)];
    }
    setPassword(pass);
    
  }, [length, numberAllowed, charAllowed, setPassword])
  
  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 50); //For Range selection;
   window.navigator.clipboard.writeText(password);


 },[ password ]) 

 

  
  useEffect(() => {
    passwordGenerator();
   }, [length,numberAllowed,charAllowed,passwordGenerator]);
  return (
    <>
      <h1>Password Generator</h1>
      <div className='w-full max-w-md max-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-500 '>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input type="text"
            value={password}
            className='outline-none w-full py-1 px-3'
            placeholder='Password'
            readOnly
            ref={passwordRef}
          />
          <button className='outline-none bg-blue-700 text-white px-3 p-0.5 shrink-0'
          onClick={copyPasswordToClipboard}
          >Copy</button>
        </div>
        <div>
          <div> 
            <input type="range"
              min={8}
              max={50}
              value={length}
              className='cursor-pointer'
            onChange={(event)=>setLength(event.target.value)}/>
            <label htmlFor="">Length: {length }</label>
          </div>
          <div>
            <input type="checkbox"
              defaultChecked={numberAllowed}
              id="numberInput"
              onChange={()=>setNumberAllowed((prev)=>!prev)}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>
          <div>
            <input type="checkbox"
              defaultChecked={charAllowed}
              id="charInput"
              onChange={()=>setCharAllowed((prev)=>!prev)}
            />
            <label htmlFor="CharacterInput">Characters</label>
          </div>
        </div>
     </div>
    </>
  )
}

export default App
