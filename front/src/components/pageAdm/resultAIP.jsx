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
    const [feitoEm, setFeito] = useState("null");

    const [CancelarShow, setCancelarShow] = useState(false);
    const [CancelarModal, setCancelarModal] = useState(false);

    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const onSubmit = data => {
        setCancelarShow(true);
    };

    useEffect(async () => {

        setCancelarModal(false);
        const resultado = await resultados(params.usuarioId, 1);
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
                    dados.J])
        
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
                testeId="1"
                nome={nome}
                teste="AIP"
                onHide={() => setCancelarShow(false)}
            />

            <ClientNavbar titulo="Olá!"> </ClientNavbar>
            <div className="admContent">
                <div className="admSideBar">
                    <SideBar></SideBar>
                </div>
                <div className="admTable">
                    <div className="admHead">
                        <h2>AIP de {nome}</h2>
                    </div>
                    <div className="dataHead">
                        <h6 >Respondido em {feitoEm}</h6>
                    </div>

                    <PopChart
                        categories = {['A: FÍSICO/MATEMÁTICO', 'B: FÍSICO/QUÍMICO', 'C: CÁLCULOS/FINANÇAS', 'D: ORGANIZACIONAL/ADMINISTRAÇÃO', 'E: JURÍDICO/SOCIAL', 'F: COMUNICAÇÃO/PERSUASÃO', 'G: SIMBÓLICO/LINGUÍSTICO', 'H: MANUAL/ARTÍSTICO', 'I: COMPORTAMENTAL/EDUCACIONAL', 'J: BIOLÓGICO/SAÚDE']}
                        valores={valores}
                    />

                    <form className="fichaSizeAIP" onSubmit={handleSubmit(onSubmit)}>

                        <div className="DivfichaSizeSDS">
                            <h6>A - FÍSICO/MATEMÁTICO:</h6>
                            <input type="text" value={data.A} readOnly {...register("A", { required: (true) })} />
                            <input type="text" value={`${((data.A/20)*100).toFixed(1)}`} readOnly />
                            <h6>%</h6>
                        </div>

                        <div className="DivfichaSizeSDS">
                            <h6>B – CAMPO FÍSICO/QUÍMICO:</h6>
                            <input type="text" value={data.B} readOnly {...register("B", { required: (true) })} />
                            <input type="text" value={`${((data.B/20)*100).toFixed(1)}`} readOnly />
                            <h6>%</h6>
                        </div>

                        <div className="DivfichaSizeSDS">
                            <h6>C - CAMPO CÁLCULOS/FINANÇAS:</h6>
                            <input type="text" value={data.C} readOnly {...register("C", { required: (true) })} />
                            <input type="text" value={`${((data.C/20)*100).toFixed(1)}`} readOnly />
                            <h6>%</h6>
                        </div>

                        <div className="DivfichaSizeSDS">
                            <h6>D – ORGANIZACIONAL/ADMINISTRAÇÃO:</h6>
                            <input type="text" value={data.D} readOnly {...register("D", { required: (true) })} />
                            <input type="text" value={`${((data.D/20)*100).toFixed(1)}`} readOnly />
                            <h6>%</h6>
                        </div>

                        <div className="DivfichaSizeSDS">
                            <h6>E – CAMPO JURÍDICO/SOCIAL:</h6>
                            <input type="text" value={data.E} readOnly {...register("E", { required: (true) })} />
                            <input type="text" value={`${((data.E/20)*100).toFixed(1)}`} readOnly />
                            <h6>%</h6>
                        </div>

                        <div className="DivfichaSizeSDS">
                            <h6>F – CAMPO COMUNICAÇÃO/PERSUASÃO:</h6>
                            <input type="text" value={data.F} readOnly {...register("F", { required: (true) })} />
                            <input type="text" value={`${((data.F/20)*100).toFixed(1)}`} readOnly />
                            <h6>%</h6>
                        </div>

                        <div className="DivfichaSizeSDS">
                            <h6>G – CAMPO SIMBÓLICO/LINGUÍSTICO:</h6>
                            <input type="text" value={data.G} readOnly {...register("G", { required: (true) })} />
                            <input type="text" value={`${((data.G/20)*100).toFixed(1)}`} readOnly />
                            <h6>%</h6>
                        </div>

                        <div className="DivfichaSizeSDS">
                            <h6>H – CAMPO MANUAL/ARTÍSTICO:</h6>
                            <input type="text" value={data.H} readOnly {...register("H", { required: (true) })} />
                            <input type="text" value={`${((data.H/20)*100).toFixed(1)}`} readOnly />
                            <h6>%</h6>
                        </div>

                        <div className="DivfichaSizeSDS">
                            <h6>I – COMPORTAMENTAL/EDUCACIONAL:</h6>
                            <input type="text" value={data.I} readOnly {...register("I", { required: (true) })} />
                            <input type="text" value={`${((data.I/20)*100).toFixed(1)}`} readOnly />
                            <h6>%</h6>
                        </div>

                        <div className="DivfichaSizeSDS">
                            <h6>J – CAMPO BIOLÓGICO/SAÚDE:</h6>
                            <input type="text" value={data.J} readOnly {...register("J", { required: (true) })} />
                            <input type="text" value={`${((data.J/20)*100).toFixed(1)}`} readOnly />
                            <h6>%</h6>
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