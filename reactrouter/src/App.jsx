import React from 'react'
import Header from './components/Header/header'
import Footer from './components/Footer/footer'
import { Outlet } from 'react-router-dom'

function App() {
  return (
      <>
          <Header />
          <Outlet /> 
          <Footer />
       {/* Wherever you are usingg outlet that thing will change other will reamin constant */}

      
      </>
  )
}

export default App