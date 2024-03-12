import React from 'react'
import Main from './components/layout/main'
import { Route, Routes } from 'react-router-dom'
import HomeRestaurant from './components/layout/homeRestaurant/homeRestaurant'

const App = () => {
  return (
    <Routes>
      <Route path='/' Component={Main} />
      <Route path='/home' Component={HomeRestaurant} />
    </Routes>
  )
}

export default App