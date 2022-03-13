import React, { FC } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import NotFound from './pages/NotFound'
import VerticalNav from './components/VerticalNav'
import HorizontalNav from './components/HorizontalNav'

const App: FC = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={
          <>
            <VerticalNav />
            <HorizontalNav />
            <Home />
          </>

          }/>
          <Route path="/user/:id" element={
          <>
            <VerticalNav />
            <HorizontalNav />
            <Dashboard />
          </>

          } />
          <Route path="*" element={
          <>
            <VerticalNav />
            <HorizontalNav />
            <NotFound />
          </>

          } />
        </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App
