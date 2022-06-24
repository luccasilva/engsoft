
import "../../../assets/css/testes.css"
import Table from 'react-bootstrap/Table'
import { AiFillCheckSquare } from "react-icons/ai";
import { AiOutlineBorder } from "react-icons/ai";
import gif from "../../../assets/img/pf.gif"


export default (props) => {
    return (
    <div>
            <div className="quadro">
                <div className="instr2"><p className="instr">1 - Veja o tutorial</p></div>
                <div className="instr1"><p className="instr">2 - Leia as instruções de cada etapa</p></div>
                <div className="instr3"><p className="instr">3 - Inicie o questionário</p></div>
            </div>

            <br></br>

            <div className="quadroEx">
                    <p className="instrTitle">Como colorir a pirâmide</p>
                    <img className="gifpf" src={gif}></img>
            </div>


    </div>
      );
    }