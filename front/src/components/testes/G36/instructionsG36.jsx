import "../../../assets/css/testes.css";
import imageEx from "../../../assets/img/g36ex.png";
import Table from "react-bootstrap/Table";
import { AiFillCheckSquare } from "react-icons/ai";
import { AiOutlineBorder } from "react-icons/ai";

export default (props) => {
  return (
    <div>
      <div className="quadro">
        <div className="instr1">
          <p className="instr">1 - Leia as instruções</p>
        </div>
        <div className="instr2">
          <p className="instr">2 - Veja o exemplo</p>
        </div>
        <div className="instr3">
          <p className="instr">3 - Inicie a atividade</p>
        </div>
      </div>

      <br></br>

      <div className="quadroInsrtu">
        <div className="instr1">
          <p className="instrTitle">Instruções</p>
          <p>
            Nesta atividade, você encontrará retângulos com algumas figuras e,
            no canto inferior direito há um espaço indicando que está faltando
            uma figura.
          </p>
          <p>
            Sua tarefa é identificar entre as seis opções abaixo, qual é a
            resposta certa?
          </p>
        </div>
      </div>

      <br></br>

      <div className="quadroEx">
        <div className="instr2">
          <p className="instrTitle">Exemplo</p>

          <Table striped className="exTable">
            <img src={imageEx} className="img-fluid" alt="" />
          </Table>
        </div>
      </div>
    </div>
  );
};
