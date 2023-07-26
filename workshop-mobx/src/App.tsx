import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SkinPage from './pages/SkinPage'


const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SkinPage/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
