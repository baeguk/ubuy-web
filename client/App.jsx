import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import Login from './pages/Login'
import Cadastro from './pages/Cadastro'

import "./styles/styles.scss"
import Home from './pages/Home'

function App() {

  return (
    <>
      <BrowserRouter>
          <div className="container">
            <Routes>
              <Route path='/login' element={<Login />} />
              <Route path='/cadastro' element={<Cadastro />} />
              <Route path='/home' element={<Home />} />
            </Routes>
          </div>
      </BrowserRouter>
    </>
  )
}

export default App
