
import React from 'react'

import { Routes, Route } from 'react-router-dom'
import AppLayout from './AppLayout/AppLayout.jsx'
import Home from './pages/Home/Home.jsx'

const App = () => {
  return (
    <>
     <Routes>
       <Route element = {<AppLayout/>}>
         <Route index element = {<Home/>}/>
       </Route>
     </Routes>
    </>
  )
}

export default App
