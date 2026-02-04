import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Layout from './componet/Layout'

import Home from './pages/Home'
import Service from './pages/Service'
import Web from './pages/services/Web'
import Uiux from './pages/services/Uiux'
import Mobile from './pages/services/Mobile'
import About from './pages/About'

const App = () => {
  return (
    <div>
      <Routes>
        <Route element={<Layout />}>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path="/services" element={<Service />}>
            <Route path="web" element={<Web />} />
            <Route path="mobile" element={<Mobile />} />
            <Route path="uiux" element={<Uiux />} />
          </Route>
        </Route>
      </Routes>




    </div>
  )
}

export default App