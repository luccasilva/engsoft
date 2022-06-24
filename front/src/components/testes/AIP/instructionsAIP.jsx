
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
                    <p>1) Escolha em cada DUPLA de frases aquela que lhe desperte mais INTERESSE, marcando a alternativa da coluna "Sim" ao lado da opção correspondente.</p>
                    <p>2) Caso tenha interesse em ambas, selecione as duas alternativas.</p>
                    <p>3) Caso NÃO tenha INTERESSE por nenhuma das opções, deverá mesmo assim escolher uma delas, marcando a alternativa da coluna "Talvez", da opção menos pior na sua opinião.</p>
                </div>
            </div>

            <br></br>

            <div className="quadroEx">
                <div className="instr2">
                    <p className="instrTitle">Exemplos</p>
                   
                    <Table striped className="exTable">
                        <thead>
                            <tr><th>#</th><th>Prefiro adotar um cachorro:</th><th>Sim</th><th>Talvez</th></tr>
                        </thead>
                        <tbody>
                            <tr>
                            <td>1</td>
                            <td>Pular de paraquedas</td>
                            <td><AiOutlineBorder className="iconex"/></td>
                            <td><AiOutlineBorder className="iconex"/></td>
                            </tr>
                            <tr>
                            <td>2</td>
                            <td>Adotar um cachorro</td>
                            <td><AiFillCheckSquare className="iconex2"/></td>
                            <td><AiOutlineBorder className="iconex"/></td>
                            </tr>
                        </tbody> <br></br>

                        <thead>
                            <tr><th>#</th><th>Tenho interesse nas duas opções:</th><th>Sim</th><th>Talvez</th></tr>
                        </thead>
                        <tbody>
                            <tr>
                            <td>1</td>
                            <td>Pular de paraquedas</td>
                            <td><AiFillCheckSquare className="iconex2"/></td>
                            <td><AiOutlineBorder className="iconex"/></td>
                            </tr>
                            <tr>
                            <td>2</td>
                            <td>Adotar um cachorro</td>
                            <td><AiFillCheckSquare className="iconex2"/></td>
                            <td><AiOutlineBorder className="iconex"/></td>
                            </tr>
                        </tbody> <br></br>

                        <thead>
                            <tr><th>#</th><th>Não tenha interesse em nehuma, mas acho menos pior adotar:</th><th>Sim</th><th>Talvez</th></tr>
                        </thead>
                        <tbody>
                            <tr>
                            <td>1</td>
                            <td>Pular de paraquedas</td>
                            <td><AiOutlineBorder className="iconex"/></td>
                            <td><AiOutlineBorder className="iconex"/></td>
                            </tr>
                            <tr>
                            <td>2</td>
                            <td>Adotar um cachorro</td>
                            <td><AiOutlineBorder className="iconex"/></td>
                            <td><AiFillCheckSquare className="iconex2"/></td>
                            </tr>
                        </tbody>
                        </Table>
                </div>
            </div>
    </div>
      );
    }