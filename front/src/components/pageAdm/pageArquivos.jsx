import ClientNavbar from "../shared/clientNavbar";
import { Link, useParams } from "react-router-dom";
import SideBar from "../shared/sideBar";
import ModalCadastro from "./shared/modalCadastro";
import React, { useState, useEffect } from 'react';
import Success from "../testes/shared/success"
import { aplicar, getArquivados } from '../../services/admService';
import ButtonTeste from "./shared/buttonTest";
import ModalCancelar from "./shared/modalCancelar";
import ModalAplicar from "./shared/modalAplicar";
import ButtonUser from "./shared/buttonUser";
import Table from 'react-bootstrap/Table'
import ButtonSintese from "./shared/buttonSintese";
import { MdSearch } from "react-icons/md";


export default (props) => {

    let params = useParams();

    var byProperty = function (prop) {
        return function (a, b) {
            if (typeof a[prop] == "number") {
                return (a[prop] - b[prop]);
            } else {
                return ((a[prop] < b[prop]) ? -1 : ((a[prop] > b[prop]) ? 1 : 0));
            }
        };
    };

    const [data, setData] = useState("null");

    const [NomeAtual, setNomeAtual] = useState("NULL");
    const [modalidadeAtual, setModalidade] = useState("NULL");

    const [searchTerm, setSearchTerm] = useState("");

    let formatData = function (updated) {
        const meses = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"];
        let feito = new Date((updated));
        let dataFormatada = ((feito.getDate() + "/" + meses[(feito.getMonth())] + "/" + feito.getFullYear()));
        return dataFormatada
    }

    let trimString = function (string) {
        let length = 22;
        return string.length > length ?
            string.substring(0, length) + '...' :
            string;
    };

    useEffect(async () => {

        let selectMod = params.modalidade
        setModalidade(selectMod)
        const usuariosResponse = await getArquivados(selectMod);
        const usuarios = usuariosResponse.data;
        usuarios.sort(byProperty("nome"));

        const mapping = usuarios.filter((val) => {
            if (searchTerm == "") {
                return val
            } else if (val.nome.toLowerCase().includes(searchTerm.toLowerCase())) {
                return val
            }
        }).map((usuario) => (
            <tr>
                <td> {usuario.senha} </td>
                <td> <ButtonUser usuario={usuario.id} /> {trimString(usuario.nome)} </td>
                <td> {usuario.modalidade} </td>
                <td> {formatData(usuario.updatedAt)} </td>
                <td> <ButtonSintese usuario={usuario.id} nome={usuario.nome} /> </td>
                <td> <ButtonTeste titulo="PF" testeId={6} usuario={usuario.id} nome={usuario.nome} provas={usuario.provas} /> </td>
            </tr>
        ));
        setData(mapping);
    }, [NomeAtual, params, searchTerm]);

    return (
        <div>
            <ClientNavbar titulo="Olá!"> </ClientNavbar>

            <div className="admContent">
                <div className="admSideBar">
                    <SideBar></SideBar>
                </div>

                <div className="admTable">
                    <div className="admHead">
                        <h2>Arquivos</h2>
                    </div>
                    <h2 className="clientesST">Clientes {modalidadeAtual}</h2>

                    <div className="BuscaCliente">
                        <input className="campoBusca form-control" type="text" placeholder="Buscar..." onChange={event => { setSearchTerm(event.target.value) }}></input>
                        <MdSearch className="iconeBusca"></MdSearch>
                    </div>

                    {data.length != 0 &&
                        <Table striped borderless hover >
                            <thead>

                                <tr>
                                    <th>Senha</th>
                                    <th>Nome</th>
                                    <th>Modalidade</th>
                                    <th>Finalizado em:</th>
                                    <th></th>
                                    <th></th>
                                </tr>

                            </thead>
                            <tbody>
                                {data}
                            </tbody>
                        </Table>}

                    {data.length == 0 &&
                        <h4>Não foi encontrado resultados...</h4>
                    }

                </div>
            </div>

        </div>
    );
}