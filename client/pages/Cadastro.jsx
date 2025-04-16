import React, { useState } from 'react';

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import MaskedInput from "react-text-mask";
import { useForm, Controller } from 'react-hook-form';
import LoginNavbar from '../components/loginNavbar';

const Cadastro = () => {
  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  console.log(watch('example'));

  const [selectedDate, setSelectedDate] = useState(null);

  const maxDate = new Date();
  maxDate.setFullYear(maxDate.getFullYear() - 17);

  return (
    <div className="cadastro-page">
      <LoginNavbar />
      <div className="cadastro-container">
        <div className="form-container">
          <img src="../../client/assets/UbuyLogo2.png" alt="" width={150} />
          <span className="title-logo">Olá, crie sua conta no Ubuy</span>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="row">
              <div className="col">
                <div className="input">
                  <span className="title-input">Nome completo:</span>
                  <input
                    {...register('nome', { required: true })}
                    placeholder="Insira seu nome completo"
                  />
                </div>
                <div className="input">
                  <span className="title-input">E-mail:</span>
                  <input
                    {...register('email', { required: true })}
                    placeholder="Insira seu e-mail universitário"
                  />
                </div>
                <div className="input">
                  <span className="title-input">Senha:</span>
                  <input
                    type="password"
                    {...register('senha', { required: true })}
                    placeholder="Insira sua senha"
                  />
                </div>
              </div>
              <div className="col">
                <div className="input">
                  <span className="title-input">Instituição:</span>
                  <select
                    {...register('instituicao')}
                    placeholder="Selecione sua instituição"
                  >
                    <option value="instituicao" disabled>
                      Selecione sua instituição
                    </option>
                    <option value="unifesp">Unifesp</option>
                    <option value="unifal">Unifal</option>
                    <option value="ufscar">UFSCar</option>
                    <option value="ufmg">UFMG</option>
                    <option value="ufrj">UFRJ</option>
                    <option value="ufpr">UFPR</option>
                  </select>
                </div>
                <div className="date-sexo">
                  <div className="input">
                    <span className="title-input">Data de nascimento:</span>
                    <DatePicker
                      id="dob"
                      selected={selectedDate}
                      onChange={(date) => setSelectedDate(date)}
                      dateFormat="dd/MM/yyyy"
                      maxDate={maxDate}
                      showYearDropdown
                      scrollableYearDropdown
                      placeholderText="Selecione sua data de nascimento"
                    />
                  </div>
                  <div className="input">
                    <span className="title-input">Sexo:</span>
                    <select
                      {...register('instituicao')}
                      placeholder="Selecione sua instituição"
                    >
                      <option value="instituicao" disabled>
                        Selecione seu sexo
                      </option>
                      <option value="feminimo">Feminino</option>
                      <option value="masculino">Masculino</option>
                    </select>
                  </div>
                </div>
                <div className="input">
                  <span className="title-input">CPF:</span>
                  <Controller
                    name="cpf"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                      <MaskedInput
                      {...field}
                      mask={[
                        /\d/, /\d/, /\d/, ".", /\d/, /\d/, /\d/, ".", /\d/, /\d/, /\d/, "-", /\d/, /\d/,
                      ]}
                      placeholder="Digite seu CPF"
                      className="input"
                      />
                    )}
                    rules={{
                      required: 'O CPF é obrigatório',
                      pattern: {
                        value: /^\d{3}\.\d{3}\.\d{3}-\d{2}$/,
                        message: 'Formato de CPF inválido',
                      },
                    }}
                  />
                </div>
              </div>
            </div>
            <button type="submit">Cadastrar</button>
            <span className='click'>
              Já possui cadastro? <a href="/login">Clique aqui</a> para entrar
            </span>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Cadastro;
