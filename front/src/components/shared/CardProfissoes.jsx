import "../../assets/css/card.css";
import $ from "jquery";

import { MdInfo } from "react-icons/md";
import React, { useEffect, useState } from "react";
import { MdCancel } from "react-icons/md";


export default (props) => {

  const [auth, setAuth] = useState(true);


  let handleClick = () => {
      setAuth(!auth);
  };

  useEffect(async () => {}, []);

  return (
    <div onDoubleClick={handleClick}>
    <li
      id="sf-innovation"
      className="col-md-3 col-sm-6 col-xs-12"
    >
      <div className="col-lg-3 col-md-3 col-sm-3 col-xs-6 carddContainer">
        <div className="cardd">
          {!auth && <div className="back">
            <div className="content">
              <h3 className="carddTitle">{props.nome}</h3>
              <MdCancel className="infoChartCancel"></MdCancel>
            </div>
          </div> }
           {auth && <div className="front">
            <h3 className="carddTitle">{props.nome}</h3>
            <h6 className="desccardd">{props.descricao}</h6>
          </div> }
        </div>
      </div>
      <a href={props.link} target="_blank" className="aLink">
        <MdInfo className="infoChart"></MdInfo>
      </a>
    </li>
    </div>
  );
};
