import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { MdOutlinePerson } from "react-icons/md";


export default (props) => {

  return (<>
    <Link to={`/dashboard/${props.usuario}`}><MdOutlinePerson className="buttonUser"/></Link>
  </>
  );
}