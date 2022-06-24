import ClientNavbar from "../../shared/clientNavbar";
import IntroSection from '../../shared/introSection';
import Instructions from "./instructionsFicha";
import 'react-notifications/lib/notifications.css';

import Table from 'react-bootstrap/Table'
import Inicioquest from "../shared/inicioquest";
import Fimquest from "../shared/fimquest";
import { useForm } from "react-hook-form";
import Alert from "../shared/alert";

import React, { useState } from 'react';
import Notification from '../../testes/shared/notification';
import { Navigate } from "react-router-dom";
import { responder } from '../../../services/testeService';

export default function Ficha() {

  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  
  const [ error401, setError ] = useState(false);
  const [ redirect, setRedirect ] = useState(false);
  const onSubmit = async data => {
    try {
      const response = await responder(3, data);
      setRedirect(true);
    }
    catch (error) {
      setError(true);
    }
  };
      
    return (
      <div>

        {error401 && <Notification titulo="Erro ao enviar esse formulario!" />}
        {redirect && <Navigate to="/testes" />}

          <ClientNavbar titulo="Ficha de Cadastro"> </ClientNavbar>

          <IntroSection>
              <h2>Ficha de Cadastro</h2>
          </IntroSection> 

          <Inicioquest></Inicioquest>

        <form className="fichaSize" onSubmit={handleSubmit(onSubmit)}>

          <h6>Nome Completo:</h6>
          <input type="text" placeholder="Digite seu nome"  {...register("nome", {required:(true)})}/>

          <h6>Data de Nascimento:</h6>
          <input type="date"  {...register("nascimento", {required:(true)})}/>

          <h6>Naturalidade:</h6>
          <input type="text" placeholder="Digite sua naturalidade: Cidade e Estado de nascimento"  {...register("naturalidade", {required:(true)})}/>

          <h6>Nome do Pai:</h6>
          <input type="text" placeholder="Digite o nome do seu pai"  {...register("pai", {required:(true)})}/>

          <h6>Nome da Mãe:</h6>
          <input type="text" placeholder="Digite o nome da sua mãe"  {...register("mae", {required:(true)})}/>

          <h6>Endereço:</h6>
          <input type="text" placeholder="Digite seu endereço: Rua – Número – Apto - Bairro – Cidade – Estado"  {...register("endereco", {required:(true)})}/>

          <h6>Escola:</h6>
          <input type="text" placeholder="Digite sua escola"  {...register("escola", {required:(true)})}/>

          <h6>Série:</h6>
          <input type="text" placeholder="Digite sua série atual"  {...register("serie", {required:(true)})}/>

          <h6>E-mail:</h6>
          <input type="email" placeholder="Digite seu e-mail"  {...register("email", {required:(true)})}/>

          <h6>Celular:</h6>
          <input type="text" placeholder="Digite seu celular"  {...register("celular", {required:(true)})}/>

          <h6>Outro Telefone para Contato:</h6>
          <input type="text" placeholder="Digite outro telefone para contato"  {...register("telefone", {required:(true)})}/>

          <h6>Indicação:</h6>
          <input type="text" placeholder="Quem indicou o trabalho?"  {...register("indicacao")}/>

          <span>{errors.nome && errors.nascimento && errors.naturalidade && errors.pai && errors.mae && errors.endereco && errors.escola && errors.serie && errors.email && errors.celular && errors.telefone && <Alert titulo="Preencha todos os campos!"></Alert>}</span>

          <br></br>
        
          <button className="btn-login" type="submit">Enviar</button>
              
        </form>
        <Fimquest></Fimquest>
      </div>
      
    );
  }