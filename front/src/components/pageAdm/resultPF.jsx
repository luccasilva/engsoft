import ClientNavbar from "../shared/clientNavbar";
import SideBar from "../shared/sideBar";
import Button from "react-bootstrap/Button";
import Alert from "../testes/shared/alert";
import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { resultados } from "../../services/admService";
import ModalApagar from "./shared/modalApagar";

import { useForm } from "react-hook-form";
import Piramide from "./shared/piramide";

export default (props) => {
  let params = useParams();

  const [nome, setNome] = useState([]);
  const [dados, setData] = useState(["null"]);

  const [dados1, setData1] = useState([]);
  const [dados2, setData2] = useState([]);
  const [dados3, setData3] = useState([]);

  const [pf1, setPF1] = useState([]);
  const [pf2, setPF2] = useState([]);
  const [pf3, setPF3] = useState([]);

  const [result1, setResult1] = useState([]);
  const [result2, setResult2] = useState([]);
  const [result3, setResult3] = useState([]);
  const [feitoEm, setFeito] = useState("null");

  const [CancelarShow, setCancelarShow] = useState(false);
  const [CancelarModal, setCancelarModal] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    setCancelarShow(true);
  };

  useEffect(async () => {
    setCancelarModal(false);
    const resultado = await resultados(params.usuarioId, 6);
    const result = resultado.data;
    setNome(result.nome);
    setData(result.provas[0].resultado.respostas);

    setData1(result.provas[0].resultado.data[0]);
    setData2(result.provas[0].resultado.data[1]);
    setData3(result.provas[0].resultado.data[2]);

    setPF1(result.provas[0].resultado.respostas[0]);
    setPF2(result.provas[0].resultado.respostas[1]);
    setPF3(result.provas[0].resultado.respostas[2]);

    setResult1(result.provas[0].resultado.respostas[0].SOMA);
    setResult2(result.provas[0].resultado.respostas[1].SOMA);
    setResult3(result.provas[0].resultado.respostas[2].SOMA);

    const meses = [
      "01",
      "02",
      "03",
      "04",
      "05",
      "06",
      "07",
      "08",
      "09",
      "10",
      "11",
      "12",
    ];
    let feito = new Date(result.provas[0].updatedAt);
    let dataFormatada =
      feito.getDate() +
      "/" +
      meses[feito.getMonth()] +
      "/" +
      feito.getFullYear() +
      " às " +
      feito.getHours() +
      ":" +
      feito.getMinutes();

    setFeito(dataFormatada);
  }, [CancelarShow]);

  return (
    <div>
      <ModalApagar
        show={CancelarShow}
        confirm={setCancelarModal}
        usuario={params.usuarioId}
        testeId="6"
        nome={nome}
        teste="PFISTER"
        onHide={() => setCancelarShow(false)}
      />

      <ClientNavbar titulo="Olá!"> </ClientNavbar>
      <div className="admContent">
        <div className="admSideBar">
          <SideBar></SideBar>
        </div>
        <div className="admTable">
          <div className="admHead">
            <h2>PFISTER de {nome}</h2>
          </div>

          <div className="dataHead">
            <h6>Respondido em {feitoEm}</h6>
          </div>

          <div className="todomesmo">
            <div className="todotodo">
              <div className="piramideResult">
                <Piramide
                  div_1={dados1.cor1}
                  div_2={dados1.cor2}
                  div_3={dados1.cor3}
                  div_4={dados1.cor4}
                  div_5={dados1.cor5}
                  div_6={dados1.cor6}
                  div_7={dados1.cor7}
                  div_8={dados1.cor8}
                  div_9={dados1.cor9}
                  div_10={dados1.cor10}
                  div_11={dados1.cor11}
                  div_12={dados1.cor12}
                  div_13={dados1.cor13}
                  div_14={dados1.cor14}
                  div_15={dados1.cor15}
                />
              </div>

              <div className="piramideResult">
                <Piramide
                  div_1={dados2.cor1}
                  div_2={dados2.cor2}
                  div_3={dados2.cor3}
                  div_4={dados2.cor4}
                  div_5={dados2.cor5}
                  div_6={dados2.cor6}
                  div_7={dados2.cor7}
                  div_8={dados2.cor8}
                  div_9={dados2.cor9}
                  div_10={dados2.cor10}
                  div_11={dados2.cor11}
                  div_12={dados2.cor12}
                  div_13={dados2.cor13}
                  div_14={dados2.cor14}
                  div_15={dados2.cor15}
                />
              </div>

              <div className="piramideResult">
                <Piramide
                  div_1={dados3.cor1}
                  div_2={dados3.cor2}
                  div_3={dados3.cor3}
                  div_4={dados3.cor4}
                  div_5={dados3.cor5}
                  div_6={dados3.cor6}
                  div_7={dados3.cor7}
                  div_8={dados3.cor8}
                  div_9={dados3.cor9}
                  div_10={dados3.cor10}
                  div_11={dados3.cor11}
                  div_12={dados3.cor12}
                  div_13={dados3.cor13}
                  div_14={dados3.cor14}
                  div_15={dados3.cor15}
                />
              </div>
            </div>
          </div>

          <table className="tablePf">
            <colgroup>
              <col className="BgBg" span="1" />
              <col className="azulBg" span="5" />
              <col className="vermelhoBg" span="5" />
              <col className="verdeBg" span="5" />
              <col className="violetaBg" span="4" />
              <col className="amareloBg" span="3" />
              <col className="laranjaBg" span="3" />
              <col className="marromBg" span="3" />
              <col className="pretoBg" span="1" />
              <col className="brancoBg" span="1" />
              <col className="cinzaBg" span="1" />
            </colgroup>
            <tr>
              <td rowspan="2"></td>
              <th colspan="5" scope="colgroup">
                AZUL
              </th>
              <th colspan="5" scope="colgroup">
                VERMELHO
              </th>
              <th colspan="5" scope="colgroup">
                VERDE
              </th>
              <th colspan="4" scope="colgroup">
                VIOLETA
              </th>
              <th colspan="3" scope="colgroup">
                AMARELO
              </th>
              <th colspan="3" scope="colgroup">
                LARANJA
              </th>
              <th colspan="3" scope="colgroup">
                MARROM
              </th>
              <th colspan="1" scope="colgroup">
                PRETO
              </th>
              <th colspan="1" scope="colgroup">
                BRANCO
              </th>
              <th colspan="1" scope="colgroup">
                CINZA
              </th>
            </tr>
            <tr>
              <th scope="col">4</th>
              <th scope="col">3</th>
              <th scope="col">2</th>
              <th scope="col">1</th>
              <th scope="col">S</th>

              <th scope="col">4</th>
              <th scope="col">3</th>
              <th scope="col">2</th>
              <th scope="col">1</th>
              <th scope="col">S</th>

              <th scope="col">4</th>
              <th scope="col">3</th>
              <th scope="col">2</th>
              <th scope="col">1</th>
              <th scope="col">S</th>

              <th scope="col">3</th>
              <th scope="col">2</th>
              <th scope="col">1</th>
              <th scope="col">S</th>

              <th scope="col">2</th>
              <th scope="col">1</th>
              <th scope="col">S</th>

              <th scope="col">2</th>
              <th scope="col">1</th>
              <th scope="col">S</th>

              <th scope="col">2</th>
              <th scope="col">1</th>
              <th scope="col">S</th>

              <th scope="col">S</th>

              <th scope="col">S</th>

              <th scope="col">S</th>
            </tr>
            <tr>
              <th scope="row">I</th>

              <td>{pf1.AZUL_4}</td>
              <td>{pf1.AZUL_3}</td>
              <td>{pf1.AZUL_2}</td>
              <td>{pf1.AZUL_1}</td>
              <td>{result1.AZUL}</td>

              <td>{pf1.VERMELHO_4}</td>
              <td>{pf1.VERMELHO_3}</td>
              <td>{pf1.VERMELHO_2}</td>
              <td>{pf1.VERMELHO_1}</td>
              <td>{result1.VERMELHO}</td>

              <td>{pf1.VERDE_4}</td>
              <td>{pf1.VERDE_3}</td>
              <td>{pf1.VERDE_2}</td>
              <td>{pf1.VERDE_1}</td>
              <td>{result1.VERDE}</td>

              <td>{pf1.VIOLETA_3}</td>
              <td>{pf1.VIOLETA_2}</td>
              <td>{pf1.VIOLETA_1}</td>
              <td>{result1.VIOLETA}</td>

              <td>{pf1.AMARELO_2}</td>
              <td>{pf1.AMARELO_1}</td>
              <td>{result1.AMARELO}</td>

              <td>{pf1.LARANJA_2}</td>
              <td>{pf1.LARANJA_1}</td>
              <td>{result1.LARANJA}</td>

              <td>{pf1.MARROM_2}</td>
              <td>{pf1.MARROM_1}</td>
              <td>{result1.MARROM}</td>

              <td>{pf1.PRETO_1}</td>

              <td>{pf1.BRANCO_1}</td>

              <td>{pf1.CINZA_1}</td>
            </tr>
            <tr>
              <th scope="row">II</th>
              <td>{pf2.AZUL_4}</td>
              <td>{pf2.AZUL_3}</td>
              <td>{pf2.AZUL_2}</td>
              <td>{pf2.AZUL_1}</td>
              <td>{result2.AZUL}</td>

              <td>{pf2.VERMELHO_4}</td>
              <td>{pf2.VERMELHO_3}</td>
              <td>{pf2.VERMELHO_2}</td>
              <td>{pf2.VERMELHO_1}</td>
              <td>{result2.VERMELHO}</td>

              <td>{pf2.VERDE_4}</td>
              <td>{pf2.VERDE_3}</td>
              <td>{pf2.VERDE_2}</td>
              <td>{pf2.VERDE_1}</td>
              <td>{result2.VERDE}</td>

              <td>{pf2.VIOLETA_3}</td>
              <td>{pf2.VIOLETA_2}</td>
              <td>{pf2.VIOLETA_1}</td>
              <td>{result2.VIOLETA}</td>

              <td>{pf2.AMARELO_2}</td>
              <td>{pf2.AMARELO_1}</td>
              <td>{result2.AMARELO}</td>

              <td>{pf2.LARANJA_2}</td>
              <td>{pf2.LARANJA_1}</td>
              <td>{result2.LARANJA}</td>

              <td>{pf2.MARROM_2}</td>
              <td>{pf2.MARROM_1}</td>
              <td>{result2.MARROM}</td>

              <td>{pf2.PRETO_1}</td>

              <td>{pf2.BRANCO_1}</td>

              <td>{pf2.CINZA_1}</td>
            </tr>
            <tr>
              <th scope="row">III</th>
              <td>{pf3.AZUL_4}</td>
              <td>{pf3.AZUL_3}</td>
              <td>{pf3.AZUL_2}</td>
              <td>{pf3.AZUL_1}</td>
              <td>{result3.AZUL}</td>

              <td>{pf3.VERMELHO_4}</td>
              <td>{pf3.VERMELHO_3}</td>
              <td>{pf3.VERMELHO_2}</td>
              <td>{pf3.VERMELHO_1}</td>
              <td>{result3.VERMELHO}</td>

              <td>{pf3.VERDE_4}</td>
              <td>{pf3.VERDE_3}</td>
              <td>{pf3.VERDE_2}</td>
              <td>{pf3.VERDE_1}</td>
              <td>{result3.VERDE}</td>

              <td>{pf3.VIOLETA_3}</td>
              <td>{pf3.VIOLETA_2}</td>
              <td>{pf3.VIOLETA_1}</td>
              <td>{result3.VIOLETA}</td>

              <td>{pf3.AMARELO_2}</td>
              <td>{pf3.AMARELO_1}</td>
              <td>{result3.AMARELO}</td>

              <td>{pf3.LARANJA_2}</td>
              <td>{pf3.LARANJA_1}</td>
              <td>{result3.LARANJA}</td>

              <td>{pf3.MARROM_2}</td>
              <td>{pf3.MARROM_1}</td>
              <td>{result3.MARROM}</td>

              <td>{pf3.PRETO_1}</td>

              <td>{pf3.BRANCO_1}</td>

              <td>{pf3.CINZA_1}</td>
            </tr>
            <tr>
              <th scope="row">S</th>
              <td>{pf1.AZUL_4 + pf2.AZUL_4 + pf3.AZUL_4}</td>
              <td>{pf1.AZUL_3 + pf2.AZUL_3 + pf3.AZUL_3}</td>
              <td>{pf1.AZUL_2 + pf2.AZUL_2 + pf3.AZUL_2}</td>
              <td>{pf1.AZUL_1 + pf2.AZUL_1 + pf3.AZUL_1}</td>
              <td>{result1.AZUL + result2.AZUL + result3.AZUL}</td>

              <td>{pf1.VERMELHO_4 + pf2.VERMELHO_4 + pf3.VERMELHO_4}</td>
              <td>{pf1.VERMELHO_3 + pf2.VERMELHO_3 + pf3.VERMELHO_3}</td>
              <td>{pf1.VERMELHO_2 + pf2.VERMELHO_2 + pf3.VERMELHO_2}</td>
              <td>{pf1.VERMELHO_1 + pf2.VERMELHO_1 + pf3.VERMELHO_1}</td>
              <td>{result1.VERMELHO + result2.VERMELHO + result3.VERMELHO}</td>

              <td>{pf1.VERDE_4 + pf2.VERDE_4 + pf3.VERDE_4}</td>
              <td>{pf1.VERDE_3 + pf2.VERDE_3 + pf3.VERDE_3}</td>
              <td>{pf1.VERDE_2 + pf2.VERDE_2 + pf3.VERDE_2}</td>
              <td>{pf1.VERDE_1 + pf2.VERDE_1 + pf3.VERDE_1}</td>
              <td>{result1.VERDE + result2.VERDE + result3.VERDE}</td>

              <td>{pf1.VIOLETA_3 + pf2.VIOLETA_3 + pf3.VIOLETA_3}</td>
              <td>{pf1.VIOLETA_2 + pf2.VIOLETA_2 + pf3.VIOLETA_2}</td>
              <td>{pf1.VIOLETA_1 + pf2.VIOLETA_1 + pf3.VIOLETA_1}</td>
              <td>{result1.VIOLETA + result2.VIOLETA + result3.VIOLETA}</td>

              <td>{pf1.AMARELO_2 + pf2.AMARELO_2 + pf3.AMARELO_2}</td>
              <td>{pf1.AMARELO_1 + pf2.AMARELO_1 + pf3.AMARELO_1}</td>
              <td>{result1.AMARELO + result2.AMARELO + result3.AMARELO}</td>

              <td>{pf1.LARANJA_2 + pf2.LARANJA_2 + pf3.LARANJA_2}</td>
              <td>{pf1.LARANJA_1 + pf2.LARANJA_1 + pf3.LARANJA_1}</td>
              <td>{result1.LARANJA + result2.LARANJA + result3.LARANJA}</td>

              <td>{pf1.MARROM_2 + pf2.MARROM_2 + pf3.MARROM_2}</td>
              <td>{pf1.MARROM_1 + pf2.MARROM_1 + pf3.MARROM_1}</td>
              <td>{result1.MARROM + result2.MARROM + result3.MARROM}</td>

              <td>{pf1.PRETO_1 + pf2.PRETO_1 + pf3.PRETO_1}</td>

              <td>{pf1.BRANCO_1 + pf2.BRANCO_1 + pf3.BRANCO_1}</td>

              <td>{pf1.CINZA_1 + pf2.CINZA_1 + pf3.CINZA_1}</td>
            </tr>
            <tr>
              <th scope="row">%</th>
              <td>{`${(
                ((pf1.AZUL_4 + pf2.AZUL_4 + pf3.AZUL_4) / 45) *
                100
              ).toFixed(1)}`}</td>
              <td>{`${(
                ((pf1.AZUL_3 + pf2.AZUL_3 + pf3.AZUL_3) / 45) *
                100
              ).toFixed(1)}`}</td>
              <td>{`${(
                ((pf1.AZUL_2 + pf2.AZUL_2 + pf3.AZUL_2) / 45) *
                100
              ).toFixed(1)}`}</td>
              <td>{`${(
                ((pf1.AZUL_1 + pf2.AZUL_1 + pf3.AZUL_1) / 45) *
                100
              ).toFixed(1)}`}</td>
              <td>{`${(
                ((result1.AZUL + result2.AZUL + result3.AZUL) / 45) *
                100
              ).toFixed(1)}`}</td>

              <td>{`${(
                ((pf1.VERMELHO_4 + pf2.VERMELHO_4 + pf3.VERMELHO_4) / 45) *
                100
              ).toFixed(1)}`}</td>
              <td>{`${(
                ((pf1.VERMELHO_3 + pf2.VERMELHO_3 + pf3.VERMELHO_3) / 45) *
                100
              ).toFixed(1)}`}</td>
              <td>{`${(
                ((pf1.VERMELHO_2 + pf2.VERMELHO_2 + pf3.VERMELHO_2) / 45) *
                100
              ).toFixed(1)}`}</td>
              <td>{`${(
                ((pf1.VERMELHO_1 + pf2.VERMELHO_1 + pf3.VERMELHO_1) / 45) *
                100
              ).toFixed(1)}`}</td>
              <td>{`${(
                ((result1.VERMELHO + result2.VERMELHO + result3.VERMELHO) /
                  45) *
                100
              ).toFixed(1)}`}</td>

              <td>{`${(
                ((pf1.VERDE_4 + pf2.VERDE_4 + pf3.VERDE_4) / 45) *
                100
              ).toFixed(1)}`}</td>
              <td>{`${(
                ((pf1.VERDE_3 + pf2.VERDE_3 + pf3.VERDE_3) / 45) *
                100
              ).toFixed(1)}`}</td>
              <td>{`${(
                ((pf1.VERDE_2 + pf2.VERDE_2 + pf3.VERDE_2) / 45) *
                100
              ).toFixed(1)}`}</td>
              <td>{`${(
                ((pf1.VERDE_1 + pf2.VERDE_1 + pf3.VERDE_1) / 45) *
                100
              ).toFixed(1)}`}</td>
              <td>{`${(
                ((result1.VERDE + result2.VERDE + result3.VERDE) / 45) *
                100
              ).toFixed(1)}`}</td>

              <td>{`${(
                ((pf1.VIOLETA_3 + pf2.VIOLETA_3 + pf3.VIOLETA_3) / 45) *
                100
              ).toFixed(1)}`}</td>
              <td>{`${(
                ((pf1.VIOLETA_2 + pf2.VIOLETA_2 + pf3.VIOLETA_2) / 45) *
                100
              ).toFixed(1)}`}</td>
              <td>{`${(
                ((pf1.VIOLETA_1 + pf2.VIOLETA_1 + pf3.VIOLETA_1) / 45) *
                100
              ).toFixed(1)}`}</td>
              <td>{`${(
                ((result1.VIOLETA + result2.VIOLETA + result3.VIOLETA) / 45) *
                100
              ).toFixed(1)}`}</td>

              <td>{`${(
                ((pf1.AMARELO_2 + pf2.AMARELO_2 + pf3.AMARELO_2) / 45) *
                100
              ).toFixed(1)}`}</td>
              <td>{`${(
                ((pf1.AMARELO_1 + pf2.AMARELO_1 + pf3.AMARELO_1) / 45) *
                100
              ).toFixed(1)}`}</td>
              <td>{`${(
                ((result1.AMARELO + result2.AMARELO + result3.AMARELO) / 45) *
                100
              ).toFixed(1)}`}</td>

              <td>{`${(
                ((pf1.LARANJA_2 + pf2.LARANJA_2 + pf3.LARANJA_2) / 45) *
                100
              ).toFixed(1)}`}</td>
              <td>{`${(
                ((pf1.LARANJA_1 + pf2.LARANJA_1 + pf3.LARANJA_1) / 45) *
                100
              ).toFixed(1)}`}</td>
              <td>{`${(
                ((result1.LARANJA + result2.LARANJA + result3.LARANJA) / 45) *
                100
              ).toFixed(1)}`}</td>

              <td>{`${(
                ((pf1.MARROM_2 + pf2.MARROM_2 + pf3.MARROM_2) / 45) *
                100
              ).toFixed(1)}`}</td>
              <td>{`${(
                ((pf1.MARROM_1 + pf2.MARROM_1 + pf3.MARROM_1) / 45) *
                100
              ).toFixed(1)}`}</td>
              <td>{`${(
                ((result1.MARROM + result2.MARROM + result3.MARROM) / 45) *
                100
              ).toFixed(1)}`}</td>

              <td>{`${(
                ((pf1.PRETO_1 + pf2.PRETO_1 + pf3.PRETO_1) / 45) *
                100
              ).toFixed(1)}`}</td>

              <td>{`${(
                ((pf1.BRANCO_1 + pf2.BRANCO_1 + pf3.BRANCO_1) / 45) *
                100
              ).toFixed(1)}`}</td>

              <td>{`${(
                ((pf1.CINZA_1 + pf2.CINZA_1 + pf3.CINZA_1) / 45) *
                100
              ).toFixed(1)}`}</td>
            </tr>
          </table>

          <br></br>

          <form className="fichaSizeSDS" onSubmit={handleSubmit(onSubmit)}>
            <h6 className="titleSDS"> SINDROMES</h6>
            <div className="cointentMasterSizeSDS">
              <div className="cointentSizeSDS">

                <div className="PFfull">

                    <div className="PFleft">
                        <div className="cointentSizePF">
                            <h5>A) NORMALIDADE:</h5>
                            <div className="DivfichaSizePF">
                            <h6>AZUL:</h6>
                            <input
                                type="text"
                                value={`${(
                                ((result1.AZUL + result2.AZUL + result3.AZUL) / 45) *
                                100
                                ).toFixed(1)}%`}
                                readOnly
                            />
                            </div>
                            <div className="DivfichaSizePF">
                            <h6>VERDE:</h6>
                            <input
                                type="text"
                                value={`${(
                                ((result1.VERDE + result2.VERDE + result3.VERDE) /
                                    45) *
                                100
                                ).toFixed(1)}%`}
                                readOnly
                            />
                            </div>
                            <div className="DivfichaSizePF">
                            <h6>VERMELHO:</h6>
                            <input
                                type="text"
                                value={`${(
                                ((result1.VERMELHO +
                                    result2.VERMELHO +
                                    result3.VERMELHO) /
                                    45) *
                                100
                                ).toFixed(1)}%`}
                                readOnly
                            />
                            </div>
                            <div className="DivfichaSizePF">
                            <h6>TOTAL:</h6>
                            <input
                                type="text"
                                value={`${(
                                ((result1.AZUL +
                                    result2.AZUL +
                                    result3.AZUL +
                                    result1.VERDE +
                                    result2.VERDE +
                                    result3.VERDE +
                                    result1.VERMELHO +
                                    result2.VERMELHO +
                                    result3.VERMELHO) /
                                    45) *
                                100
                                ).toFixed(1)}%`}
                                readOnly
                            />
                            </div>
                        </div>

                        <div className="cointentSizePF">
                            <h5>B) ESTÍMULO:</h5>
                            <div className="DivfichaSizePF">
                            <h6>VERMELHO:</h6>
                            <input
                                type="text"
                                value={`${(
                                ((result1.VERMELHO +
                                    result2.VERMELHO +
                                    result3.VERMELHO) /
                                    45) *
                                100
                                ).toFixed(1)}%`}
                                readOnly
                            />
                            </div>
                            <div className="DivfichaSizePF">
                            <h6>AMARELO:</h6>
                            <input
                                type="text"
                                value={`${(
                                ((result1.AMARELO +
                                    result2.AMARELO +
                                    result3.AMARELO) /
                                    45) *
                                100
                                ).toFixed(1)}%`}
                                readOnly
                            />
                            </div>
                            <div className="DivfichaSizePF">
                            <h6>LARANJA:</h6>
                            <input
                                type="text"
                                value={`${(
                                ((result1.LARANJA +
                                    result2.LARANJA +
                                    result3.LARANJA) /
                                    45) *
                                100
                                ).toFixed(1)}%`}
                                readOnly
                            />
                            </div>
                            <div className="DivfichaSizePF">
                            <h6>TOTAL:</h6>
                            <input
                                type="text"
                                value={`${(
                                ((result1.VERMELHO +
                                    result2.VERMELHO +
                                    result3.VERMELHO +
                                    result1.AMARELO +
                                    result2.AMARELO +
                                    result3.AMARELO +
                                    result1.LARANJA +
                                    result2.LARANJA +
                                    result3.LARANJA) /
                                    45) *
                                100
                                ).toFixed(1)}%`}
                                readOnly
                            />
                            </div>
                        </div>

                        <div className="cointentSizePF">
                            <h5>C) INCOLOR:</h5>
                            <div className="DivfichaSizePF">
                            <h6>PRETO:</h6>
                            <input
                                type="text"
                                value={`${(
                                ((pf1.PRETO_1 + pf2.PRETO_1 + pf3.PRETO_1) / 45) *
                                100
                                ).toFixed(1)}%`}
                                readOnly
                            />
                            </div>
                            <div className="DivfichaSizePF">
                            <h6>BRANCO:</h6>
                            <input
                                type="text"
                                value={`${(
                                ((pf1.BRANCO_1 + pf2.BRANCO_1 + pf3.BRANCO_1) / 45) *
                                100
                                ).toFixed(1)}%`}
                                readOnly
                            />
                            </div>
                            <div className="DivfichaSizePF">
                            <h6>CINZA:</h6>
                            <input
                                type="text"
                                value={`${(
                                ((pf1.CINZA_1 + pf2.CINZA_1 + pf3.CINZA_1) / 45) *
                                100
                                ).toFixed(1)}%`}
                                readOnly
                            />
                            </div>
                            <div className="DivfichaSizePF">
                            <h6>TOTAL:</h6>
                            <input
                                type="text"
                                value={`${(
                                ((pf1.PRETO_1 +
                                    pf2.PRETO_1 +
                                    pf3.PRETO_1 +
                                    pf1.BRANCO_1 +
                                    pf2.BRANCO_1 +
                                    pf3.BRANCO_1 +
                                    pf1.CINZA_1 +
                                    pf2.CINZA_1 +
                                    pf3.CINZA_1) /
                                    45) *
                                100
                                ).toFixed(1)}%`}
                                readOnly
                            />
                            </div>
                        </div>

                        <div className="cointentSizePF">
                            <h5>D) FRIA:</h5>
                            <div className="DivfichaSizePF">
                            <h6>AZUL:</h6>
                            <input
                                type="text"
                                value={`${(
                                ((result1.AZUL + result2.AZUL + result3.AZUL) / 45) *
                                100
                                ).toFixed(1)}%`}
                                readOnly
                            />
                            </div>
                            <div className="DivfichaSizePF">
                            <h6>VIOLETA:</h6>
                            <input
                                type="text"
                                value={`${(
                                ((result1.VIOLETA +
                                    result2.VIOLETA +
                                    result3.VIOLETA) /
                                    45) *
                                100
                                ).toFixed(1)}%`}
                                readOnly
                            />
                            </div>
                            <div className="DivfichaSizePF">
                            <h6>VERDE:</h6>
                            <input
                                type="text"
                                value={`${(
                                ((result1.VERDE + result2.VERDE + result3.VERDE) /
                                    45) *
                                100
                                ).toFixed(1)}%`}
                                readOnly
                            />
                            </div>
                            <div className="DivfichaSizePF">
                            <h6>TOTAL:</h6>
                            <input
                                type="text"
                                value={`${(
                                ((result1.AZUL +
                                    result2.AZUL +
                                    result3.AZUL +
                                    result1.VIOLETA +
                                    result2.VIOLETA +
                                    result3.VIOLETA +
                                    result1.VERDE +
                                    result2.VERDE +
                                    result3.VERDE) /
                                    45) *
                                100
                                ).toFixed(1)}%`}
                                readOnly
                            />
                            </div>
                        </div>
                    </div>

                    <div className="Pfright">
                        <div className="cointentSizePF">
                            <h5>E) DE PROPULSÃO:</h5>
                            <div className="DivfichaSizePF">
                            <h6>VERDE:</h6>
                            <input
                                type="text"
                                value={`${(
                                ((result1.VERDE + result2.VERDE + result3.VERDE) /
                                    45) *
                                100
                                ).toFixed(1)}%`}
                                readOnly
                            />
                            </div>
                            <div className="DivfichaSizePF">
                            <h6>MARROM:</h6>
                            <input
                                type="text"
                                value={`${(
                                ((result1.MARROM + result2.MARROM + result3.MARROM) /
                                    45) *
                                100
                                ).toFixed(1)}%`}
                                readOnly
                            />
                            </div>
                            <div className="DivfichaSizePF">
                            <h6>AMARELO:</h6>
                            <input
                                type="text"
                                value={`${(
                                ((result1.AMARELO +
                                    result2.AMARELO +
                                    result3.AMARELO) /
                                    45) *
                                100
                                ).toFixed(1)}%`}
                                readOnly
                            />
                            </div>
                            <div className="DivfichaSizePF">
                            <h6>TOTAL:</h6>
                            <input
                                type="text"
                                value={`${(
                                ((result1.VERDE +
                                    result2.VERDE +
                                    result3.VERDE +
                                    result1.MARROM +
                                    result2.MARROM +
                                    result3.MARROM +
                                    result1.AMARELO +
                                    result2.AMARELO +
                                    result3.AMARELO) /
                                    45) *
                                100
                                ).toFixed(1)}%`}
                                readOnly
                            />
                            </div>
                        </div>

                        <div className="cointentSizePF">
                            <h5>F) NÃO ESPECTRAL:</h5>
                            <div className="DivfichaSizePF">
                            <h6>INCOLOR:</h6>
                            <input
                                type="text"
                                value={`${(
                                ((pf1.PRETO_1 +
                                    pf2.PRETO_1 +
                                    pf3.PRETO_1 +
                                    pf1.BRANCO_1 +
                                    pf2.BRANCO_1 +
                                    pf3.BRANCO_1 +
                                    pf1.CINZA_1 +
                                    pf2.CINZA_1 +
                                    pf3.CINZA_1) /
                                    45) *
                                100
                                ).toFixed(1)}%`}
                                readOnly
                            />
                            </div>
                            <div className="DivfichaSizePF">
                            <h6>MARROM:</h6>
                            <input
                                type="text"
                                value={`${(
                                ((result1.MARROM + result2.MARROM + result3.MARROM) /
                                    45) *
                                100
                                ).toFixed(1)}%`}
                                readOnly
                            />
                            </div>
                            <div className="DivfichaSizePF">
                            <h6>TOTAL:</h6>
                            <input
                                type="text"
                                value={`${(
                                ((result1.MARROM +
                                    result2.MARROM +
                                    result3.MARROM +
                                    pf1.PRETO_1 +
                                    pf2.PRETO_1 +
                                    pf3.PRETO_1 +
                                    pf1.BRANCO_1 +
                                    pf2.BRANCO_1 +
                                    pf3.BRANCO_1 +
                                    pf1.CINZA_1 +
                                    pf2.CINZA_1 +
                                    pf3.CINZA_1) /
                                    45) *
                                100
                                ).toFixed(1)}%`}
                                readOnly
                            />
                            </div>
                        </div>

                        <div className="cointentSizePF">
                            <h5>G) EXCITAÇÃO AFETIVA:</h5>
                            <div className="DivfichaSizePF">
                            <h6>LARANJA:</h6>
                            <input
                                type="text"
                                value={`${(
                                ((result1.LARANJA +
                                    result2.LARANJA +
                                    result3.LARANJA) /
                                    45) *
                                100
                                ).toFixed(1)}%`}
                                readOnly
                            />
                            </div>
                            <div className="DivfichaSizePF">
                            <h6>VERDE:</h6>
                            <input
                                type="text"
                                value={`${(
                                ((result1.VERDE + result2.VERDE + result3.VERDE) /
                                    45) *
                                100
                                ).toFixed(1)}%`}
                                readOnly
                            />
                            </div>
                            <div className="DivfichaSizePF">
                            <h6>VIOLETA:</h6>
                            <input
                                type="text"
                                value={`${(
                                ((result1.VIOLETA +
                                    result2.VIOLETA +
                                    result3.VIOLETA) /
                                    45) *
                                100
                                ).toFixed(1)}%`}
                                readOnly
                            />
                            </div>
                            <div className="DivfichaSizePF">
                            <h6>TOTAL:</h6>
                            <input
                                type="text"
                                value={`${(
                                ((result1.LARANJA +
                                    result2.LARANJA +
                                    result3.LARANJA +
                                    result1.VERDE +
                                    result2.VERDE +
                                    result3.VERDE +
                                    result1.VIOLETA +
                                    result2.VIOLETA +
                                    result3.VIOLETA) /
                                    45) *
                                100
                                ).toFixed(1)}%`}
                                readOnly
                            />
                            </div>
                        </div>

                        <div className="cointentSizePF">
                            <h5>H) HISTERIFORME:</h5>
                            <div className="DivfichaSizePF">
                            <h6>VERMELHO:</h6>
                            <input
                                type="text"
                                value={`${(
                                ((result1.VERMELHO +
                                    result2.VERMELHO +
                                    result3.VERMELHO) /
                                    45) *
                                100
                                ).toFixed(1)}%`}
                                readOnly
                            />
                            </div>
                            <div className="DivfichaSizePF">
                            <h6>VERDE:</h6>
                            <input
                                type="text"
                                value={`${(
                                ((result1.VERDE + result2.VERDE + result3.VERDE) /
                                    45) *
                                100
                                ).toFixed(1)}%`}
                                readOnly
                            />
                            </div>
                            <div className="DivfichaSizePF">
                            <h6>VIOLETA:</h6>
                            <input
                                type="text"
                                value={`${(
                                ((result1.VIOLETA +
                                    result2.VIOLETA +
                                    result3.VIOLETA) /
                                    45) *
                                100
                                ).toFixed(1)}%`}
                                readOnly
                            />
                            </div>
                            <div className="DivfichaSizePF">
                            <h6>TOTAL:</h6>
                            <input
                                type="text"
                                value={`${(
                                ((result1.VIOLETA +
                                    result2.VIOLETA +
                                    result3.VIOLETA +
                                    result1.VERDE +
                                    result2.VERDE +
                                    result3.VERDE +
                                    result1.VERMELHO +
                                    result2.VERMELHO +
                                    result3.VERMELHO) /
                                    45) *
                                100
                                ).toFixed(1)}%`}
                                readOnly
                            />
                            </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>

            <br></br>

            <div>
              <Button
                className="apagarResBut"
                variant="danger"
                onClick={onSubmit}
              >
                Apagar Resposta
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
