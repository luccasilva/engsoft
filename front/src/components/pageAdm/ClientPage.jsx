import ClientNavbar from "../shared/clientNavbar";
import { Link, useParams } from "react-router-dom";
import SideBar from "../shared/sideBar";
import Button from 'react-bootstrap/Button'
import Alert from "../testes/shared/alert";
import React, { useState, useEffect } from 'react';
import { ver } from '../../services/admService';
import ModalDeletar from "./shared/modalDeletar";
import { arquivar } from "../../services/admService";
import Notification from "../testes/shared/notification";

export default (props) => {

    let params = useParams();

    const [nome, setNome] = useState(["null"]);
    const [data, setData] = useState(["null"]);
    const [error401, setError] = useState(false);

    const [confirmModal, setconfirmModal] = useState(false);

    const [DeletarShow, setDeletarShow] = useState(false);
    const [DeletarModal, setDeletarModal] = useState(false);


    useEffect(async () => {
        setconfirmModal(false);
        const resultado = await ver(params.usuarioId);
        const result = resultado.data;
        setNome(result.nome);
        setData(result)
    }, [nome, confirmModal]);

    function handleChange(value) {
        setDeletarShow(true);
    }

    let arquivarUser = async function () {
        try {
            setconfirmModal(true);
            const response = await arquivar(params.usuarioId, "arquivado");
        }
        catch (error) {
            setError(true);
        }
    };

    let ativarUser = async function () {
        try {
            setconfirmModal(true);
            const response = await arquivar(params.usuarioId, "ativo");
        }
        catch (error) {
            setError(true);
        }
    };

    return (
        <div>
            {error401 && <Notification titulo="Erro ao alterar!" />}

            <ClientNavbar titulo="Olá!"> </ClientNavbar>
            <div className="admContent">
                <div className="admSideBar">
                    <SideBar></SideBar>
                </div>
                <div className="admTable">
                    <div className="admHead">
                        <h2>Informações de {data.nome}</h2>
                    </div>

                    <ModalDeletar
                        show={DeletarShow}
                        confirm={setDeletarModal}
                        usuarioId={params.usuarioId}
                        nome={data.nome}
                        onHide={() => setDeletarShow(false)}
                    />
                    
                        <div className="ativarArquivar">
                            <h4>Cliente está {data.status}</h4>
                            <div className="ativarArquivarButs">
                                <Button className="modalBut" variant="primary" onClick={arquivarUser}>Arquivar</Button>
                                <Button className="modalBut" variant="success" onClick={ativarUser}>Ativar</Button>
                            </div>
                        </div>
                        <Button className="deleteUserBut" variant="danger" onClick={handleChange}>Deletar {data.nome}</Button>
                    <br></br>


                </div>
            </div>
        </div>
    );
}