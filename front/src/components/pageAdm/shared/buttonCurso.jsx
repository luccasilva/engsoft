import React, { useState, useEffect } from 'react';

export default (props) => {

  function enviar() {
    const data = {
      cursoNome: props.cursoNome,
      cursoId: props.cursoId
    };
    props.onChange(data);
  }

  return (<>
    <button className="buttonTestePendente" onClick={enviar}>Editar</button>
  </>
  );
}