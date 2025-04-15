import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import Login from './pages/Login'

import "./styles/styles.scss"

function App() {

  return (
    <>
      <BrowserRouter>
          <div className="container">
            <Routes>
              <Route exact path='/login' element={<Login />} />
              <Route exact path='/cadastro' element={<Cadastro />} />
              <Route path='/home' element={<Home />} />
            </Routes>
          </div>
      </BrowserRouter>
    </>
  )
}

export default App
