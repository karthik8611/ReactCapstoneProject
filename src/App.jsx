import {Routes, Route, Link} from 'react-router-dom'
import RegisterPage from './pages/RegisterPage'
import Genre from './pages/Genre'
import React from 'react'
const App=()=> {

  return (
    <>
    <Routes>
        <Route path='/' element={<RegisterPage/>}/>
        <Route path="/genre" element={<Genre/>}/>
    </Routes>
    </>
  )
}

export default App

