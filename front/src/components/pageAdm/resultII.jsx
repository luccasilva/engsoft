import ClientNavbar from "../shared/clientNavbar";
import { Link, useParams } from "react-router-dom";
import SideBar from "../shared/sideBar";
import Button from 'react-bootstrap/Button'
import React, { useState, useEffect } from 'react';
import { resultados } from '../../services/admService';
import ModalApagar from "./shared/modalApagar";
import PopChart from "../shared/graph"
import { useForm } from "react-hook-form";


export default (props) => {

    let params = useParams();

    const [nome, setNome] = useState(["null"]);
    const [dados, setDados] = useState([]);
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
        const resultado = await resultados(params.usuarioId, 5);
        const result = resultado.data;
        setNome(result.nome);
        setDados(result.provas[0].resultado)

        const dados = result.provas[0].resultado;
        setValores([dados.CF,
                    dados.CB,
                    dados.C,
                    dados.P,
                    dados.B,
                    dados.S,
                    dados.L,
                    dados.A,
                    dados.M])

        const meses = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"];
        let feito = new Date((result.provas[0].updatedAt));
        let dataFormatada = ((feito.getDate() + "/" + meses[(feito.getMonth())] + "/" + feito.getFullYear() + " às " + feito.getHours() + ":" + feito.getMinutes()));

        setFeito(dataFormatada)
    }, []);

    return (
        <div>
            <ModalApagar
                show={CancelarShow}
                confirm={setCancelarModal}
                usuario={params.usuarioId}
                testeId="5"
                nome={nome}
                teste="Inventário"
                onHide={() => setCancelarShow(false)}
            />

            <ClientNavbar titulo="Olá!"> </ClientNavbar>
            <div className="admContent">
                <div className="admSideBar">
                    <SideBar></SideBar>
                </div>
                <div className="admTable">
                    <div className="admHead">
                        <h2>INVINT de {nome}</h2>
                    </div>
                    <div className="dataHead">
                        <h6 >Respondido em {feitoEm}</h6>
                    </div>

                    <PopChart
                        categories={['CF', 'CB', 'C', 'P', 'B', 'S', 'L', 'A', 'M']}
                        valores={valores}
                    />

                    <form className="fichaSizeG36" onSubmit={handleSubmit(onSubmit)}>

                        <div className="DivfichaSizeSDS">
                            <h6>CF:</h6>
                            <input type="text" value={dados.CF} readOnly {...register("CF", { required: (true) })} />
                            <input type="text" value={`${((dados.CF / 18) * 100).toFixed(1)}`} readOnly />
                            <h6>%</h6>
                        </div>

                        <div className="DivfichaSizeSDS">
                            <h6>CB:</h6>
                            <input type="text" value={dados.CB} readOnly {...register("CB", { required: (true) })} />
                            <input type="text" value={`${((dados.CB / 18) * 100).toFixed(1)}`} readOnly />
                            <h6>%</h6>
                        </div>

                        <div className="DivfichaSizeSDS">
                            <h6>C:</h6>
                            <input type="text" value={dados.C} readOnly {...register("C", { required: (true) })} />
                            <input type="text" value={`${((dados.C / 18) * 100).toFixed(1)}`} readOnly />
                            <h6>%</h6>
                        </div>

                        <div className="DivfichaSizeSDS">
                            <h6>P:</h6>
                            <input type="text" value={dados.P} readOnly {...register("P", { required: (true) })} />
                            <input type="text" value={`${((dados.P / 18) * 100).toFixed(1)}`} readOnly />
                            <h6>%</h6>
                        </div>

                        <div className="DivfichaSizeSDS">
                            <h6>B:</h6>
                            <input type="text" value={dados.B} readOnly {...register("B", { required: (true) })} />
                            <input type="text" value={`${((dados.B / 18) * 100).toFixed(1)}`} readOnly />
                            <h6>%</h6>
                        </div>

                        <div className="DivfichaSizeSDS">
                            <h6>S:</h6>
                            <input type="text" value={dados.S} readOnly {...register("S", { required: (true) })} />
                            <input type="text" value={`${((dados.S / 18) * 100).toFixed(1)}`} readOnly />
                            <h6>%</h6>
                        </div>

                        <div className="DivfichaSizeSDS">
                            <h6>L:</h6>
                            <input type="text" value={dados.L} readOnly {...register("L", { required: (true) })} />
                            <input type="text" value={`${((dados.L / 18) * 100).toFixed(1)}`} readOnly />
                            <h6>%</h6>
                        </div>

                        <div className="DivfichaSizeSDS">
                            <h6>A:</h6>
                            <input type="text" value={dados.A} readOnly {...register("A", { required: (true) })} />
                            <input type="text" value={`${((dados.A / 18) * 100).toFixed(1)}`} readOnly />
                            <h6>%</h6>
                        </div>

                        <div className="DivfichaSizeSDS">
                            <h6>M:</h6>
                            <input type="text" value={dados.M} readOnly {...register("M", { required: (true) })} />
                            <input type="text" value={`${((dados.M / 18) * 100).toFixed(1)}`} readOnly />
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