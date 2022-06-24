import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

import React, { useState, useEffect } from 'react';
import Notification from '../../testes/shared/notification';
import { verCurso } from '../../../services/cursoService';
import { useForm } from "react-hook-form";
import Alert from '../../testes/shared/alert';
import { atualizarCurso } from '../../../services/cursoService';
import { apagarCurso } from '../../../services/cursoService';
import { MdDeleteForever } from "react-icons/md";

export default (props) => {

  const [nome, setNome] = useState(["null"]);
  const [dados, setDados] = useState(["null"]);
  const [confirmModal, setconfirmModal] = useState(false);
  const [errorCatch, setError] = useState(false);
  const [sucesso, setSucesso] = useState(false);

  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const deleteCurso = async dataForm => {
    try {
      const response = await apagarCurso(props.cursoId);
      setSucesso(true);
      props.onHide();
      props.delete(true);
    }
    catch (error) {
      setError(true);
    }
  };

  const onSubmit = async dataForm => {
    setSucesso(false);
    setError(false);
    setconfirmModal(false);
    try {
      const response = await atualizarCurso(props.cursoId, dataForm);
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
          Editar Curso
          <Button className="modalButApagar" onClick={deleteCurso} > <MdDeleteForever className='apagarIconModal'/></Button>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>

        {errorCatch && <Notification titulo="Erro!" />}

        <h6>
          <br></br>
          Gostaria de editar <strong>{props.cursoNome} </strong> ?
        </h6>
        <br></br>
        <form className="fichaSize" onSubmit={handleSubmit(onSubmit)}>

          <h6>Nome da Profissão:</h6>
          <input type="text" placeholder="Digite o nome" defaultValue={props.cursoNome}  {...register("nome", { required: (true) })} />

          <h6>Site:</h6>
          <input type="text" defaultValue={props.cursoSite}  placeholder="Digite o Site" {...register("site", { required: (true) })} />

          <h6>Descricão:</h6>
          <div className='textAreaForm'>
            <textarea type="text" defaultValue={props.cursoDesc} placeholder="Digite a Descricao"  {...register("descricao", { required: (true) })} />
          </div>
          <span>{errors.nome && errors.site && errors.descricao && <Alert titulo="Preencha todos os campos!"></Alert>}</span>

          <br></br>

          <button className="btn-login" type="submit">Atualizar Profissão</button>
          <div>
          </div>
        </form>

      </Modal.Body>
      <Modal.Footer>
        
        <Button variant="danger" onClick={props.onHide}>Cancelar</Button>
      </Modal.Footer>
    </Modal>
  );
}