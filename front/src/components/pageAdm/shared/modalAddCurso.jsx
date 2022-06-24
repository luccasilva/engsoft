import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Alert from "../../testes/shared/alert";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Notification from '../../testes/shared/notification';
import Success from '../../testes/shared/success';
import { cadastrarCurso } from '../../../services/cursoService';

export default (props) => {

  const [errorCatch, setError] = useState(false);
  const [sucesso, setSucesso] = useState(false);

  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    setSucesso(false);
    setError(false);
    try {
      const response = await cadastrarCurso(data);
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
          Adicionar uma Nova Profissão
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>

        {errorCatch && <Notification titulo="Erro!" />}

        <h6>
          Gostaria de adicionar uma nova profissão?
        </h6>

        <form onSubmit={handleSubmit(onSubmit)}>

          <div className='modalForm2'>

            <input type="text" name="nome" minlength="4" maxlength="100" placeholder='Digite o Nome da Profissão' {...register("nome", { required: (true) })} />
            <input type="text" name="site" minlength="4" maxlength="100" placeholder='Digite o Site' {...register("site", { required: (true) })} />
            <textarea type="text" name="descricao" minlength="4" maxlength="100" placeholder='Digite a Descrição' {...register("descricao", { required: (true) })} />

            <div className='modalForm2But'>
              <Button variant="danger" onClick={props.onHide}>Cancelar</Button>
              <Button className="modalBut" variant="success" type="submit" >Adicionar</Button>
            </div>

          </div>
        </form>


      </Modal.Body>
      <Modal.Footer>
        <span>{errors.nome && errors.site && errors.descricao && <Alert titulo="Preencha todos os campos!"></Alert>}</span>
      </Modal.Footer>
    </Modal>
  );
}