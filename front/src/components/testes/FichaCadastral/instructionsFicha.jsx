
import "../../../assets/css/testes.css"
import Table from 'react-bootstrap/Table'
import { AiFillCheckSquare } from "react-icons/ai";
import { AiOutlineBorder } from "react-icons/ai";


export default (props) => {
    return (
    <div>
            <div className="quadro">
                <div className="instr1"><p className="instr">1 - Leia as instruções</p></div>
                <div className="instr3"><p className="instr">3 - Inicie o questionário</p></div>
            </div>

            <br></br>

            <div className="quadroInsrtu">
                <div className="instr1">
                    <p className="instrTitle">Instruções</p>
                    <p> Preencha a Ficha Cadastral com seus dados pessoais, não esqueça de preencher todos os campos!</p>
                </div>
            </div>

            <br></br>


    </div>
      );
    }