import ClientNavbar from "../../shared/clientNavbar";
import IntroSection from '../../shared/introSection';
import Instructions from "./instructionsAPPG";
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

export default function APPG() {

  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  
  const [ error401, setError ] = useState(false);
  const [ redirect, setRedirect ] = useState(false);
  const onSubmit = async data => {
    try {
      const response = await responder(2, data);
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

        <ClientNavbar titulo="Formulário APPG"> </ClientNavbar>

        <IntroSection>
            <Instructions></Instructions>
        </IntroSection> 

        <Inicioquest></Inicioquest>

      <form className="formsize" onSubmit={handleSubmit(onSubmit)}>
      <Table striped>

        <thead><tr><th>1</th>
        <th>{errors.q1 && <Alert titulo="Questão 1 não respondida"></Alert>}</th>
        <th></th></tr></thead>

          <tbody>
              <tr><td>A</td>
              <td>Gosto de fazer um trabalho bem feito</td>
              <td><input type="radio" name="q1" value="a" {...register("q1", {required:(true)})}/></td></tr>

              <tr><td>B</td>
              <td>Gosto de movimentar-me</td>
              <td><input type="radio" name="q1" value="b" {...register("q1", {required:(true)})}/></td></tr>
          </tbody>
          
          <br></br>

        </Table>          
        <button className="btn-login" type="submit">Enviar</button>
            
    </form>
            <Fimquest></Fimquest>
      </div>
      
    );
  }