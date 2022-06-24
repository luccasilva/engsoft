import '../../assets/css/login.css';
import { getProfissoes } from '../../services/cursoService';
import HomeNavbar from '../shared/homeNavbar';
import CardProfissoes from '../shared/CardProfissoes';
import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button'

export default (props) => {

    return (
        <div>

            <HomeNavbar></HomeNavbar>

            <div id="section-feature" class="container">
                <br /><br />
                <br /><br />
                
                <div class="section-header">
                    <h3>Dicas de sites para mais pesquisa:</h3>
                    <br />
                </div>
                <div id="services" class="section-bg">
                    <div class="container">
                        <div class="row">

                            <div class="col-md-6 col-lg-5 offset-lg-1 wow bounceInUp" data-wow-duration="0.5s">
                                <div class="box">
                                    <div class="icon"><i class="ion-ios-bookmarks-outline" ></i></div>
                                    <h4 class="title"><a href="https://www.vestibulandoweb.com.br/educacao/universidades/" target="_blank">Sites das Faculdades</a></h4>
                                </div>
                            </div>
                            <div class="col-md-6 col-lg-5 wow bounceInUp" data-wow-duration="0.5s">
                                <div class="box">
                                    <div class="icon"><i class="ion-ios-bookmarks-outline" ></i></div>
                                    <h4 class="title"><a href="https://www.guiadacarreira.com.br/" target="_blank">Guia da Carreira</a></h4>
                                </div>
                            </div>

                            <div class="col-md-6 col-lg-5 offset-lg-1 wow bounceInUp" data-wow-delay="0.1s" data-wow-duration="0.5s">
                                <div class="box">
                                    <div class="icon"><i class="ion-ios-bookmarks-outline" ></i></div>
                                    <h4 class="title"><a href="https://guiadoestudante.abril.com.br/" target="_blank">Guia do Estudante</a></h4>
                                </div>
                            </div>
                            <div class="col-md-6 col-lg-5 wow bounceInUp" data-wow-delay="0.1s" data-wow-duration="0.5s">
                                <div class="box">
                                    <div class="icon"><i class="ion-ios-bookmarks-outline" ></i></div>
                                    <h4 class="title"><a href="https://www.mundovestibular.com.br/" target="_blank">Mundo Vestibular</a></h4>
                                </div>
                            </div>

                            <div class="col-md-6 col-lg-5 offset-lg-1 wow bounceInUp" data-wow-delay="0.2s" data-wow-duration="0.5s">
                                <div class="box">
                                    <div class="icon"><i class="ion-ios-bookmarks-outline" ></i></div>
                                    <h4 class="title"><a href="https://brasilescola.uol.com.br/" target="_blank">Brasil Escola</a></h4>
                                </div>
                            </div>

                            <div class="col-md-6 col-lg-5 wow bounceInUp" data-wow-delay="0.2s" data-wow-duration="0.5s">
                                <div class="box">
                                    <div class="icon"><i class="ion-ios-bookmarks-outline" ></i></div>
                                    <h4 class="title"><a href="https://www.infoescola.com/" target="_blank">Info-Escola</a></h4>
                                </div>
                            </div>

                            <div class="col-md-6 col-lg-5 offset-lg-1 wow bounceInUp" data-wow-delay="0.2s" data-wow-duration="0.5s">
                                <div class="box">
                                    <div class="icon"><i class="ion-ios-bookmarks-outline" ></i></div>
                                    <h4 class="title"><a href="https://querobolsa.com.br/" target="_blank">Quero Bolsa</a></h4>
                                </div>
                            </div>

                            <div class="col-md-6 col-lg-5 wow bounceInUp" data-wow-delay="0.2s" data-wow-duration="0.5s">
                                <div class="box">
                                    <div class="icon"><i class="ion-ios-bookmarks-outline" ></i></div>
                                    <h4 class="title"><a href="https://www.seade.gov.br/profissoes/" target="_blank">SEADE</a></h4>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}