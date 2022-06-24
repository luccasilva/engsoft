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
    const [dataATV, setDataATV] = useState(["null"]);
    const [dataCOM, setDataCOM] = useState(["null"]);
    const [dataCAR, setDataCAR] = useState(["null"]);
    const [dataHAB, setDataHAB] = useState(["null"]);
    const [dataSUM, setDataSUM] = useState(["null"]);
    const [valores, setValores] = useState(["null"]);
    const [feitoEm, setFeito] = useState("null");

    const [CancelarShow, setCancelarShow] = useState(false);
    const [CancelarModal, setCancelarModal] = useState(false);

    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const onSubmit = data => {
        setCancelarShow(true);
    };

    useEffect(async () => {

        setCancelarModal(false);
        const resultado = await resultados(params.usuarioId, 7);
        const result = resultado.data;
        setNome(result.nome);
        setDataATV(result.provas[0].resultado['ATIVIDADES'])
        setDataCOM(result.provas[0].resultado['COMPETENCIAS'])
        setDataCAR(result.provas[0].resultado['CARREIRAS'])
        setDataHAB(result.provas[0].resultado['HABILIDADES'])
        setDataSUM(result.provas[0].resultado['SOMA'])

        const dados = result.provas[0].resultado['SOMA'];
        setValores([dados.R,
                    dados.I,
                    dados.A,
                    dados.S,
                    dados.E,
                    dados.C])

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
                testeId="7"
                nome={nome}
                teste="SDS"
                onHide={() => setCancelarShow(false)}
            />

            <ClientNavbar titulo="Olá!"> </ClientNavbar>
            <div className="admContent">
                <div className="admSideBar">
                    <SideBar></SideBar>
                </div>
                <div className="admTable">
                    <div className="admHead">
                        <h2>SDS de {nome}</h2>
                    </div>
                    <div className="dataHead">
                        <h6 >Respondido em {feitoEm}</h6>
                    </div>

                    <PopChart
                        categories = {['R', 'I', 'A', 'S', 'E', 'C']}
                        valores={valores}
                    />

                    <form className="fichaSizeSDS somageralSDS">
                        <h6 className="titleSDS"> SOMA GERAL</h6>
                        <div className="cointentMasterSizeSDS">
                            <div className="cointentSizeSDS">
                                <div className="DivfichaSizeSDS">
                                    <h6>R:</h6>
                                    <input type="text" value={dataSUM.R} readOnly />
                                    <input type="text" value={`${((dataSUM.R/48)*100).toFixed(1)}`} readOnly />
                                    <h6>%</h6>
                                </div>

                                <div className="DivfichaSizeSDS">
                                    <h6>I:</h6>
                                    <input type="text" value={dataSUM.I} readOnly />
                                    <input type="text" value={`${((dataSUM.I/48)*100).toFixed(1)}`} readOnly />
                                    <h6>%</h6>
                                </div>

                                <div className="DivfichaSizeSDS">
                                    <h6>A:</h6>
                                    <input type="text" value={dataSUM.A} readOnly />
                                    <input type="text" value={`${((dataSUM.A/48)*100).toFixed(1)}`} readOnly />
                                    <h6>%</h6>
                                </div>

                                <div className="DivfichaSizeSDS">
                                    <h6>S:</h6>
                                    <input type="text" value={dataSUM.S} readOnly />
                                    <input type="text" value={`${((dataSUM.S/48)*100).toFixed(1)}`} readOnly />
                                    <h6>%</h6>
                                </div>

                                <div className="DivfichaSizeSDS">
                                    <h6>E:</h6>
                                    <input type="text" value={dataSUM.E} readOnly />
                                    <input type="text" value={`${((dataSUM.E/48)*100).toFixed(1)}`} readOnly />
                                    <h6>%</h6>
                                </div>

                                <div className="DivfichaSizeSDS">
                                    <h6>C:</h6>
                                    <input type="text" value={dataSUM.C} readOnly />
                                    <input type="text" value={`${((dataSUM.C/48)*100).toFixed(1)}`} readOnly />
                                    <h6>%</h6>
                                </div>
                            </div>
                        </div>
                    </form>

                    <br></br>

                    <form className="fichaSizeSDS" onSubmit={handleSubmit(onSubmit)}>

                        <h6 className="titleSDS"> ATIVIDADES / COMPETÊNCIAS / CARREIRAS</h6>
                        <div className="cointentMasterSizeSDS">
                            <div className="cointentSizeSDS">
                                <div className="DivfichaSizeSDS">
                                    <h6>R:</h6>
                                    <input type="text" value={dataATV.R} readOnly {...register("R", { required: (true) })} />
                                </div>

                                <div className="DivfichaSizeSDS">
                                    <h6>I:</h6>
                                    <input type="text" value={dataATV.I} readOnly {...register("I", { required: (true) })} />
                                </div>

                                <div className="DivfichaSizeSDS">
                                    <h6>A:</h6>
                                    <input type="text" value={dataATV.A} readOnly {...register("A", { required: (true) })} />
                                </div>

                                <div className="DivfichaSizeSDS">
                                    <h6>S:</h6>
                                    <input type="text" value={dataATV.S} readOnly {...register("S", { required: (true) })} />
                                </div>

                                <div className="DivfichaSizeSDS">
                                    <h6>E:</h6>
                                    <input type="text" value={dataATV.E} readOnly {...register("E", { required: (true) })} />
                                </div>

                                <div className="DivfichaSizeSDS">
                                    <h6>C:</h6>
                                    <input type="text" value={dataATV.C} readOnly {...register("C", { required: (true) })} />
                                </div>
                            </div>

                            <div className="cointentSizeSDS">
                                <div className="DivfichaSizeSDS">
                                    <h6>R:</h6>
                                    <input type="text" value={dataCOM.R} readOnly {...register("RC", { required: (true) })} />
                                </div>

                                <div className="DivfichaSizeSDS">
                                    <h6>I:</h6>
                                    <input type="text" value={dataCOM.I} readOnly {...register("IC", { required: (true) })} />
                                </div>

                                <div className="DivfichaSizeSDS">
                                    <h6>A:</h6>
                                    <input type="text" value={dataCOM.A} readOnly {...register("AC", { required: (true) })} />
                                </div>

                                <div className="DivfichaSizeSDS">
                                    <h6>S:</h6>
                                    <input type="text" value={dataCOM.S} readOnly {...register("SC", { required: (true) })} />
                                </div>

                                <div className="DivfichaSizeSDS">
                                    <h6>E:</h6>
                                    <input type="text" value={dataCOM.E} readOnly {...register("EC", { required: (true) })} />
                                </div>

                                <div className="DivfichaSizeSDS">
                                    <h6>C:</h6>
                                    <input type="text" value={dataCOM.C} readOnly {...register("CC", { required: (true) })} />
                                </div>
                            </div>

                            <div className="cointentSizeSDS">
                                <div className="DivfichaSizeSDS">
                                    <h6>R:</h6>
                                    <input type="text" value={dataCAR.R} readOnly {...register("RA", { required: (true) })} />
                                </div>

                                <div className="DivfichaSizeSDS">
                                    <h6>I:</h6>
                                    <input type="text" value={dataCAR.I} readOnly {...register("IA", { required: (true) })} />
                                </div>

                                <div className="DivfichaSizeSDS">
                                    <h6>A:</h6>
                                    <input type="text" value={dataCAR.A} readOnly {...register("AA", { required: (true) })} />
                                </div>

                                <div className="DivfichaSizeSDS">
                                    <h6>S:</h6>
                                    <input type="text" value={dataCAR.S} readOnly {...register("SA", { required: (true) })} />
                                </div>

                                <div className="DivfichaSizeSDS">
                                    <h6>E:</h6>
                                    <input type="text" value={dataCAR.E} readOnly {...register("EA", { required: (true) })} />
                                </div>

                                <div className="DivfichaSizeSDS">
                                    <h6>C:</h6>
                                    <input type="text" value={dataCAR.C} readOnly {...register("CA", { required: (true) })} />
                                </div>
                            </div>
                        </div>

                        <br></br>
                        <h6 className="titleSDS"> AUTO AVALIAÇÃO - HABILIDADES:</h6>
                        <div className="cointentSizeSDS">
                            <div className="DivfichaSizeSDS">
                                <h6>MECÂNICA - R:</h6>
                                <input type="text" value={dataHAB.MECANICA} readOnly {...register("RAAa", { required: (true) })} />
                            </div>

                            <div className="DivfichaSizeSDS">
                                <h6>MANUAL - R:</h6>
                                <input type="text" value={dataHAB.MANUAL} readOnly {...register("IABg", { required: (true) })} />
                            </div>

                            <div className="DivfichaSizeSDS">
                                <h6>CIENTÍFICA - I:</h6>
                                <input type="text" value={dataHAB.CIENTIFICA} readOnly {...register("AAAg", { required: (true) })} />
                            </div>

                            <div className="DivfichaSizeSDS">
                                <h6>NUMÉRICA - I:</h6>
                                <input type="text" value={dataHAB.NUMERICA} readOnly {...register("SAB5", { required: (true) })} />
                            </div>

                            <div className="DivfichaSizeSDS">
                                <h6>ARTÍSTICA - A:</h6>
                                <input type="text" value={dataHAB.ARTISTICA} readOnly {...register("EAAh", { required: (true) })} />
                            </div>

                            <div className="DivfichaSizeSDS">
                                <h6>MUSICAL - A:</h6>
                                <input type="text" value={dataHAB.MUSICAL} readOnly {...register("CABj", { required: (true) })} />
                            </div>

                            <div className="DivfichaSizeSDS">
                                <h6>ENSINO - S:</h6>
                                <input type="text" value={dataHAB.ENSINO} readOnly {...register("RAAe", { required: (true) })} />
                            </div>

                            <div className="DivfichaSizeSDS">
                                <h6>INTERPESSOAL - S:</h6>
                                <input type="text" value={dataHAB.INTERPESSOAL} readOnly {...register("IABh", { required: (true) })} />
                            </div>

                            <div className="DivfichaSizeSDS">
                                <h6>VENDAS - E:</h6>
                                <input type="text" value={dataHAB.VENDAS} readOnly {...register("AAAm", { required: (true) })} />
                            </div>

                            <div className="DivfichaSizeSDS">
                                <h6>GERENCIAL - E:</h6>
                                <input type="text" value={dataHAB.GERENCIAL} readOnly {...register("SABe", { required: (true) })} />
                            </div>

                            <div className="DivfichaSizeSDS">
                                <h6>ADMINISTRATIVA - C:</h6>
                                <input type="text" value={dataHAB.ADMINISTRATIVA} readOnly {...register("EAA5", { required: (true) })} />
                            </div>

                            <div className="DivfichaSizeSDS">
                                <h6>TECNOLÓGICA - C:</h6>
                                <input type="text" value={dataHAB.TECNOLOGICA} readOnly {...register("CAbB", { required: (true) })} />
                            </div>
                        </div>

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