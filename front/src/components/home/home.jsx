import '../../assets/css/style.css';
import "../../assets/vendor/bootstrap/css/bootstrap.min.css" 
import "../../assets/vendor/font-awesome/css/font-awesome.min.css" 
import "../../assets/vendor/animate.css/animate.min.css" 
import "../../assets/vendor/ionicons/css/ionicons.min.css" 
import "../../assets/vendor/owl.carousel/assets/owl.carousel.min.css" 
import "../../assets/vendor/venobox/venobox.css"

import React, { useState } from "react";
import logo3 from '../../assets/img/IMOP-LOGO3.png'
import extra2 from '../../assets/img/about-extra-2.png'
import extra11 from '../../assets/img/about-extra-11.png'
import aboutimg from '../../assets/img/about-img.svg'

import HomeNavbar from '../shared/homeNavbar';
import Footer from "../shared/footer"
import IntroSection from '../shared/introSection';

import axios from "axios"

export default (props) => {

    return (
        <div className="App">
    
            <HomeNavbar> </HomeNavbar>

            <IntroSection>
                <img src={logo3} alt="" className="center"/>
            </IntroSection>
        
            <main id="main">
    
              {/* <!-- ======= About Section ======= --> */}
              <section id="about">
                <div className="container">
    
                  <header className="section-header">
                    <h3>O que é?</h3>
                  </header>
    
                  <div className="row about-container">
    
                    <div className="col-lg-6 content order-lg-1 order-2">
                      <h3>Missão:</h3>
                      <p className="missaoValor">
                        Auxiliar estudantes no processo de escolha da futura carreira profissional. Utilizando Metodologia Exclusiva, fundamentada em técnicas da Psicologia e em estudos das profissões, possibilitamos ao jovem, maior assertividade em sua decisão.
                      </p>
                      <div className="icon-box wow fadeInUp">
                        <div className="icon"><i className="fa fa-briefcase"></i></div>
                        <br/>
                        <h4 className="title"><a href="">Atendimento presencial</a></h4>
                      </div>
    
                      <div className="icon-box wow fadeInUp" data-wow-delay="0.2s">
                        <div className="icon"><i className="fa fa-wifi"></i></div>
                        <br/>
                        <h4 className="title"><a href="">Atendimento on-line</a></h4>
                      </div>
    
                      <div className="icon-box wow fadeInUp" data-wow-delay="0.4s">
                        <div className="icon"><i className="fa fa-home"></i></div>
                        <br/>
                        <h4 className="title"><a href="">Atendimento em domicílio</a></h4>
                      </div>
    
                    </div>
    
                    <div className="col-lg-6 background order-lg-2 order-1 wow fadeInUp">
                      <img src={extra11} className="img-fluid" alt=""/>
                    </div>
                  </div>
    
                  <div className="row about-extra">
                    <div className="col-lg-6 wow fadeInUp">
                      <img src={extra2} className="img-fluid" alt=""/>
                    </div>
    
                      <div id="ml-20" className="about-container">
                        <h4 id="mt-20">Valores:</h4><br/>
                          <div className="icon-box wow fadeInUp">
                            <div className="icon"><i className="fa fa-check"></i></div>
                            <br/>
                            <h4 className="title"><a href="">Ética</a></h4>
                          </div>
              
                          <div className="icon-box wow fadeInUp" data-wow-delay="0.2s">
                            <div className="icon"><i className="fa fa-check"></i></div>
                            <br/>
                            <h4 className="title"><a href="">Inovação</a></h4>
                          </div>
              
                          <div className="icon-box wow fadeInUp" data-wow-delay="0.4s">
                            <div className="icon"><i className="fa fa-check"></i></div>
                            <br/>
                            <h4 className="title"><a href="">Excelência no atendimento</a></h4>
                          </div>
    
                          <div className="icon-box wow fadeInUp" data-wow-delay="0.8s">
                            <div className="icon"><i className="fa fa-check"></i></div>
                            <br/>
                            <h4 className="title"><a href="">Credibilidade</a></h4>
                          </div>
              
                        </div>
    
                  </div>
    
                </div>
              </section>{/* <!-- End About Section --> */}
    
            </main>{/* <!-- End #main --> */}
    
            <Footer></Footer>
            </div>
      );
    }