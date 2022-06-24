import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

import React, { useState } from "react";
import Notification from '../../testes/shared/notification';
import Success from '../../testes/shared/success';
import { aplicar } from "../../../services/admService";

export default (props) => {

  const [errorCatch, setError] = useState(false);
  const [sucesso, setSucesso] = useState(false);

  const onSubmit = async () => {
      setSucesso(false);
      setError(false);
      try {
          const response = await aplicar(props.usuario,props.testeId);
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
          Enviar Teste
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>

      {errorCatch && <Notification titulo="Erro!" />}

        <h6>
          <br></br>
          Gostaria de enviar <strong>{props.teste}</strong> para <strong>{props.nome}</strong> ?
        </h6>
          <br></br>

      </Modal.Body>
      <Modal.Footer>
            <Button className="modalBut" variant="success" type="submit" onClick={onSubmit} >Enviar</Button>
            <Button variant="danger" onClick={props.onHide}>Cancelar</Button>
      </Modal.Footer>
    </Modal>
  );
}