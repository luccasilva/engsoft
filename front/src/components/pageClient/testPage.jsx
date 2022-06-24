import ClientNavbar from "../shared/clientNavbar";
import IntroSection from '../shared/introSection';
import Table from 'react-bootstrap/Table'
import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { listagem } from '../../services/testeService';

export default (props) => {

    const [data, setData] = useState("null");
    const [AIP, setAIP] = useState(false);
    const [APPG, setAPPG] = useState(false);
    const [FICHA, setFICHA] = useState(false);
    const [G36, setG36] = useState(false);
    const [II, setII] = useState(false);
    const [PF, setPF] = useState(false);
    const [SDS, setSDS] = useState(false);

    useEffect(async () => {
        const promise = await listagem();
        setData(promise);

        for (var i = 0; i < promise.provas.length; i++) {
            if (promise.provas[i].respostas === null) {
                switch (promise.provas[i].teste_id) {
                    case 1:
                        setAIP(true);
                        break;
                    case 2:
                        setAPPG(true);
                        break;
                    case 3:
                        setFICHA(true);
                        break;
                    case 4:
                        setG36(true);
                        break;
                    case 5:
                        setII(true);
                        break;
                    case 6:
                        setPF(true);
                        break;
                    case 7:
                        setSDS(true);
                        break;
                    default:
                        break;
                }
            }
        }

    }, []);

    return (
        <div>
            <ClientNavbar titulo={`Olá, ${data.nome}!`}> </ClientNavbar>

            <IntroSection>

                <h4><b>TESTES DISPONÍVEIS</b></h4>

                <br></br>

                {!AIP && !APPG && !FICHA && !G36 && !II && !PF && !SDS &&
                    <div>
                        <h5>Não há testes para você responder no momento!</h5>

                        <h6>Aguarde as instruções do profissional responsável pelo
                            seu atendimento.</h6>
                    </div>}


                <Table striped borderless hover >
                    <thead>

                        <tr>
                        </tr>

                    </thead>
                    <tbody>
                        {FICHA &&
                            <tr>

                                <td><b>CADASTRO</b></td>
                                <td><b><Link to="/ficha" className="linkIcon">Responder Agora</Link></b></td>
                            </tr>
                        }
                        {PF &&
                            <tr>

                                <td><b>PF</b></td>
                                <td><b><Link to="/pfister" className="linkIcon">Responder Agora</Link></b></td>
                            </tr>
                        }
                        {II &&
                            <tr>
                                <td><b>INVINT</b></td>
                                <td><b><Link to="/inventario" className="linkIcon">Responder Agora</Link></b></td>
                            </tr>
                        }
                        {G36 &&
                            <tr>

                                <td><b>G-36</b></td>
                                <td><b><Link to="/g36" className="linkIcon">Responder Agora</Link></b></td>
                            </tr>
                        }
                        {APPG &&

                            <tr>

                                <td><b>APPG</b></td>
                                <td><b><Link to="/appg" className="linkIcon">Responder Agora</Link></b></td>
                            </tr>
                        }
                        {SDS &&
                            <tr>

                                <td><b>SDS</b></td>
                                <td><b><Link to="/sds" className="linkIcon">Responder Agora</Link></b></td>
                            </tr>
                        }
                        {AIP &&
                            <tr>

                                <td><b>AIP</b></td>
                                <td><b><Link to="/aip" className="linkIcon">Responder Agora</Link></b></td>
                            </tr>
                        }
                    </tbody>
                </Table>

            </IntroSection>
        </div>
    );
}