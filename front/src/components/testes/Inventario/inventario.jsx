import ClientNavbar from "../../shared/clientNavbar";
import IntroSection from '../../shared/introSection';
import Instructions from "./instructionsII";
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

export default function II() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  
  const [ error401, setError ] = useState(false);
  const [ redirect, setRedirect ] = useState(false);
  const onSubmit = async data => {
    try {
      const response = await responder(5, data);
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

        <ClientNavbar titulo="INVINT"> </ClientNavbar>

        <IntroSection>
            <Instructions></Instructions>
        </IntroSection> 

        <Inicioquest></Inicioquest>

      <form className="formsize" onSubmit={handleSubmit(onSubmit)}>

      <Table striped>

      <thead><tr><th>1</th><th>{errors.q1a && errors.q1b && errors.q1c && <Alert titulo="Questão 1 não respondida"></Alert>}</th><th></th></tr></thead><tbody><tr><td>A</td><td> Estudar sobre invenções no campo da eletricidade.</td><td><input type="checkbox" name="q1a" {...register("q1a", {disabled:(watch("q1c")===true), required:(((watch("q1b")===false) || (watch("q1c")===false)))})}/></td></tr>
      <tr><td>B</td><td> Aprender sobre física nuclear.</td><td><input type="checkbox" name="q1b" {...register("q1b", {disabled:(watch("q1c")===true), required:(((watch("q1a")===false) || (watch("q1c")===false)))})}/></td></tr>
      <tr><td>C</td><td> Nenhuma das opções.</td><td><input type="checkbox" name="q1c" {...register("q1c", {disabled:((watch("q1a")===true)||(watch("q1b")===true)), required:(((watch("q1a")===false) || (watch("q1b")===false)))})}/></td></tr></tbody> <br></br>

      </Table>          
      
        <button className="btn-login" type="submit">Enviar</button>
            
    </form>
            <Fimquest></Fimquest>
      </div>
      
    );
  }