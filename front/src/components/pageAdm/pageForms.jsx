import ClientNavbar from "../shared/clientNavbar";
import SideBar from "../shared/sideBar";
import React, { useState, useEffect } from 'react';
import Success from "../testes/shared/success"
import ModalAplicar from "./shared/modalAplicar";
import { MdSearch } from "react-icons/md";
import Table from 'react-bootstrap/Table'
import { getProfissoes } from "../../services/cursoService";
import ModalAddCurso from "./shared/modalAddCurso";
import ModalEditarTeste from "./shared/modalEditarTeste";
import ButtonCurso from "./shared/buttonCurso";

export default (props) => {


    const [data, setData] = useState("null");
    const [todoscursos, setCursos] = useState([]);
    const [cursoIdAtual, setCursoIdAtual] = useState(0);
    const [NomeAtual, setNomeAtual] = useState("NULL");

    const [searchTerm, setSearchTerm] = useState("");

    const [modalShow, setModalShow] = useState(false);
    const [confirmModal, setconfirmModal] = useState(false);

    const [AplicarShow, setAplicarShow] = useState(false);
    const [AplicarModal, setAplicarModal] = useState(false);

    const [CancelarShow, setCancelarShow] = useState(false);
    const [CancelarModal, setCancelarModal] = useState(false);

    var byProperty = function (prop) {
        return function (a, b) {
            if (typeof a[prop] == "number") {
                return (a[prop] - b[prop]);
            } else {
                return ((a[prop] < b[prop]) ? -1 : ((a[prop] > b[prop]) ? 1 : 0));
            }
        };
    };

    let trimString = function (string) {
        let length = 22;
        return string.length > length ?
            string.substring(0, length) + '...' :
            string;
    };

    function handleChange(value) {
        setCursoIdAtual(value.cursoId);
        setNomeAtual(value.cursoNome);

        setAplicarShow(true);
    }

    useEffect(async () => {

        setconfirmModal(false);
        setAplicarModal(false);
        setCancelarModal(false);

        const cursos = await getProfissoes();
        setCursos(cursos);

        cursos.sort(byProperty("nome"));

        const mapping = cursos.filter((val) => {
            if (searchTerm == "") {
                return val
            } else if (val.nome.toLowerCase().includes(searchTerm.toLowerCase())) {
                return val
            }
        }).map((curso) => (
            <tr>
                <td>{curso.nome}</td>
                <td>{curso.descricao}</td>
                <td><ButtonCurso cursoId={curso.id} cursoNome={curso.nome} onChange={handleChange}/></td>
            </tr>
        ));
        setData(mapping);
    }, [modalShow, AplicarShow, CancelarShow, NomeAtual, searchTerm]);

    return (
        <div>
            {confirmModal && <Success titulo="Profissão Criada com Sucesso!" />}
            {AplicarModal && <Success titulo="Profissão Alterada com Sucesso!" />}
            {CancelarModal && <Success titulo="Profissão Deletada com Sucesso!" />}

            <ClientNavbar titulo="Olá!"> </ClientNavbar>

            <div className="admContent">
                <div className="admSideBar">
                    <SideBar></SideBar>
                </div>

                <div className="admTable">
                    <div className="admHead">
                        <h2>Página de Profissões</h2>
                        <button className="btn-login-add" onClick={() => setModalShow(true)}>
                            Adicionar Profissão
                        </button>
                    </div>

                    <div className="BuscaCliente">
                        <input className="campoBusca form-control" type="text" placeholder="Buscar..." onChange={event => { setSearchTerm(event.target.value) }}></input>
                        <MdSearch className="iconeBusca"></MdSearch>
                    </div>


                    <ModalAddCurso
                        show={modalShow}
                        confirm={setconfirmModal}
                        onHide={() => setModalShow(false)}
                    />

                    <ModalEditarTeste
                        key = {cursoIdAtual}
                        show={AplicarShow}
                        confirm={setAplicarModal}
                        delete={setCancelarModal}
                        cursoId={cursoIdAtual}
                        cursoNome={(todoscursos.find((curso) => curso.id == cursoIdAtual) || {}).nome}
                        cursoDesc={(todoscursos.find((curso) => curso.id == cursoIdAtual) || {}).descricao}
                        cursoSite={(todoscursos.find((curso) => curso.id == cursoIdAtual) || {}).site}
                        nome={NomeAtual}
                        onHide={() => setAplicarShow(false)}
                    />

                    {data.length != 0 &&
                        <Table striped borderless hover >
                            <thead>

                                <tr>
                                    <th>Profissão</th>
                                    <th>Descrição</th>
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