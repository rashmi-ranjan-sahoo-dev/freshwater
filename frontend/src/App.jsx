
import React from 'react'

import { Routes, Route } from 'react-router-dom'
import AppLayout from './AppLayout/AppLayout.jsx'
import Home from './pages/Home/Home.jsx'
import AboutUs from './pages/AboutUs/AboutUs.jsx'
import Blogs from './pages/Blogs/Blogs.jsx'
import ContactUs from './pages/ContactUs/ContactUs.jsx'

const App = () => {
  return (
    <>
     <Routes>
       <Route element = {<AppLayout/>}>
         <Route index element = {<Home/>}/>
         <Route path='/about' element={<AboutUs/>}/>
         <Route path='/blog' element={<Blogs/>}/>
         <Route path='/contact' element={<ContactUs/>}/>
       </Route>
     </Routes>
    </>
  )
}

export default App
