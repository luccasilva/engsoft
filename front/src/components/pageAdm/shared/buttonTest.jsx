import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

export default (props) => {

  const [botaoPendente, setBotaoP] = useState(false);
  const [botaoAtivo, setBotaoA] = useState(false);
  const [botaoFinalizado, setBotaoF] = useState(false);

  useEffect(async () => {
    for (var i = 0; i < props.provas.length; i++) {
      if (props.provas[i].teste_id === props.testeId) {
        if (props.provas[i].respostas === null) {
          setBotaoA(true);
          setBotaoP(false);
          setBotaoF(false);
          return;
        }
        else {
          setBotaoF(true);
          setBotaoP(false);
          setBotaoA(false);
          return;
        }
      }
    }
    setBotaoP(true);
    setBotaoF(false);
    setBotaoA(false);
  }, [props.provas]);

  function enviar() {
    const data = {
      usuario: props.usuario,
      nome: props.nome,
      teste: props.titulo,
      testeId: props.testeId,
      modal: 1
    };
    props.onChange(data);
  }

  function cancelar() {
    const data = {
      usuario: props.usuario,
      nome: props.nome,
      teste: props.titulo,
      testeId: props.testeId,
      modal: 2
    };
    props.onChange(data);
  }

  return (<>
    {botaoPendente && <button className="buttonTestePendente" onClick={enviar} >{props.titulo}</button>}
    {botaoAtivo && <button className="buttonTesteAtivo" onClick={cancelar} >{props.titulo}</button>}
    {botaoFinalizado && <Link to={`/dashboard/${props.titulo}/${props.usuario}`} ><button className="buttonTesteFinalizado">{props.titulo}</button></Link>}
  </>
  );
}