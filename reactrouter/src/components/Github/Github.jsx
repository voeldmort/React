import { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
   const data =  useLoaderData()
    // const [data, setData] = useState([]);
    // useEffect(() => {
       
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log(data)
    //             setData(data);           
    //         })
    // },[])
// useEffect loads when Component loads
    return (
      <>
      
            <div className='m-20  bg-gray-600 text-white text-3'>
                <div className="flex justify-center items-center p-2">
                  <img src={data.avatar_url} width={300} alt="Github Profile Picture" />
                </div>
          <div className='text-center m-4 text-3xl'>Github Username: {data.login} </div>
          <div className='text-center m-4 text-3xl'>Name: {data.name}</div>
          <div className=' text-center m-4 text-3xl'>Github Followes: {data.followers}</div>
         
      </div>
      </>
  )
}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/voeldmort');
    return response.json();
}