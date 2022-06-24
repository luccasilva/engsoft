import ClientNavbar from "../../shared/clientNavbar";
import IntroSection from '../../shared/introSection';
import Instructions from "./instructionsG36";
import 'react-notifications/lib/notifications.css';

import Inicioquest from "../shared/inicioquest";
import Fimquest from "../shared/fimquest";
import { useForm } from "react-hook-form";
import Alert from "../shared/alert";
import React, { useState } from 'react';
import Notification from '../../testes/shared/notification';
import { Navigate } from "react-router-dom";
import { responder } from '../../../services/testeService';

import imagem0 from "./G36-data/0.png"
import imagem1 from "./G36-data/1.png"
import imagem2 from "./G36-data/2.png"
import imagem3 from "./G36-data/3.png"
import imagem4 from "./G36-data/4.png"
import imagem5 from "./G36-data/5.png"


export default function G36() {

  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const [ error401, setError ] = useState(false);
  const [ redirect, setRedirect ] = useState(false);
  const onSubmit = async data => {
    try {
      const response = await responder(4, data);
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

        <ClientNavbar titulo="G-36"> </ClientNavbar>

        <IntroSection>
            <Instructions></Instructions>
        </IntroSection> 

        <Inicioquest></Inicioquest>

      <form className="formsize" onSubmit={handleSubmit(onSubmit)}>
      <div className="divisoria"><p></p></div>
        <div className="divG36">
        <h2>1</h2>
          <img className="imagemG36" alt="" src={imagem1}></img>
            <p>{errors.q1 && <Alert titulo="Questão não respondida!"></Alert>}</p>
            <div className="div2G36">
              <span>Resposta:</span>
                <select className="selectG36" {...register("q1", { required: ((watch("q1")!=="-"))})}>
                  <option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="" selected>-</option>
                </select>
            </div>
          </div>
      <div className="divisoria"><p></p></div>
        <div className="divG36">
        <h2>2</h2>
          <img className="imagemG36" alt="" src={imagem2}></img>
            <p>{errors.q2 && <Alert titulo="Questão não respondida!"></Alert>}</p>
            <div className="div2G36">
              <span>Resposta:</span>
                <select className="selectG36" {...register("q2", { required: ((watch("q2")!=="-"))})}>
                  <option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="" selected>-</option>
                </select>
            </div>
          </div>
      <div className="divisoria"><p></p></div>
        <div className="divG36">
        <h2>3</h2>
          <img className="imagemG36" alt=""  src={imagem3}></img>
            <p>{errors.q3 && <Alert titulo="Questão não respondida!"></Alert>}</p>
            <div className="div2G36">
              <span>Resposta:</span>
                <select className="selectG36" {...register("q3", { required: ((watch("q3")!=="-"))})}>
                  <option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="" selected>-</option>
                </select>
            </div>
          </div>
      <div className="divisoria"><p></p></div>
        <div className="divG36">
        <h2>4</h2>
          <img className="imagemG36" alt=""  src={imagem4}></img>
            <p>{errors.q4 && <Alert titulo="Questão não respondida!"></Alert>}</p>
            <div className="div2G36">
              <span>Resposta:</span>
                <select className="selectG36" {...register("q4", { required: ((watch("q4")!=="-"))})}>
                  <option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="" selected>-</option>
                </select>
            </div>
          </div>
      <div className="divisoria"><p></p></div>
        <div className="divG36">
        <h2>5</h2>
          <img className="imagemG36" alt=""  src={imagem5}></img>
            <p>{errors.q5 && <Alert titulo="Questão não respondida!"></Alert>}</p>
            <div className="div2G36">
              <span>Resposta:</span>
                <select className="selectG36" {...register("q5", { required: ((watch("q5")!=="-"))})}>
                  <option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="" selected>-</option>
                </select>
            </div>
          </div>
    
        <button className="btn-login" type="submit">Enviar</button>
            
    </form>
            <Fimquest></Fimquest>
      </div>
      
    );
  }