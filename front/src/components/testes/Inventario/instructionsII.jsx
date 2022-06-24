
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
                    <p> Nesta tarefa você encontrará indicação de uma série de atividades. Essas atividades aparecem aos pares.</p>
                    <p> - Considere um par de cada vez, examine as duas atividades indicadas e marque a que você gostaria mais de realizar, selecionando a opção correspondente. </p>
                    <p> - Se você gostar igualmente das duas atividades, selecione ambas. </p>
                    <p> - No caso de não gostar de nenhuma delas, selecione a opção "C", nenhuma das opções. </p>
                    <p> Ao fazer as escolhas, pense apenas no interesse que você tem pelas atividades indicadas em cada quadrado, sem se preocupar com a sua capacidade ou jeito para realizá-las. Examine todas as opções e não deixe nenhuma sem marcar.</p>
                </div>
            </div>

            <br></br>

            <div className="quadroEx">
                <div className="instr2">
                    <p className="instrTitle">Exemplos</p>
                   
                    <Table striped className="exTable">
                        <thead>
                            <tr><th>#</th><th>Caso tenha interesse apenas em futebol:</th><th></th></tr>
                        </thead>
                        <tbody>
                            <tr>
                            <td>A</td>
                            <td>Jogar futebol</td>
                            <td><AiFillCheckSquare className="iconex2"/></td>
                            </tr>
                            <tr>
                            <td>B</td>
                            <td>Ler um livro</td>
                            <td><AiOutlineBorder className="iconex"/></td>
                            </tr>
                            <tr>
                            <td>C</td>
                            <td>Nenhuma das opções</td>
                            <td><AiOutlineBorder className="iconex"/></td>
                            </tr>
                        </tbody> <br></br>

                        <thead>
                            <tr><th>#</th><th>Caso tenha interesse por ambos:</th><th></th></tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>A</td>
                            <td>Jogar futebol</td>
                            <td><AiFillCheckSquare className="iconex2"/></td>
                            </tr>
                            <tr>
                            <td>B</td>
                            <td>Ler um livro</td>
                            <td><AiFillCheckSquare className="iconex2"/></td>
                            </tr>
                            <tr>
                            <td>C</td>
                            <td>Nenhuma das opções</td>
                            <td><AiOutlineBorder className="iconex"/></td>
                            </tr>
                        </tbody> <br></br>

                        <thead>
                            <tr><th>#</th><th>Caso não tenha interesse por nenhuma:</th><th></th></tr>
                        </thead>
                        <tbody>
                            <tr>
                            <td>A</td>
                            <td>Jogar futebol</td>
                            <td><AiOutlineBorder className="iconex"/></td>
                            </tr>
                            <tr>
                            <td>B</td>
                            <td>Ler um livro</td>
                            <td><AiOutlineBorder className="iconex"/></td>
                            </tr>
                            <tr>
                            <td>C</td>
                            <td>Nenhuma das opções</td>
                            <td><AiFillCheckSquare className="iconex2"/></td>
                            </tr>
                        </tbody> <br></br>
                        </Table>

                </div>
            </div>


    </div>
      );
    }