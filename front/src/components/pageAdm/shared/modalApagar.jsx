import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

import React, { useState } from "react";
import Notification from '../../testes/shared/notification';
import Success from '../../testes/shared/success';
import { cancelar } from "../../../services/admService";
import { set } from 'react-hook-form';
import { Navigate } from "react-router-dom";

export default (props) => {

  const [errorCatch, setError] = useState(false);
  const [sucesso, setSucesso] = useState(false);

  const onSubmit = async () => {
      setSucesso(false);
      setError(false);
      try {
          const response = await cancelar(props.usuario,props.testeId);
          setSucesso(true);
          props.onHide();
          props.confirm(true);
      }
      catch (error) {
          setError(true);
      }
      setSucesso(true);
  };

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter">
          Apagar Teste
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>

      {sucesso && <Navigate to="/dashboard" />}

      {errorCatch && <Notification titulo="Erro!" />}

        <h6>
          <br></br>
          Gostaria de apagar <strong>{props.teste}</strong> de <strong>{props.nome}</strong> ? 
          <br></br>
          <br></br>
          Se prosseguir todas as respostas serão perdidas e o teste deverá ser enviado novamente!
        </h6>
          <br></br>

      </Modal.Body>
      <Modal.Footer>
            <Button className="modalBut" variant="danger" type="submit" onClick={onSubmit} >Sim, Gostaria de Apagar as Respostas</Button>
            <Button variant="success" onClick={props.onHide}>Manter</Button>
      </Modal.Footer>
    </Modal>
  );
}