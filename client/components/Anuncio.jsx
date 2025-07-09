import React from 'react'

const Anuncio = () => {
  return (
    <div className='anuncio-container'>
        <img src="" alt="" />
        <div className="content">
            <span className="preco-anuncio">
                R$25,00
            </span>
            <span className="nome-anuncio">
                Livros blablabla
            </span>
        </div>
        <footer className="footer-anuncio">
            Bairro, Cidade
        </footer>
    </div>
  )
}

export default Anuncio