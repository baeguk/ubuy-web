import React from 'react'
import Navbar from '../components/Navbar'
import Anuncio from '../components/Anuncio'
import imagem from '../assets/pexels-rdne-7092358.jpg'

const Home = () => {
  return (
    <div className='Home-page'>
      <Navbar />
      <div className="container">
        <header className="imagem">
          <img src={imagem} alt="" />
          <div className="logo">
            <img src="../../client/assets/UbuyLogo3.svg" alt=""/>
            <span>Compra e venda universitária</span>
          </div>
        </header>
        <div className="ad">
          ad
        </div>
        <div className="content">
          <Anuncio />
          <Anuncio />
          <Anuncio />
          <Anuncio />
          <Anuncio />
          <Anuncio />
          <Anuncio />
        </div>
      </div>
    </div>
  )
}

export default Home