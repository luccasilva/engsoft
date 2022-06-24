import React, { useState, useEffect } from 'react';
import CardPiramide from './CardPiramide';

export default (props) => {

  return (<>
    <div className="todomesmo">
      <div className="todotodo">
        <div className="piramide">
          <div className="linha">
            <CardPiramide color={props.div_1}><button className="buttrans" /></CardPiramide>
          </div>
          <div className="linha">
            <CardPiramide color={props.div_2}><button className="buttrans" /></CardPiramide>
            <CardPiramide color={props.div_3}><button className="buttrans" /></CardPiramide>
          </div>
          <div className="linha">
            <CardPiramide color={props.div_4}><button className="buttrans" /></CardPiramide>
            <CardPiramide color={props.div_5}><button className="buttrans" /></CardPiramide>
            <CardPiramide color={props.div_6}><button className="buttrans" /></CardPiramide>
          </div>
          <div className="linha">
            <CardPiramide color={props.div_7}><button className="buttrans" /></CardPiramide>
            <CardPiramide color={props.div_8}><button className="buttrans" /></CardPiramide>
            <CardPiramide color={props.div_9}><button className="buttrans" /></CardPiramide>
            <CardPiramide color={props.div_10}><button className="buttrans" /></CardPiramide>
          </div>
          <div className="linha">
            <CardPiramide color={props.div_11}><button className="buttrans" /></CardPiramide>
            <CardPiramide color={props.div_12}><button className="buttrans" /></CardPiramide>
            <CardPiramide color={props.div_13}><button className="buttrans" /></CardPiramide>
            <CardPiramide color={props.div_14}><button className="buttrans" /></CardPiramide>
            <CardPiramide color={props.div_15}><button className="buttrans" /></CardPiramide>
          </div>
        </div>
      </div>
    </div>
  </>
  );
}