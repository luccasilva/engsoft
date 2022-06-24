import ClientNavbar from "../../shared/clientNavbar";
import IntroSection from '../../shared/introSection';
import Instructions from "./instructionsSDS";
import 'react-notifications/lib/notifications.css';

import Alert from "../shared/alert";
import Table from 'react-bootstrap/Table'
import Inicioquest from "../shared/inicioquest";
import Fimquest from "../shared/fimquest";
import { useForm } from "react-hook-form";

import React, { useState } from 'react';
import Notification from '../../testes/shared/notification';
import { Navigate } from "react-router-dom";
import { responder } from '../../../services/testeService';

export default function SDS() {

  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  
  const [ error401, setError ] = useState(false);
  const [ redirect, setRedirect ] = useState(false);
  
  const onSubmit = async data => {
    try {
      const response = await responder(7, data);
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

      <ClientNavbar titulo="SDS"> </ClientNavbar>

      <IntroSection>
        <Instructions></Instructions>
      </IntroSection>

      <Inicioquest></Inicioquest>

      <form className="formsize" onSubmit={handleSubmit(onSubmit)}>
        <p></p>
        <Table striped className="exTableSDS">
          <thead>
            <tr><th>Responda SIM para as ATIVIDADES que você GOSTA ou GOSTARIA de fazer.</th><th>Sim</th></tr>
          </thead>
          <tbody>
            <tr><td> Consertar aparelhos elétricos. </td><td><input type="checkbox" name="R" value="a" {...register("R1.0")} /></td></tr>
            <tr><td> Fazer manutenção em carros, motos, etc. </td><td><input type="checkbox" name="R" value="b" {...register("R1.0")} /></td></tr>
            <tr><td> Consertar máquinas em geral. </td><td><input type="checkbox" name="R" value="c" {...register("R1.0")} /></td></tr>
          </tbody>
        </Table>
        <p></p>
        <Table striped className="exTableSDS2">
          <thead>
            <tr><th>Responda SIM para aquelas COMPETÊNCIAS que você SABE ou GOSTARIA de APRENDER.</th><th>Sim</th></tr>
          </thead>
          <tbody>
            <tr><td> Usar equipamentos tais como furadeira, máquina de costura, etc. </td><td><input type="checkbox" name="R" value="a" {...register("R2.0")} /></td></tr>
            <tr><td> Trocar pneus. </td><td><input type="checkbox" name="R" value="b" {...register("R2.0")} /></td></tr>
            <tr><td> Fazer reparos elétricos. </td><td><input type="checkbox" name="R" value="c" {...register("R2.0")} /></td></tr>
          </tbody>
        </Table>
        <p></p>
        <Table striped className="exTableSDS3">
          <thead>
            <tr><th>Responda SIM para as CARREIRAS que GOSTARIA de seguir.</th><th>Sim</th></tr>
          </thead>
          <tbody>
            <tr><td> Engenheiro Mecânico (projeto, fabricação e manutenção de máquinas e equipamentos). </td><td><input type="checkbox" name="R" value="a" {...register("R3.0")} /></td></tr>
            <tr><td> Bombeiro (resgate, prevenção e combate a incêndios). </td><td><input type="checkbox" name="R" value="b" {...register("R3.0")} /></td></tr>
            <tr><td> Fiscal de construção civil (inspecionar novas construções). </td><td><input type="checkbox" name="R" value="c" {...register("R3.0")} /></td></tr>
          </tbody>

        </Table>
        
        <Table striped className="exTableSDS4">
          <thead>
            <tr><th>Faça uma Autoavaliação e ESCOLHA uma NOTA (de 1 a 7), para as seguintes HABILIDADES:</th><th>Nota</th></tr>
          </thead>

          <tbody>

            <tr><td><strong>HABILIDADE MECÂNICA:</strong> Consertar coisa, usar ferramentas e máquinas.</td><td>
              <select name="select" {...register("MECANICA")}>
                <option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="" selected>-</option></select>
            </td></tr>

            <tr><td><strong>HABILIDADE CIENTÍFICA:</strong> Fazer pesquisas e experimentos em ciências.</td><td>
              <select name="select" {...register("CIENTIFICA")}>
                <option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="" selected>-</option></select>
            </td></tr>

            <tr><td><strong>HABILIDADE ARTÍSTICA:</strong> Pintar, desenhar, fazer esculturas, escrever poesias.</td><td>
              <select name="select" {...register("ARTISTICA")}>
                <option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="" selected>-</option></select>
            </td></tr>

            <tr><td><strong>HABILIDADE DE ENSINO:</strong> Ajudar as pessoas a aprender.</td><td>
              <select name="select" {...register("ENSINO")}>
                <option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="" selected>-</option></select>
            </td></tr>

            <tr><td><strong>HABILIDADE DE VENDAS:</strong> Vender ou supervisionar vendedores.</td><td>
              <select name="select" {...register("VENDAS")}>
                <option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="" selected>-</option></select>
            </td></tr>

          </tbody>
        </Table>

        <button className="btn-login" type="submit">Enviar</button>

      </form>
      <Fimquest></Fimquest>
    </div>

  );
}









