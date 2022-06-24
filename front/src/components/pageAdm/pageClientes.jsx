import ClientNavbar from "../shared/clientNavbar";
import { Link } from "react-router-dom";
import SideBar from "../shared/sideBar";
import ModalCadastro from "./shared/modalCadastro";
import React, { useState, useEffect } from 'react';
import Success from "../testes/shared/success"
import { aplicar, getUsuarios } from '../../services/admService';
import ButtonTeste from "./shared/buttonTest";
import ModalCancelar from "./shared/modalCancelar";
import ModalAplicar from "./shared/modalAplicar";
import ButtonUser from "./shared/buttonUser";
import { MdSearch } from "react-icons/md";


import Table from 'react-bootstrap/Table'

export default (props) => {

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

    const [usuarioAtual, setUsuarioAtual] = useState(0);
    const [testeIdAtual, setTesteIdAtual] = useState(0);
    const [testeAtual, setTesteAtual] = useState("NULL");
    const [NomeAtual, setNomeAtual] = useState("NULL");

    const [searchTerm, setSearchTerm] = useState("");

    const [modalShow, setModalShow] = useState(false);
    const [confirmModal, setconfirmModal] = useState(false);

    const [AplicarShow, setAplicarShow] = useState(false);
    const [AplicarModal, setAplicarModal] = useState(false);

    const [CancelarShow, setCancelarShow] = useState(false);
    const [CancelarModal, setCancelarModal] = useState(false);

    let trimString = function (string) {
        let length = 22;
        return string.length > length ?
            string.substring(0, length) + '...' :
            string;
    };

    function handleChange(value) {

        setUsuarioAtual(value.usuario);
        setTesteIdAtual(value.testeId);
        setNomeAtual(value.nome);
        setTesteAtual(value.teste);

        if (value.modal === 1) {
            setAplicarShow(true);
        }
        if (value.modal === 2) {
            setCancelarShow(true);
        }
    }

    useEffect(async () => {

        setconfirmModal(false);
        setAplicarModal(false);
        setCancelarModal(false);

        const usuarios = await getUsuarios();
        usuarios.sort(byProperty("nome"));

        const mapping = usuarios.filter((val) => {
            if (searchTerm == "") {
                return val
            } else if (val.nome.toLowerCase().includes(searchTerm.toLowerCase())) {
                return val
            }
        }).map((usuario) => (
            <tr>
                <td>{usuario.senha}</td>
                <td><ButtonUser usuario={usuario.id} /> {trimString(usuario.nome)} </td>
                <td>{usuario.modalidade}</td>
                <td> <ButtonTeste titulo="CADASTRO" onChange={handleChange} testeId={3} usuario={usuario.id} nome={usuario.nome} provas={usuario.provas} /> </td>
                <td> <ButtonTeste titulo="PF" onChange={handleChange} testeId={6} usuario={usuario.id} nome={usuario.nome} provas={usuario.provas} /> </td>
                <td> <ButtonTeste titulo="INVINT" onChange={handleChange} testeId={5} usuario={usuario.id} nome={usuario.nome} provas={usuario.provas} /> </td>
                <td> <ButtonTeste titulo="G-36" onChange={handleChange} testeId={4} usuario={usuario.id} nome={usuario.nome} provas={usuario.provas} /> </td>
                <td> <ButtonTeste titulo="APPG" onChange={handleChange} testeId={2} usuario={usuario.id} nome={usuario.nome} provas={usuario.provas} /> </td>
                <td> <ButtonTeste titulo="SDS" onChange={handleChange} testeId={7} usuario={usuario.id} nome={usuario.nome} provas={usuario.provas} /> </td>
                <td> <ButtonTeste titulo="AIP" onChange={handleChange} testeId={1} usuario={usuario.id} nome={usuario.nome} provas={usuario.provas} /> </td>
            </tr>
        ));
        setData(mapping);
    }, [modalShow, AplicarShow, CancelarShow, NomeAtual, searchTerm]);

    return (
        <div>
            {confirmModal && <Success titulo="Usuário Criado com Sucesso!" />}
            {AplicarModal && <Success titulo="Teste Enviado com Sucesso!" />}
            {CancelarModal && <Success titulo="Teste Cancelado Sucesso!" />}

            <ClientNavbar titulo="Olá!"> </ClientNavbar>

            <div className="admContent">
                <div className="admSideBar">
                    <SideBar></SideBar>
                </div>

                <div className="admTable">
                    <div className="admHead">
                        <h2>Clientes Ativos</h2>
                        <button className="btn-login-add" type="submit" onClick={() => setModalShow(true)}>
                            Adicionar Cliente
                        </button>
                    </div>

                    <div className="BuscaCliente">
                        <input className="campoBusca form-control" type="text" placeholder="Buscar..." onChange={event => { setSearchTerm(event.target.value) }}></input>
                        <MdSearch className="iconeBusca"></MdSearch>
                    </div>


                    <ModalCadastro
                        show={modalShow}
                        confirm={setconfirmModal}
                        onHide={() => setModalShow(false)}
                    />

                    <ModalAplicar
                        show={AplicarShow}
                        confirm={setAplicarModal}
                        usuario={usuarioAtual}
                        testeId={testeIdAtual}
                        nome={NomeAtual}
                        teste={testeAtual}
                        onHide={() => setAplicarShow(false)}
                    />

                    <ModalCancelar
                        show={CancelarShow}
                        confirm={setCancelarModal}
                        usuario={usuarioAtual}
                        testeId={testeIdAtual}
                        nome={NomeAtual}
                        teste={testeAtual}
                        onHide={() => setCancelarShow(false)}
                    />

                    {data.length != 0 &&
                        <Table striped borderless hover >
                            <thead>

                                <tr>
                                    <th>Senha</th>
                                    <th>Nome</th>
                                    <th>Modalidade</th>
                                    <th></th>
                                    <th></th>
                                    <th></th>
                                    <th></th>
                                    <th></th>
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