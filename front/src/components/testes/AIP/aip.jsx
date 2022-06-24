import ClientNavbar from "../../shared/clientNavbar";
import IntroSection from '../../shared/introSection';
import Instructions from "./instructionsAIP";
import 'react-notifications/lib/notifications.css';

import Table from 'react-bootstrap/Table'
import Inicioquest from "../shared/inicioquest";
import Fimquest from "../shared/fimquest";
import Alert from "../shared/alert";
import aipData from './aip-data';

import { useForm } from "react-hook-form";
import React, { useState } from 'react';
import Notification from '../../testes/shared/notification';
import { Navigate } from "react-router-dom";
import { responder } from '../../../services/testeService';

export default function AIP() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  
  const [ error401, setError ] = useState(false);
  const [ redirect, setRedirect ] = useState(false);
  const onSubmit = async data => {
    try {
      const response = await responder(1, data);
      setRedirect(true);
    }
    catch (error) {
      setError(true);
    }
  };

    const mapping = aipData.map((value, key) => {
      if (value.id % 2 === 0) return <></>
      
      return (<><thead>
        <tr>
          <th>#</th>
          <th>{errors[`y${value.id + 1}`] && errors[`y${value.id}`] && errors[`t${value.id + 1}`] && errors[`t${value.id}`] && <Alert titulo={`Frases ${value.id} e ${value.id + 1} não respondidas`}></Alert>}</th>
          <th>Sim</th>
          <th>Talvez</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>{value.id}</td>
          <td>{value.frase}</td>
          <td><input type="checkbox" {...register(`y${value.id}`, { disabled: (watch(`t${value.id}`)===`t${value.id}`)||(watch(`t${value.id + 1}`)===`t${value.id + 1}`), required: (((watch(`y${value.id}`)!==`y${value.id}`) && (watch(`t${value.id}`)!==`t${value.id}`) && (watch(`y${value.id + 1}`)!==`y${value.id + 1}`) && (watch(`t${value.id + 1}`)!==`t${value.id + 1}`)))})} value={`y${value.id}`}/></td>
          <td><input type="checkbox" {...register(`t${value.id}`, { disabled: ((watch(`t${value.id + 1}`)===`t${value.id + 1}`)||(watch(`y${value.id}`)===`y${value.id}`)||(watch(`y${value.id + 1}`)===`y${value.id + 1}`)), required: (((watch(`y${value.id}`)!==`y${value.id}`) && (watch(`t${value.id}`)!==`t${value.id}`) && (watch(`y${value.id + 1}`)!==`y${value.id + 1}`) && (watch(`t${value.id + 1}`)!==`t${value.id + 1}`)))})} value={`t${value.id}`}/></td>
        </tr>

        <tr>
          <td>{aipData[key + 1].id}</td>
          <td>{aipData[key + 1].frase}</td>
          <td><input type="checkbox" {...register(`y${value.id + 1}`, { disabled: (watch(`t${value.id}`)===`t${value.id}`)||(watch(`t${value.id + 1}`)===`t${value.id + 1}`), required: (((watch(`y${value.id}`)!==`y${value.id}`) && (watch(`t${value.id}`)!==`t${value.id}`) && (watch(`y${value.id + 1}`)!==`y${value.id + 1}`) && (watch(`t${value.id + 1}`)!==`t${value.id + 1}`)))})} value={`y${value.id + 1}`}/></td>
          <td><input type="checkbox" {...register(`t${value.id + 1}`, { disabled: ((watch(`t${value.id}`)===`t${value.id}`)||(watch(`y${value.id}`)===`y${value.id}`)||(watch(`y${value.id + 1}`)===`y${value.id + 1}`)), required: (((watch(`y${value.id}`)!==`y${value.id}`) && (watch(`t${value.id}`)!==`t${value.id}`) && (watch(`y${value.id + 1}`)!==`y${value.id + 1}`) && (watch(`t${value.id + 1}`)!==`t${value.id + 1}`)))})} value={`t${value.id + 1}`}/></td>
        </tr>
      </tbody>
      
      <br></br></>)
    });
      
    return (
        <div>

        {error401 && <Notification titulo="Erro ao enviar esse formulario!" />}
        {redirect && <Navigate to="/testes" />}

        <ClientNavbar titulo="AIP"> </ClientNavbar>

          <IntroSection>
              <Instructions></Instructions>
          </IntroSection> 

        <Inicioquest></Inicioquest>

      <form className="formsize" onSubmit={handleSubmit(onSubmit)}>
      <Table striped>
        {mapping}
      </Table>          
        <button className="btn-login" type="submit">Enviar</button>
            
    </form>
            <Fimquest></Fimquest>
      </div>
      
    );
  }