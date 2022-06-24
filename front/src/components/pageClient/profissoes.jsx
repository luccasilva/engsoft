import '../../assets/css/login.css';
import { getProfissoes } from '../../services/cursoService';
import HomeNavbar from '../shared/homeNavbar';
import CardProfissoes from '../shared/CardProfissoes';
import React, { useState, useEffect } from 'react';
import ProfissoesExtra from './profissoesExtra';
import { MdPrint } from "react-icons/md";


export default (props) => {

    const [dataProfissoes1, setData1] = useState(false);
    const [dataProfissoes2, setData2] = useState(false);
    const [dataProfissoes3, setData3] = useState(false);
    const [dataProfissoes4, setData4] = useState(false);
    const [dataProfissoes5, setData5] = useState(false);
    const [dataProfissoes6, setData6] = useState(false);
    const [pagina, setPagina] = useState(1);

    var byProperty = function (prop) {
        return function (a, b) {
            if (typeof a[prop] == "number") {
                return (a[prop] - b[prop]);
            } else {
                return ((a[prop] < b[prop]) ? -1 : ((a[prop] > b[prop]) ? 1 : 0));
            }
        };
    };

    useEffect(async () => {

        const profissoes = await getProfissoes();

        profissoes.sort(byProperty("id"));

        const mapping = profissoes.map((profissao) => (
            <CardProfissoes
                nome={profissao.nome}
                descricao={profissao.descricao}
                link={profissao.site}
            />
        ));

        setData1(mapping.slice(0, 40));
        setData2(mapping.slice(40, 80));
        setData3(mapping.slice(80, 120));
        setData4(mapping.slice(120, 160));
        setData5(mapping.slice(160, 200));
        setData6(mapping.slice(200, mapping.length));

    }, []);

    return (
        <div>

            <HomeNavbar></HomeNavbar>

            <nav className="paginationProf">
                <button className={`${pagina === 1 ? "buttonActive" : ""}`} onClick={() => setPagina(1)}>1</button>
                <button className={`${pagina === 2 ? "buttonActive" : ""}`} onClick={() => setPagina(2)}>2</button>
                <button className={`${pagina === 3 ? "buttonActive" : ""}`} onClick={() => setPagina(3)}>3</button>
                <button className={`${pagina === 4 ? "buttonActive" : ""}`} onClick={() => setPagina(4)}>4</button>
                <button className={`${pagina === 5 ? "buttonActive" : ""}`} onClick={() => setPagina(5)}>5</button>
                <button className={`${pagina === 6 ? "buttonActive" : ""}`} onClick={() => setPagina(6)}>6</button>
                <button className={`${pagina === 7 ? "buttonActive" : ""}`} onClick={() => setPagina(7)}>7</button>
                <button className={"buttonActivew"} onClick={() => window.print()}><p><MdPrint/></p></button>

            </nav>

            <div className="canvas_div_pdf">
                <div className='profCont'>
                    <section id="section-feature" className="container">
                        {pagina === 1 && <ul> {dataProfissoes1} </ul>}
                        {pagina === 2 && <ul> {dataProfissoes2} </ul>}
                        {pagina === 3 && <ul> {dataProfissoes3} </ul>}
                        {pagina === 4 && <ul> {dataProfissoes4} </ul>}
                        {pagina === 5 && <ul> {dataProfissoes5} </ul>}
                        {pagina === 6 && <ul> {dataProfissoes6} </ul>}
                        {pagina === 7 && <ProfissoesExtra></ProfissoesExtra>}
                    </section>
                </div>
            </div>
        </div>
    );
}