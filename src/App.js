import React, { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import './css/common.scss'
import Header from './components/Header'
import Main from './components/Main'
import SubPageBanner from './components/SubPageBanner'
import About from './components/About'





const App = () => {
  useEffect(() => {
    window.onbeforeunload = function pushRefresh() {
      window.scrollTo(0, 0);
    };

  }, []);
  return (
    <div className="wrap">
      <Header />

      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/:id' element={<SubPageBanner />} />
        <Route path='/about' element={<About />} />
      </Routes>

    </div>
  )
}

export default App