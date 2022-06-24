import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

import React, { useState } from "react";
import Notification from '../../testes/shared/notification';
import Success from '../../testes/shared/success';
import { deletarCliente } from "../../../services/admService";
import { Navigate } from "react-router-dom";

export default (props) => {

  const [errorCatch, setError] = useState(false);
  const [sucesso, setSucesso] = useState(false);
  const [redirect, setRedirect] = useState(false);

  const onSubmit = async () => {
      setSucesso(false);
      setError(false);
      try {
          const response = await deletarCliente(props.usuarioId);
          setSucesso(true);
          setRedirect(true);
          props.onHide();
          props.confirm(true);
      }
      catch (error) {
          setError(true);
      }
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
          Deletar Cliente
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>

      {redirect && <Navigate to="/dashboard" />}

      {errorCatch && <Notification titulo="Erro!" />}

        <h6>
          <br></br>
          Gostaria de deletar <strong>{props.nome}</strong> ?
          <br></br>
          <br></br>
          Ao deletar um cliente todos seus testes irão ser deletados também!
        </h6>
          <br></br>

      </Modal.Body>
      <Modal.Footer>
            <Button className="modalBut" variant="danger" type="submit" onClick={onSubmit} >Deletar</Button>
            <Button variant="success" onClick={props.onHide}>Manter</Button>
      </Modal.Footer>
    </Modal>
  );
}