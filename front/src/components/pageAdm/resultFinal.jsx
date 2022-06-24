import ClientNavbar from "../shared/clientNavbar";
import { Link, useParams } from "react-router-dom";
import SideBar from "../shared/sideBar";
import Button from 'react-bootstrap/Button'
import Alert from "../testes/shared/alert";
import React, { useState, useEffect } from 'react';
import { ver } from '../../services/admService';
import ModalApagar from "./shared/modalApagar";
import PopChart from "../shared/graph"


import { useForm } from "react-hook-form";

export default (props) => {

    let params = useParams();

    const [nome, setNome] = useState(["null"]);
    const [data, setData] = useState(["null"]);

    const [AIP, setAIP] = useState("null");
    const [APPG, setAPPG] = useState("null");
    const [FICHA, setFICHA] = useState("null");
    const [G36, setG36] = useState("null");
    const [II, setII] = useState("null");
    const [PF, setPF] = useState("null");
    const [SDS, setSDS] = useState("null");

    const [valoresAPPG, setValoresAPPG] = useState(["null"]);
    const [valoresII, setValoresII] = useState(["null"]);
    const [valoresAIP, setValoresAIP] = useState(["null"]);
    const [valoresSDS, setValoresSDS] = useState(["null"]);

    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const [feitoEm, setFeito] = useState("null");

    const onSubmit = data => {

    };

    useEffect(async () => {

        const resultado = await ver(params.usuarioId);
        const result = resultado.data;

        setNome(result.nome);
        let provasArray = result.provas

        for (let i = 0; i < provasArray.length; i++) {
            switch (provasArray[i].teste_id) {
                case 1:
                    setAIP(provasArray[i].resultado);
                    setValoresAIP([
                        provasArray[i].resultado.A,
                        provasArray[i].resultado.B,
                        provasArray[i].resultado.C,
                        provasArray[i].resultado.D,
                        provasArray[i].resultado.E,
                        provasArray[i].resultado.F,
                        provasArray[i].resultado.G,
                        provasArray[i].resultado.H,
                        provasArray[i].resultado.I,
                        provasArray[i].resultado.J])
                    break;
                case 2:
                    setAPPG(provasArray[i].resultado);
                    setValoresAPPG([
                        provasArray[i].resultado.A,
                        provasArray[i].resultado.B,
                        provasArray[i].resultado.C,
                        provasArray[i].resultado.D,
                        provasArray[i].resultado.E,
                        provasArray[i].resultado.F,
                        provasArray[i].resultado.G,
                        provasArray[i].resultado.H,
                        provasArray[i].resultado.I,
                        provasArray[i].resultado.J,
                        provasArray[i].resultado.K,
                        provasArray[i].resultado.L,
                        provasArray[i].resultado.M,
                        provasArray[i].resultado.N,
                        provasArray[i].resultado.O,
                        provasArray[i].resultado.P,
                        provasArray[i].resultado.Q,
                        provasArray[i].resultado.R,
                        provasArray[i].resultado.S,
                        provasArray[i].resultado.T])
                    break;
                case 3:
                    setFICHA(provasArray[i].resultado);
                    break;
                case 4:
                    setG36(provasArray[i].resultado);
                    break;
                case 5:
                    setII(provasArray[i].resultado);
                    setValoresII([
                        provasArray[i].resultado.CF,
                        provasArray[i].resultado.CB,
                        provasArray[i].resultado.C,
                        provasArray[i].resultado.P,
                        provasArray[i].resultado.B,
                        provasArray[i].resultado.S,
                        provasArray[i].resultado.L,
                        provasArray[i].resultado.A,
                        provasArray[i].resultado.M])
                    break;
                case 6:
                    setPF(provasArray[i].resultado);
                    break;
                case 7:
                    setSDS(provasArray[i].resultado['SOMA']);
                    setValoresSDS([provasArray[i].resultado['SOMA'].R,
                    provasArray[i].resultado['SOMA'].I,
                    provasArray[i].resultado['SOMA'].A,
                    provasArray[i].resultado['SOMA'].S,
                    provasArray[i].resultado['SOMA'].E,
                    provasArray[i].resultado['SOMA'].C])
                    break;
                default:
                    break;
            }
        }

        // setData(result.provas[0].resultado)

        // const meses = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"];
        // let feito = new Date((result.provas[0].updatedAt));
        // let dataFormatada = ((feito.getDate() + "/" + meses[(feito.getMonth())] + "/" + feito.getFullYear() + " às " + feito.getHours() + ":" + feito.getMinutes()));

        // setFeito(dataFormatada)

    }, [nome]);

    return (
        <div>

            <ClientNavbar titulo="Olá!"> </ClientNavbar>
            <div className="admContent">
                <div className="admSideBar">
                    <SideBar></SideBar>
                </div>
                <div className="admTable">
                    <div className="admHead">
                        <h2>SÍNTESE DOS TESTES</h2>
                    </div>
                    <div className="dataHead">
                        <h4>{nome}</h4>
                    </div>
                    <form className="formSintese" onSubmit={handleSubmit(onSubmit)}>

                        <h4 className="g3636">G-36</h4>
                        <div className="formSinteseG36">

                            <h6>Acertos:</h6>
                            <input type="text" value={G36.acertos} readOnly />

                            <h6>Erros A:</h6>
                            <input type="text" value={G36.errosA} readOnly />

                            <h6>Erros B:</h6>
                            <input type="text" value={G36.errosB} readOnly />

                            <h6>Erros C:</h6>
                            <input type="text" value={G36.errosC} readOnly />

                        </div>

                        <h4>APPG</h4>
                        <div className="formSinteseAPPG">
                            <PopChart
                                categories={['A: PLANEJAMENTO', 'B: ORGANIZAÇÃO', 'C: SUPERVISÃO', 'D: LIDERANÇA', 'E: COMUNICAÇÃO', 'F: DECISÃO', 'G: DELEGAÇÃO', 'H: TEMPO DE EXECUÇÃO', 'I: COMPROMETIMENTO', 'J: FLEXIBILIDADE', 'K: PRIORIZAÇÃO', 'L: RELACIONAMENTO', 'M: ADM. DE CONFLITOS', 'N: CONTROLE EMOCIONAL', 'O: ADAPTAÇÃO À MUDANÇAS', 'P: AFETIVIDADE', 'Q: AUTO-IMAGEM', 'R: TRABALHO EM EQUIPE', 'S: TÔNUS VITAL', 'T: AMBIÇÃO/MOTIVAÇÃO']}
                                valores={valoresAPPG}
                            />
                        </div>


                        <h4>INVINT</h4>
                        <div className="formSinteseAPPG">
                            <PopChart
                                categories={['CF', 'CB', 'C', 'P', 'B', 'S', 'L', 'A', 'M']}
                                valores={valoresII}
                            />
                        </div>


                        <h4>AIP</h4>
                        <div className="formSinteseAPPG">
                            <PopChart
                                categories={['A: FÍSICO/MATEMÁTICO', 'B: FÍSICO/QUÍMICO', 'C: CÁLCULOS/FINANÇAS', 'D: ORGANIZACIONAL/ADMINISTRAÇÃO', 'E: JURÍDICO/SOCIAL', 'F: COMUNICAÇÃO/PERSUASÃO', 'G: SIMBÓLICO/LINGUÍSTICO', 'H: MANUAL/ARTÍSTICO', 'I: COMPORTAMENTAL/EDUCACIONAL', 'J: BIOLÓGICO/SAÚDE']}
                                valores={valoresAIP}
                            />
                        </div>


                        <h4>SDS</h4>
                        <div className="formSinteseAPPG">
                            <PopChart
                                categories={['R', 'I', 'A', 'S', 'E', 'C']}
                                valores={valoresSDS}
                            />
                        </div>


                        <br></br>
                    </form>
                    <br></br>

                </div>
            </div>
        </div>
    );
}