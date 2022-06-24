import ClientNavbar from "../shared/clientNavbar";
import { Link, useParams } from "react-router-dom";
import SideBar from "../shared/sideBar";
import Button from 'react-bootstrap/Button'
import Alert from "../testes/shared/alert";
import React, { useState, useEffect } from 'react';
import { resultados } from '../../services/admService';
import ModalApagar from "./shared/modalApagar";
import { atualizar } from "../../services/testeService";
import Notification from "../testes/shared/notification";
import Success from "../testes/shared/success";


import { useForm } from "react-hook-form";

export default (props) => {

    let params = useParams();

    const [nome, setNome] = useState(["null"]);
    const [data, setData] = useState(["null"]);
    const [error401, setError] = useState(false);
    const [feitoEm, setFeito] = useState("null");

    const [confirmModal, setconfirmModal] = useState(false);
    const [CancelarShow, setCancelarShow] = useState(false);
    const [CancelarModal, setCancelarModal] = useState(false);

    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const onCancelar = data => {
        setCancelarShow(true);
    };

    const onSubmit = async dataForm => {
        setconfirmModal(false);
        try {
            setconfirmModal(true);
            const response = await atualizar(params.usuarioId, 3, dataForm);
            setNome(dataForm.nome);
        }
        catch (error) {
            setError(true);
        }
    };

    useEffect(() => {
        reset(data);
        setNome(data.nome)
    }, [data]);

    useEffect(async () => {
        const resultado = await resultados(params.usuarioId, 3);
        const result = resultado.data;
        setNome(result.nome);
        setData(result.provas[0].resultado)


        const meses = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"];
        let feito = new Date((result.provas[0].updatedAt));
        let dataFormatada = ((feito.getDate() + "/" + meses[(feito.getMonth())] + "/" + feito.getFullYear() + " às " + feito.getHours() + ":" + feito.getMinutes()));

        setFeito(dataFormatada)

    }, []);

    return (
        <div>

            {error401 && <Notification titulo="Erro ao atualizar esse formulario!" />}
            {confirmModal && <Success titulo="Formulário atualizado!" />}

            <ModalApagar
                show={CancelarShow}
                confirm={setCancelarModal}
                usuario={params.usuarioId}
                testeId="3"
                nome={data.nome}
                teste="FICHA"
                onHide={() => setCancelarShow(false)}
            />

            <ClientNavbar titulo="Olá!"> </ClientNavbar>
            <div className="admContent">
                <div className="admSideBar">
                    <SideBar></SideBar>
                </div>
                <div className="admTable">
                    <div className="admHead">
                        <h2>Cadastro de {nome}</h2>
                    </div>
                    <div className="dataHead">
                        <h6 >Respondido em {feitoEm}</h6>
                    </div>
                    <form className="fichaSize" onSubmit={handleSubmit(onSubmit)}>

                        <h6>Nome Completo:</h6>
                        <input type="text" placeholder="Digite seu nome" defaultValue={data.nome}  {...register("nome", { required: (true) })} />

                        <h6>Data de Nascimento:</h6>
                        <input type="date" defaultValue={data.nascimento} {...register("nascimento", { required: (true) })} />

                        <h6>Naturalidade:</h6>
                        <input type="text" defaultValue={data.naturalidade} placeholder="Digite sua naturalidade"  {...register("naturalidade", { required: (true) })} />

                        <h6>Nome do Pai:</h6>
                        <input type="text" defaultValue={data.pai} placeholder="Digite o nome do seu pai"  {...register("pai", { required: (true) })} />

                        <h6>Nome da Mãe:</h6>
                        <input type="text" defaultValue={data.mae} placeholder="Digite o nome da sua mãe"  {...register("mae", { required: (true) })} />

                        <h6>Endereço:</h6>
                        <input type="text" defaultValue={data.endereco} placeholder="Digite seu endereço"  {...register("endereco", { required: (true) })} />

                        <h6>Escola:</h6>
                        <input type="text" defaultValue={data.escola} placeholder="Digite sua escola"  {...register("escola", { required: (true) })} />

                        <h6>Série:</h6>
                        <input type="text" defaultValue={data.serie} placeholder="Digite sua série atual"  {...register("serie", { required: (true) })} />

                        <h6>E-mail:</h6>
                        <input type="email" defaultValue={data.email} placeholder="Digite seu e-mail"  {...register("email", { required: (true) })} />

                        <h6>Celular:</h6>
                        <input type="text" defaultValue={data.celular} placeholder="Digite seu celular"  {...register("celular", { required: (true) })} />

                        <h6>Outro Telefone para Contato:</h6>
                        <input type="text" defaultValue={data.telefone} placeholder="Digite seu telefone"  {...register("telefone", { required: (true) })} />

                        <h6>Indicação:</h6>
                        <input type="text" defaultValue={data.indicacao} placeholder="Teve alguma indicação?"  {...register("indicacao")} />

                        <span>{errors.nome && errors.nascimento && errors.naturalidade && errors.pai && errors.mae && errors.endereco && errors.escola && errors.serie && errors.email && errors.celular && errors.telefone && <Alert titulo="Preencha todos os campos!"></Alert>}</span>

                        <br></br>

                        <button className="btn-login" type="submit">Atualizar Respostas</button>
                        <div>
                            <Button className="apagarResBut" variant="danger" onClick={onCancelar}>Apagar Resposta</Button>
                        </div>
                    </form>
                    <br></br>

                </div>
            </div>
        </div >
    );
}