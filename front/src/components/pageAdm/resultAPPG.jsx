import ClientNavbar from "../shared/clientNavbar";
import { Link, useParams } from "react-router-dom";
import SideBar from "../shared/sideBar";
import Button from 'react-bootstrap/Button'
import Alert from "../testes/shared/alert";
import React, { useState, useEffect } from 'react';
import { resultados } from '../../services/admService';
import ModalApagar from "./shared/modalApagar";
import PopChart from "../shared/graph"


import { useForm } from "react-hook-form";

export default (props) => {

    let params = useParams();

    const [nome, setNome] = useState(["null"]);
    const [data, setData] = useState(["null"]);
    const [valores, setValores] = useState(["null"]);

    const [CancelarShow, setCancelarShow] = useState(false);
    const [CancelarModal, setCancelarModal] = useState(false);
    const [feitoEm, setFeito] = useState("null");

    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const onSubmit = data => {
        setCancelarShow(true);
    };

    useEffect(async () => {

        setCancelarModal(false);
        const resultado = await resultados(params.usuarioId, 2);
        const result = resultado.data;
        setNome(result.nome);
        setData(result.provas[0].resultado)

        const dados = result.provas[0].resultado;
        setValores([dados.A,
                    dados.B,
                    dados.C,
                    dados.D,
                    dados.E,
                    dados.F,
                    dados.G,
                    dados.H,
                    dados.I,
                    dados.J,
                    dados.K,
                    dados.L,
                    dados.M,
                    dados.N,
                    dados.O,
                    dados.P,
                    dados.Q,
                    dados.R,
                    dados.S,
                    dados.T])

        const meses = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"];
        let feito = new Date((result.provas[0].updatedAt));
        let dataFormatada = ((feito.getDate() + "/" + meses[(feito.getMonth())] + "/" + feito.getFullYear() + " ??s " + feito.getHours() + ":" + feito.getMinutes()));

        setFeito(dataFormatada)



    }, [nome, CancelarShow]);

    return (
        <div>
            <ModalApagar
                show={CancelarShow}
                confirm={setCancelarModal}
                usuario={params.usuarioId}
                testeId="2"
                nome={nome}
                teste="APPG"
                onHide={() => setCancelarShow(false)}
            />

            <ClientNavbar titulo="Ol??!"> </ClientNavbar>
            <div className="admContent">
                <div className="admSideBar">
                    <SideBar></SideBar>
                </div>
                <div className="admTable">
                    <div className="admHead">
                        <h2>APPG de {nome}</h2>
                    </div>
                    <div className="dataHead">
                        <h6 >Respondido em {feitoEm}</h6>
                    </div>

                    <PopChart
                        categories={['A: PLANEJAMENTO', 'B: ORGANIZA????O', 'C: SUPERVIS??O', 'D: LIDERAN??A', 'E: COMUNICA????O', 'F: DECIS??O', 'G: DELEGA????O', 'H: TEMPO DE EXECU????O', 'I: COMPROMETIMENTO', 'J: FLEXIBILIDADE', 'K: PRIORIZA????O', 'L: RELACIONAMENTO', 'M: ADM. DE CONFLITOS', 'N: CONTROLE EMOCIONAL', 'O: ADAPTA????O ?? MUDAN??AS', 'P: AFETIVIDADE', 'Q: AUTO-IMAGEM', 'R: TRABALHO EM EQUIPE', 'S: T??NUS VITAL', 'T: AMBI????O/MOTIVA????O']}
                        valores={valores}
                    />

                    <form className="fichaSizeII" onSubmit={handleSubmit(onSubmit)}>

                        <div className="DivfichaSizeII">
                            <h6>A - PLANEJAMENTO:</h6>
                            <input type="text" value={data.A} readOnly {...register("A", { required: (true) })} />
                        </div>

                        <div className="DivfichaSizeII">
                            <h6>B - ORGANIZA????O:</h6>
                            <input type="text" value={data.B} readOnly {...register("B", { required: (true) })} />
                        </div>

                        <div className="DivfichaSizeII">
                            <h6>C - SUPERVIS??O:</h6>
                            <input type="text" value={data.C} readOnly {...register("C", { required: (true) })} />
                        </div>

                        <div className="DivfichaSizeII">
                            <h6>D - LIDERAN??A:</h6>
                            <input type="text" value={data.D} readOnly {...register("D", { required: (true) })} />
                        </div>

                        <div className="DivfichaSizeII">
                            <h6>E - COMUNICA????O:</h6>
                            <input type="text" value={data.E} readOnly {...register("E", { required: (true) })} />
                        </div>

                        <div className="DivfichaSizeII">
                            <h6>F - DECIS??O:</h6>
                            <input type="text" value={data.F} readOnly {...register("F", { required: (true) })} />
                        </div>

                        <div className="DivfichaSizeII">
                            <h6>G - DELEGA????O:</h6>
                            <input type="text" value={data.G} readOnly {...register("G", { required: (true) })} />
                        </div>

                        <div className="DivfichaSizeII">
                            <h6>H - TEMPO DE EXECU????O:</h6>
                            <input type="text" value={data.H} readOnly {...register("H", { required: (true) })} />
                        </div>

                        <div className="DivfichaSizeII">
                            <h6>I - COMPROMETIMENTO:</h6>
                            <input type="text" value={data.I} readOnly {...register("I", { required: (true) })} />
                        </div>

                        <div className="DivfichaSizeII">
                            <h6>J - FLEXIBILIDADE:</h6>
                            <input type="text" value={data.J} readOnly {...register("J", { required: (true) })} />
                        </div>

                        <div className="DivfichaSizeII">
                            <h6>K - PRIORIZA????O:</h6>
                            <input type="text" value={data.K} readOnly {...register("K", { required: (true) })} />
                        </div>

                        <div className="DivfichaSizeII">
                            <h6>L - RELACIONAMENTO:</h6>
                            <input type="text" value={data.L} readOnly {...register("L", { required: (true) })} />
                        </div>

                        <div className="DivfichaSizeII">
                            <h6>M - ADM. DE CONFLITOS:</h6>
                            <input type="text" value={data.M} readOnly {...register("M", { required: (true) })} />
                        </div>

                        <div className="DivfichaSizeII">
                            <h6>N - CONTROLE EMOCIONAL:</h6>
                            <input type="text" value={data.N} readOnly {...register("N", { required: (true) })} />
                        </div>

                        <div className="DivfichaSizeII">
                            <h6>O - ADAPTA????O ?? MUDAN??AS:</h6>
                            <input type="text" value={data.O} readOnly {...register("O", { required: (true) })} />
                        </div>

                        <div className="DivfichaSizeII">
                            <h6>P - AFETIVIDADE:</h6>
                            <input type="text" value={data.P} readOnly {...register("P", { required: (true) })} />
                        </div>

                        <div className="DivfichaSizeII">
                            <h6>Q - AUTO-IMAGEM:</h6>
                            <input type="text" value={data.Q} readOnly {...register("Q", { required: (true) })} />
                        </div>

                        <div className="DivfichaSizeII">
                            <h6>R - TRABALHO EM EQUIPE:</h6>
                            <input type="text" value={data.R} readOnly {...register("R", { required: (true) })} />
                        </div>

                        <div className="DivfichaSizeII">
                            <h6>S - T??NUS VITAL:</h6>
                            <input type="text" value={data.S} readOnly {...register("S", { required: (true) })} />
                        </div>

                        <div className="DivfichaSizeII">
                            <h6>T - AMBI????O/MOTIVA????O:</h6>
                            <input type="text" value={data.T} readOnly {...register("T", { required: (true) })} />
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