import React from 'react'
import { IoMdSearch, IoIosMenu, IoIosPin  } from "react-icons/io";
import { TfiAnnouncement } from "react-icons/tfi";
import { IoChatboxOutline } from "react-icons/io5";

const Navbar = () => {
  return (
    <div className='container-navbarHome'>
      <div className="col-navbar">
        <img src="../../client/assets/UbuyLogo2.png" alt="" width={100}/>
        <div className='search-bar'>
          <input type="text" placeholder='Procurar'/>
          <IoMdSearch className='search-icon'/>
        </div>
        <IoIosMenu className='menu-icon'/>
        <div className="localizacao">
          <IoIosPin className='local-icon' />
          <span>Unifoa - Centro Universitário de Volta Redonda</span>
        </div>
      </div>
      <div className="col-navbar">
        <div className="anuncios">
          <TfiAnnouncement className='anuncio-icon'/>
          <span>Meus anuncios</span>
        </div>
        <div className="chat">
          <IoChatboxOutline className='chat-icon'/>
          <span>Chat</span>
        </div>
        <button className="anunciar">
          Anunciar
        </button>
        <button className='entrar'>
          Entrar
        </button>
      </div>
      {/* Se tiver entrar na conta isso vai mudar para um simbolo de conta */}
    </div>
  )
}

export default Navbar