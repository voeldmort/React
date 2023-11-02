import { Route } from 'react-router-dom'
import React, { Children } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import App from './App'
import About from './components/About/about'
import Home from './components/Home/home'
import Contact from './components/Contact/Conatct'
import User from './components/User/user'
import Github, {githubInfoLoader} from './components/Github/Github'


// 1st mwthod
// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <App />,
//     children: [
//       {
//         path: "",
//         element: <Home/>
//       },
//       {
//         path: "about",
//         element: <About />
//       },
//       {
//         path: "contact",
//         element: <Contact />
//       }
      
//     ]
//   }
// ]) 

// Seccond Method

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="/user/:userid" element={<User />} />
      <Route
        loader={githubInfoLoader}
        path="github"
        element={<Github />}
      />

     
      {/* Whetever Comes after : in Route tag this value is accessiable to the element ysing useParams Hooks */}
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
