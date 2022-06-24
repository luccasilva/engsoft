import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

import React, { useState } from "react";
import Notification from '../../testes/shared/notification';
import Success from '../../testes/shared/success';
import { cancelar } from "../../../services/admService";

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
          Cancelar Teste
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>

      {errorCatch && <Notification titulo="Erro!" />}

        <h6>
          <br></br>
          Gostaria de cancelar <strong>{props.teste}</strong> para <strong>{props.nome}</strong> ?
        </h6>
          <br></br>

      </Modal.Body>
      <Modal.Footer>
            <Button className="modalBut" variant="danger" type="submit" onClick={onSubmit} >Cancelar Envio</Button>
            <Button variant="success" onClick={props.onHide}>Manter</Button>
      </Modal.Footer>
    </Modal>
  );
}