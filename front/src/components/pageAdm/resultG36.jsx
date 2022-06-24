import ClientNavbar from "../shared/clientNavbar";
import { Link, useParams } from "react-router-dom";
import SideBar from "../shared/sideBar";
import Button from 'react-bootstrap/Button'
import Alert from "../testes/shared/alert";
import React, { useState, useEffect } from 'react';
import { resultados } from '../../services/admService';
import ModalApagar from "./shared/modalApagar";


import { useForm } from "react-hook-form";

export default (props) => {

    let params = useParams();

    const [nome, setNome] = useState(["null"]);
    const [data, setData] = useState(["null"]);

    const [CancelarShow, setCancelarShow] = useState(false);
    const [CancelarModal, setCancelarModal] = useState(false);

    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const [feitoEm, setFeito] = useState("null");

    const onSubmit = data => {
        setCancelarShow(true);
    };

    useEffect(async () => {

        setCancelarModal(false);
        const resultado = await resultados(params.usuarioId, 4);
        const result = resultado.data;
        setNome(result.nome);
        setData(result.provas[0].resultado)

        const meses = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"];
        let feito = new Date((result.provas[0].updatedAt));
        let dataFormatada = ((feito.getDate() + "/" + meses[(feito.getMonth())] + "/" + feito.getFullYear() + " às " + feito.getHours() + ":" + feito.getMinutes()));

        setFeito(dataFormatada)

    }, [nome, CancelarShow]);

    return (
        <div>
            <ModalApagar
                show={CancelarShow}
                confirm={setCancelarModal}
                usuario={params.usuarioId}
                testeId="4"
                nome={nome}
                teste="G36"
                onHide={() => setCancelarShow(false)}
            />

            <ClientNavbar titulo="Olá!"> </ClientNavbar>
            <div className="admContent">
                <div className="admSideBar">
                    <SideBar></SideBar>
                </div>
                <div className="admTable">
                    <div className="admHead">
                        <h2>G-36 de {nome}</h2>
                    </div>
                    <div className="dataHead">
                        <h6 >Respondido em {feitoEm}</h6>
                    </div>
                    <form className="fichaSizeG36" onSubmit={handleSubmit(onSubmit)}>

                        <div className="DivfichaSizeG36">
                            <h6>Acertos:</h6>
                            <input type="text" value={data.acertos} readOnly {...register("acertos", { required: (true) })} />
                        </div>

                        <div className="DivfichaSizeG36">
                            <h6>Erros A:</h6>
                            <input type="text" value={data.errosA} readOnly {...register("errA", { required: (true) })} />
                        </div>

                        <div className="DivfichaSizeG36">
                            <h6>Erros B:</h6>
                            <input type="text" value={data.errosB} readOnly {...register("errB", { required: (true) })} />
                        </div>

                        <div className="DivfichaSizeG36">
                            <h6>Erros C:</h6>
                            <input type="text" value={data.errosC} readOnly {...register("errC", { required: (true) })} />
                        </div>
                        <br></br>
                        <div>
                            <Button className="apagarResBut" variant="danger" onClick={onSubmit}>Apagar Resposta</Button>
                        </div>
                    </form>
                    <br></br>

                </div>
            </div>
        </div>
    );
}