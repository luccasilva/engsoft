import ClientNavbar from "../../shared/clientNavbar";
import IntroSection from "../../shared/introSection";
import Instructions from "./instructionsPF";

import React, { useState } from "react";
import Inicioquest from "../shared/inicioquest";
import Fimquest from "../shared/fimquest";
import { set, useForm } from "react-hook-form";
import Card from "./Card";
import ColorSelect from "./ColorSelect";
import Notification from "../../testes/shared/notification";
import { Navigate } from "react-router-dom";
import { responder } from "../../../services/testeService";

export default function Pfister() {
  const { watch } = useForm();

  const [error401, setError] = useState(false);
  const [redirect, setRedirect] = useState(false);

  const [active, setActive] = useState("#ffffff");

  const [piramide, setPiramide] = useState(1);

  const [count, setCount] = useState(1);

  const [div1_1, setdiv1_1] = useState("#ffffff");
  const [div1_2, setdiv1_2] = useState("#ffffff");
  const [div1_3, setdiv1_3] = useState("#ffffff");
  const [div1_4, setdiv1_4] = useState("#ffffff");
  const [div1_5, setdiv1_5] = useState("#ffffff");
  const [div1_6, setdiv1_6] = useState("#ffffff");
  const [div1_7, setdiv1_7] = useState("#ffffff");
  const [div1_8, setdiv1_8] = useState("#ffffff");
  const [div1_9, setdiv1_9] = useState("#ffffff");
  const [div1_10, setdiv1_10] = useState("#ffffff");
  const [div1_11, setdiv1_11] = useState("#ffffff");
  const [div1_12, setdiv1_12] = useState("#ffffff");
  const [div1_13, setdiv1_13] = useState("#ffffff");
  const [div1_14, setdiv1_14] = useState("#ffffff");
  const [div1_15, setdiv1_15] = useState("#ffffff");

  const [div2_1, setdiv2_1] = useState("#ffffff");
  const [div2_2, setdiv2_2] = useState("#ffffff");
  const [div2_3, setdiv2_3] = useState("#ffffff");
  const [div2_4, setdiv2_4] = useState("#ffffff");
  const [div2_5, setdiv2_5] = useState("#ffffff");
  const [div2_6, setdiv2_6] = useState("#ffffff");
  const [div2_7, setdiv2_7] = useState("#ffffff");
  const [div2_8, setdiv2_8] = useState("#ffffff");
  const [div2_9, setdiv2_9] = useState("#ffffff");
  const [div2_10, setdiv2_10] = useState("#ffffff");
  const [div2_11, setdiv2_11] = useState("#ffffff");
  const [div2_12, setdiv2_12] = useState("#ffffff");
  const [div2_13, setdiv2_13] = useState("#ffffff");
  const [div2_14, setdiv2_14] = useState("#ffffff");
  const [div2_15, setdiv2_15] = useState("#ffffff");

  const [div3_1, setdiv3_1] = useState("#ffffff");
  const [div3_2, setdiv3_2] = useState("#ffffff");
  const [div3_3, setdiv3_3] = useState("#ffffff");
  const [div3_4, setdiv3_4] = useState("#ffffff");
  const [div3_5, setdiv3_5] = useState("#ffffff");
  const [div3_6, setdiv3_6] = useState("#ffffff");
  const [div3_7, setdiv3_7] = useState("#ffffff");
  const [div3_8, setdiv3_8] = useState("#ffffff");
  const [div3_9, setdiv3_9] = useState("#ffffff");
  const [div3_10, setdiv3_10] = useState("#ffffff");
  const [div3_11, setdiv3_11] = useState("#ffffff");
  const [div3_12, setdiv3_12] = useState("#ffffff");
  const [div3_13, setdiv3_13] = useState("#ffffff");
  const [div3_14, setdiv3_14] = useState("#ffffff");
  const [div3_15, setdiv3_15] = useState("#ffffff");

  const onSubmity = async (data) => {
    try {
      const response = await responder(6, data);
      setRedirect(true);
    } catch (error) {
      setError(true);
    }
  };

  function enviarEstado() {
    setCount(count + 1);
    if (count === 4) {
      let corData = Array(3);

      const cores1 = {
        cor1: div1_1,
        cor2: div1_2,
        cor3: div1_3,
        cor4: div1_4,
        cor5: div1_5,
        cor6: div1_6,
        cor7: div1_7,
        cor8: div1_8,
        cor9: div1_9,
        cor10: div1_10,
        cor11: div1_11,
        cor12: div1_12,
        cor13: div1_13,
        cor14: div1_14,
        cor15: div1_15,
      };

      const cores2 = {
        cor1: div2_1,
        cor2: div2_2,
        cor3: div2_3,
        cor4: div2_4,
        cor5: div2_5,
        cor6: div2_6,
        cor7: div2_7,
        cor8: div2_8,
        cor9: div2_9,
        cor10: div2_10,
        cor11: div2_11,
        cor12: div2_12,
        cor13: div2_13,
        cor14: div2_14,
        cor15: div2_15,
      };

      const cores3 = {
        cor1: div3_1,
        cor2: div3_2,
        cor3: div3_3,
        cor4: div3_4,
        cor5: div3_5,
        cor6: div3_6,
        cor7: div3_7,
        cor8: div3_8,
        cor9: div3_9,
        cor10: div3_10,
        cor11: div3_11,
        cor12: div3_12,
        cor13: div3_13,
        cor14: div3_14,
        cor15: div3_15,
      };

      corData[0] = cores1;
      corData[1] = cores2;
      corData[2] = cores3;

      onSubmity(corData);
    }
    setPiramide(piramide + 1);
  }

  return (
    <div>
      {error401 && <Notification titulo="Erro ao enviar esse formulario!" />}
      {redirect && <Navigate to="/testes" />}

      <ClientNavbar titulo="PF"> </ClientNavbar>

      <IntroSection>
        <Instructions></Instructions>
      </IntroSection>

      <Inicioquest></Inicioquest>

      {piramide < 4 && (
        <div className="pfinstri">
          <h3>Instrução {count}</h3>
          <br></br>
          {piramide == 1 && (
            <h4>
              Complete a figura, procurando deixá-la mais bonita possível, de
              acordo com o seu gosto. Pode mudar/alterar quando quiser.
            </h4>
          )}
          {piramide == 2 && (
            <h4>Complete a figura, procurando deixá-la ainda mais bonita.</h4>
          )}
          {piramide == 3 && (
            <h4>
              Complete a figura mais uma vez, procurando deixá-la ainda melhor.
            </h4>
          )}
        </div>
      )}

      {piramide < 4 && (
        <div>
          <h3>{watch("cor1")}</h3>
          <div className="todoselect">
            <ColorSelect color={active}></ColorSelect>
          </div>
        </div>
      )}
      <div className="todomesmo">
        <div className="todotodo">
          {piramide === 3 && (
            <div className="piramide">
              <div className="linha">
                <Card color={div3_1}>
                  <button
                    className="buttrans"
                    onClick={(_) => setdiv3_1(active)}
                  />
                </Card>
              </div>
              <div className="linha">
                <Card color={div3_2}>
                  <button
                    className="buttrans"
                    onClick={(_) => setdiv3_2(active)}
                  />
                </Card>
                <Card color={div3_3}>
                  <button
                    className="buttrans"
                    onClick={(_) => setdiv3_3(active)}
                  />
                </Card>
              </div>
              <div className="linha">
                <Card color={div3_4}>
                  <button
                    className="buttrans"
                    onClick={(_) => setdiv3_4(active)}
                  />
                </Card>
                <Card color={div3_5}>
                  <button
                    className="buttrans"
                    onClick={(_) => setdiv3_5(active)}
                  />
                </Card>
                <Card color={div3_6}>
                  <button
                    className="buttrans"
                    onClick={(_) => setdiv3_6(active)}
                  />
                </Card>
              </div>
              <div className="linha">
                <Card color={div3_7}>
                  <button
                    className="buttrans"
                    onClick={(_) => setdiv3_7(active)}
                  />
                </Card>
                <Card color={div3_8}>
                  <button
                    className="buttrans"
                    onClick={(_) => setdiv3_8(active)}
                  />
                </Card>
                <Card color={div3_9}>
                  <button
                    className="buttrans"
                    onClick={(_) => setdiv3_9(active)}
                  />
                </Card>
                <Card color={div3_10}>
                  <button
                    className="buttrans"
                    onClick={(_) => setdiv3_10(active)}
                  />
                </Card>
              </div>
              <div className="linha">
                <Card color={div3_11}>
                  <button
                    className="buttrans"
                    onClick={(_) => setdiv3_11(active)}
                  />
                </Card>
                <Card color={div3_12}>
                  <button
                    className="buttrans"
                    onClick={(_) => setdiv3_12(active)}
                  />
                </Card>
                <Card color={div3_13}>
                  <button
                    className="buttrans"
                    onClick={(_) => setdiv3_13(active)}
                  />
                </Card>
                <Card color={div3_14}>
                  <button
                    className="buttrans"
                    onClick={(_) => setdiv3_14(active)}
                  />
                </Card>
                <Card color={div3_15}>
                  <button
                    className="buttrans"
                    onClick={(_) => setdiv3_15(active)}
                  />
                </Card>
              </div>
            </div>
          )}

          {piramide === 2 && (
            <div className="piramide">
              <div className="linha">
                <Card color={div2_1}>
                  <button
                    className="buttrans"
                    onClick={(_) => setdiv2_1(active)}
                  />
                </Card>
              </div>
              <div className="linha">
                <Card color={div2_2}>
                  <button
                    className="buttrans"
                    onClick={(_) => setdiv2_2(active)}
                  />
                </Card>
                <Card color={div2_3}>
                  <button
                    className="buttrans"
                    onClick={(_) => setdiv2_3(active)}
                  />
                </Card>
              </div>
              <div className="linha">
                <Card color={div2_4}>
                  <button
                    className="buttrans"
                    onClick={(_) => setdiv2_4(active)}
                  />
                </Card>
                <Card color={div2_5}>
                  <button
                    className="buttrans"
                    onClick={(_) => setdiv2_5(active)}
                  />
                </Card>
                <Card color={div2_6}>
                  <button
                    className="buttrans"
                    onClick={(_) => setdiv2_6(active)}
                  />
                </Card>
              </div>
              <div className="linha">
                <Card color={div2_7}>
                  <button
                    className="buttrans"
                    onClick={(_) => setdiv2_7(active)}
                  />
                </Card>
                <Card color={div2_8}>
                  <button
                    className="buttrans"
                    onClick={(_) => setdiv2_8(active)}
                  />
                </Card>
                <Card color={div2_9}>
                  <button
                    className="buttrans"
                    onClick={(_) => setdiv2_9(active)}
                  />
                </Card>
                <Card color={div2_10}>
                  <button
                    className="buttrans"
                    onClick={(_) => setdiv2_10(active)}
                  />
                </Card>
              </div>
              <div className="linha">
                <Card color={div2_11}>
                  <button
                    className="buttrans"
                    onClick={(_) => setdiv2_11(active)}
                  />
                </Card>
                <Card color={div2_12}>
                  <button
                    className="buttrans"
                    onClick={(_) => setdiv2_12(active)}
                  />
                </Card>
                <Card color={div2_13}>
                  <button
                    className="buttrans"
                    onClick={(_) => setdiv2_13(active)}
                  />
                </Card>
                <Card color={div2_14}>
                  <button
                    className="buttrans"
                    onClick={(_) => setdiv2_14(active)}
                  />
                </Card>
                <Card color={div2_15}>
                  <button
                    className="buttrans"
                    onClick={(_) => setdiv2_15(active)}
                  />
                </Card>
              </div>
            </div>
          )}

          {piramide === 1 && (
            <div className="piramide">
              <div className="linha">
                <Card color={div1_1}>
                  <button
                    className="buttrans"
                    onClick={(_) => setdiv1_1(active)}
                  />
                </Card>
              </div>
              <div className="linha">
                <Card color={div1_2}>
                  <button
                    className="buttrans"
                    onClick={(_) => setdiv1_2(active)}
                  />
                </Card>
                <Card color={div1_3}>
                  <button
                    className="buttrans"
                    onClick={(_) => setdiv1_3(active)}
                  />
                </Card>
              </div>
              <div className="linha">
                <Card color={div1_4}>
                  <button
                    className="buttrans"
                    onClick={(_) => setdiv1_4(active)}
                  />
                </Card>
                <Card color={div1_5}>
                  <button
                    className="buttrans"
                    onClick={(_) => setdiv1_5(active)}
                  />
                </Card>
                <Card color={div1_6}>
                  <button
                    className="buttrans"
                    onClick={(_) => setdiv1_6(active)}
                  />
                </Card>
              </div>
              <div className="linha">
                <Card color={div1_7}>
                  <button
                    className="buttrans"
                    onClick={(_) => setdiv1_7(active)}
                  />
                </Card>
                <Card color={div1_8}>
                  <button
                    className="buttrans"
                    onClick={(_) => setdiv1_8(active)}
                  />
                </Card>
                <Card color={div1_9}>
                  <button
                    className="buttrans"
                    onClick={(_) => setdiv1_9(active)}
                  />
                </Card>
                <Card color={div1_10}>
                  <button
                    className="buttrans"
                    onClick={(_) => setdiv1_10(active)}
                  />
                </Card>
              </div>
              <div className="linha">
                <Card color={div1_11}>
                  <button
                    className="buttrans"
                    onClick={(_) => setdiv1_11(active)}
                  />
                </Card>
                <Card color={div1_12}>
                  <button
                    className="buttrans"
                    onClick={(_) => setdiv1_12(active)}
                  />
                </Card>
                <Card color={div1_13}>
                  <button
                    className="buttrans"
                    onClick={(_) => setdiv1_13(active)}
                  />
                </Card>
                <Card color={div1_14}>
                  <button
                    className="buttrans"
                    onClick={(_) => setdiv1_14(active)}
                  />
                </Card>
                <Card color={div1_15}>
                  <button
                    className="buttrans"
                    onClick={(_) => setdiv1_15(active)}
                  />
                </Card>
              </div>
            </div>
          )}

          {piramide < 4 && (
            <div className="colorselect">
              <div className="linhacor azuis">
                <div className="grupobut">
                  <span>AZUL</span>
                  <button
                    className="btn-color azul1"
                    onClick={(_) => setActive("#57f0e9")}
                  >
                    1
                  </button>
                  <button
                    className="btn-color azul2"
                    onClick={(_) => setActive("#0a9cb6")}
                  >
                    2
                  </button>
                  <button
                    className="btn-color azul3"
                    onClick={(_) => setActive("#0000ff")}
                  >
                    3
                  </button>
                  <button
                    className="btn-color azul4"
                    onClick={(_) => setActive("#020575")}
                  >
                    4
                  </button>
                </div>
              </div>

              <div className="linhacor">
                <div className="grupobut">
                  <span>VERMELHO</span>
                  <button
                    className="btn-color vermelho1"
                    onClick={(_) => setActive("#ff8888")}
                  >
                    1
                  </button>
                  <button
                    className="btn-color vermelho2"
                    onClick={(_) => setActive("#cc0000")}
                  >
                    2
                  </button>
                  <button
                    className="btn-color vermelho3"
                    onClick={(_) => setActive("#9d0000")}
                  >
                    3
                  </button>
                  <button
                    className="btn-color vermelho4"
                    onClick={(_) => setActive("#6c0000")}
                  >
                    4
                  </button>
                </div>
              </div>

              <div className="linhacor">
                <div className="grupobut">
                  <span>VERDE</span>
                  <button
                    className="btn-color verde1"
                    onClick={(_) => setActive("#cdf42f")}
                  >
                    1
                  </button>
                  <button
                    className="btn-color verde2"
                    onClick={(_) => setActive("#00f425")}
                  >
                    2
                  </button>
                  <button
                    className="btn-color verde3"
                    onClick={(_) => setActive("#008000")}
                  >
                    3
                  </button>
                  <button
                    className="btn-color verde4"
                    onClick={(_) => setActive("#003700")}
                  >
                    4
                  </button>
                </div>
              </div>

              <div className="linhacor">
                <div className="grupobut">
                  <span>VIOLETA</span>
                  <button
                    className="btn-color violeta1"
                    onClick={(_) => setActive("#beb4e2")}
                  >
                    1
                  </button>
                  <button
                    className="btn-color violeta2"
                    onClick={(_) => setActive("#ac3984")}
                  >
                    2
                  </button>
                  <button
                    className="btn-color violeta3"
                    onClick={(_) => setActive("#652e65")}
                  >
                    3
                  </button>
                </div>
              </div>

              <div className="linhacor">
                <div className="grupobut">
                  <span>LARANJA</span>
                  <button
                    className="btn-color laranja1"
                    onClick={(_) => setActive("#ff7729")}
                  >
                    1
                  </button>
                  <button
                    className="btn-color laranja2"
                    onClick={(_) => setActive("#ff4627")}
                  >
                    2
                  </button>
                </div>
              </div>

              <div className="linhacor">
                <div className="grupobut">
                  <span>AMARELO</span>
                  <button
                    className="btn-color amarelo1"
                    onClick={(_) => setActive("#ffff07")}
                  >
                    1
                  </button>
                  <button
                    className="btn-color amarelo2"
                    onClick={(_) => setActive("#f0ba00")}
                  >
                    2
                  </button>
                </div>
              </div>

              <div className="linhacor">
                <div className="grupobut">
                  <span>MARROM</span>
                  <button
                    className="btn-color marrom1"
                    onClick={(_) => setActive("#b16d49")}
                  >
                    1
                  </button>
                  <button
                    className="btn-color marrom2"
                    onClick={(_) => setActive("#754831")}
                  >
                    2
                  </button>
                </div>
              </div>

              <div className="linhacor">
                <div className="grupobut00">
                  <div className="grupobut0">
                    <button
                      className="btn-color preto"
                      onClick={(_) => setActive("#1e201d")}
                    >
                      .
                    </button>
                  </div>
                  <div className="grupobut0">
                    <button
                      className="btn-color branco"
                      onClick={(_) => setActive("#ffffff")}
                    >
                      .
                    </button>
                  </div>
                  <div className="grupobut0">
                    <button
                      className="btn-color cinza"
                      onClick={(_) => setActive("#7a7a7a")}
                    >
                      .
                    </button>
                  </div>
                </div>
              </div>
              <p style={{ zIndex: -1 }} className="spanbutbut">PRETO&nbsp;&nbsp;&nbsp;&nbsp;  BRANCO&nbsp;&nbsp;&nbsp;  CINZA</p>
            </div>
          )}
        </div>
      </div>

      <div className="formsize contentlabels">
        {piramide < 4 && <h4>Finalizou sua pirâmide {count} ?</h4>}
        {piramide === 4 && <h4>Você finalizou todas as pirâmides!</h4>}
        <button className="btn-login" onClick={(_) => enviarEstado()}>
          Enviar
        </button>

        <br></br>
      </div>

      <Fimquest></Fimquest>
    </div>
  );
}
