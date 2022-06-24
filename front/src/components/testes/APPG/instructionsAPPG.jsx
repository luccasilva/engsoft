
import "../../../assets/css/testes.css"
import Table from 'react-bootstrap/Table'
import { AiFillCheckSquare } from "react-icons/ai";
import { AiOutlineBorder } from "react-icons/ai";


export default (props) => {
    return (
    <div>
            <div className="quadro">
                <div className="instr1"><p className="instr">1 - Leia as instruções</p></div>
                <div className="instr2"><p className="instr">2 - Veja os exemplos</p></div>
                <div className="instr3"><p className="instr">3 - Inicie o questionário</p></div>
            </div>

            <br></br>

            <div className="quadroInsrtu">
                <div className="instr1">
                    <p className="instrTitle">Instruções</p>
                    <p> Nesta atividade você encontrará 100 pares de frases. Escolha, em cada par, a frase que melhor expressar o seu modo de ser, ou o que mais se aproximar dele.</p>
                    <p> Escolha somente UMA em cada par de frases. Não omita nenhuma resposta.</p>
                </div>
            </div>

            <br></br>

            <div className="quadroEx">
                <div className="instr2">
                    <p className="instrTitle">Exemplos</p>
                   
                    <Table striped className="exTable">
                        <thead>
                            <tr><th>#</th><th>Se você se indentifica mais com atividades físicas:</th><th></th></tr>
                        </thead>
                        <tbody>
                            <tr>
                            <td>A</td>
                            <td>Gosto de falar muito</td>
                            <td><AiOutlineBorder className="iconex"/></td>
                            </tr>
                            <tr>
                            <td>B</td>
                            <td>Gosto de atividades físicas</td>
                            <td><AiFillCheckSquare className="iconex2"/></td>
                            </tr>
                        </tbody> <br></br>
                        </Table>

                </div>
            </div>


    </div>
      );
    }