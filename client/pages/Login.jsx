import React from 'react'
import LoginNavbar from '../components/loginNavbar'

import { useForm } from 'react-hook-form'

const Login = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => console.log(data)

  console.log(watch("example"))

  return (
    <div className='login-page'>
      <LoginNavbar />
      <div className="login-container">
        <div className='form-container'>
         <img src="../../client/assets/UbuyLogo2.png" alt="" width={150}/>
         <span className='title-logo'>Olá, acesse sua conta no Ubuy</span>
         <form onSubmit={handleSubmit(onSubmit)}>
            <div className="input">
              <span className='title-input'>E-mail:</span>
              <input {...register("email", { required: true })} placeholder='Insira seu e-mail universitário' />
            </div>
            <div className="input">
              <span className='title-input'>Senha:</span>
              <input type='password' {...register("senha", { required: true })} placeholder='Insira sua senha' />
            </div>
            <button type='submit'>Entrar</button>
            <span className='click'>Ainda não possui cadastro? <a href="/cadastro">Clique aqui</a> para cadastrar</span>
         </form>
        </div>
      </div>
    </div>
  )
}

export default Login