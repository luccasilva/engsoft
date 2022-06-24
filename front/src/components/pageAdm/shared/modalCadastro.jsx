import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Alert from "../../testes/shared/alert";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { cadastro } from '../../../services/admService';
import Notification from '../../testes/shared/notification';
import Success from '../../testes/shared/success';

export default (props) => {

  const [errorCatch, setError] = useState(false);
  const [sucesso, setSucesso] = useState(false);

  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
      setSucesso(false);
      setError(false);
      try {
          const response = await cadastro(data);
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
          Adicionar um Novo Cliente
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>

      {errorCatch && <Notification titulo="Erro!" />}

        <h6>
          Gostaria de adicionar um novo cliente?
        </h6>

        <form onSubmit={handleSubmit(onSubmit)}>

          <div className="modalForm">

            <input type="text" name="nome" minlength="4" maxlength="100" placeholder='Digite o Nome do Cliente' {...register("nome", { required: (true) })} />
            <select name="modalidade" {...register("modalidade", { required: true })}>
              <option value="Online" selected>Online</option>
              <option value="Semi-Presencial">Semi-Presencial</option>
              <option value="Presencial">Presencial</option>
            </select>

            <Button className="modalBut" variant="success" type="submit" >Adicionar</Button>
            <Button variant="danger" onClick={props.onHide}>Cancelar</Button>

          </div>
        </form>


      </Modal.Body>
      <Modal.Footer>
        <span>{errors.nome && <Alert titulo="Preencha um nome válido!"></Alert>}</span>
      </Modal.Footer>
    </Modal>
  );
}