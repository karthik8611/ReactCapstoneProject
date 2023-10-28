import {Routes, Route, Link} from 'react-router-dom'
import RegisterPage from './pages/RegisterPage'
import React from 'react'
const App=()=> {

  return (
    <>
    <Routes>
        <Route path='/' element={<RegisterPage/>}/>
    </Routes>
    </>
  )
}

export default App

