import './index.css';
import React from 'react';
import { BrowserRouter, Routes, Route, Switch, Navigate } from "react-router-dom";
import { render } from '@testing-library/react';

import Home from './components/home/home'
import LoginCliente from './components/loginCliente/loginCliente';
import LoginPro from './components/loginPro/loginPro';
import TestPage from './components/pageClient/testPage';
import Aip from './components/testes/AIP/aip';
import Appg from './components/testes/APPG/appg';
import Inventario from './components/testes/Inventario/inventario';
import Pfister from './components/testes/Pfister/pfister';
import SDS from './components/testes/SDS/sds';
import G36 from './components/testes/G36/g36';
import FichaCadastral from './components/testes/FichaCadastral/fichaCadastral'
import Profissoes from './components/pageClient/profissoes';

import PageClientes from './components/pageAdm/pageClientes';
import PageForms from './components/pageAdm/pageForms';
import PageArquivos from './components/pageAdm/pageArquivos';

import ClientPage from './components/pageAdm/ClientPage';
import ViewClient from './components/pageAdm/viewClient';
import ResultAIP from './components/pageAdm/resultAIP';
import ResultAPPG from './components/pageAdm/resultAPPG';
import ResultG36 from './components/pageAdm/resultG36';
import ResultPF from './components/pageAdm/resultPF';
import ResultSDS from './components/pageAdm/resultSDS';
import ResultII from './components/pageAdm/resultII';
import ResultFinal from './components/pageAdm/resultFinal';


const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      
      <Route path="/" element={<Home/>} />
      <Route path="profissional" element={<LoginPro/>} />
      <Route path="profissoes" element={<Profissoes/>} />
      <Route path="dashboard" element={<PageClientes/>} />
      <Route path="dashboard/forms" element={<PageForms/>} />
      <Route path="dashboard/files/:modalidade" element={<PageArquivos/>} />

      <Route path="dashboard/:usuarioId" element={<ClientPage/>} />
      <Route path="dashboard/CADASTRO/:usuarioId" element={<ViewClient/>} />
      <Route path="dashboard/APPG/:usuarioId" element={<ResultAPPG/>} />
      <Route path="dashboard/AIP/:usuarioId" element={<ResultAIP/>} />
      <Route path="dashboard/G-36/:usuarioId" element={<ResultG36/>} />
      <Route path="dashboard/PF/:usuarioId" element={<ResultPF/>} />
      <Route path="dashboard/SDS/:usuarioId" element={<ResultSDS/>} />
      <Route path="dashboard/INVINT/:usuarioId" element={<ResultII/>} />
      <Route path="dashboard/SINTESE/:usuarioId" element={<ResultFinal/>} />

      <Route path="cliente" element={<LoginCliente/>} />
      <Route path="testes" element={<TestPage/>} />
      <Route path="ficha" element={<FichaCadastral/>} />
      <Route path="aip" element={<Aip/>} />
      <Route path="appg" element={<Appg/>} />
      <Route path="inventario" element={<Inventario/>} />
      <Route path="pfister" element={<Pfister/>} />
      <Route path="sds" element={<SDS/>} />
      <Route path="g36" element={<G36/>} />

    </Routes>
  </BrowserRouter>,
  rootElement
);
