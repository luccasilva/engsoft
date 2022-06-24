import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

export default (props) => {

  return (<>
    <Link to={`/dashboard/SINTESE/${props.usuario}`} ><button className="buttonTesteFinalizado">SINTESE DOS TESTES</button></Link>
  </>
  );
}