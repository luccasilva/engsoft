import '../../assets/css/login.css';

import { useForm } from "react-hook-form";


import Footer from '../shared/footer';
import HomeNavbar from '../shared/homeNavbar';
import IntroSection from '../shared/introSection';

import { login } from '../../services/loginService';
import Notification from '../testes/shared/notification';
import { Navigate } from "react-router-dom";

import React, { useState } from 'react';

export default (props) => {

    const [errorLogin, setErrorLogin] = useState(false);
    const [auth, setAuth] = useState(false);

    const state = {
        token: ""
    };

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = async (data) => {
        setErrorLogin(false);
        try {
            const response = await login(data);
            localStorage.setItem('AuthToken', response.data.token);
            setAuth(response.data.auth);
        }
        catch (error) {
            setErrorLogin(true);
        }
    };

    return (
        <div>

            {errorLogin && <Notification titulo="Usuário não encontrado!" />}
            {auth && <Navigate to="/testes" />}

            <HomeNavbar></HomeNavbar>

            <IntroSection>
                <div className='login'>
                    <div className="container">
                        <div>
                            <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
                                <div className="card border-0 shadow rounded-3 my-5">
                                    <div className="card-body p-4 p-sm-5">
                                        <h5 className="card-title text-center mb-5 fw-light fs-5">Cliente</h5>
                                        <form onSubmit={handleSubmit(onSubmit)}>
                                            <div className="form-floating mb-3">
                                                <input type="number" className="form-control" id="floatingInput" placeholder="000000"  {...register("senha", { required: (true) })} />
                                                <label>Senha de Acesso</label>
                                            </div>
                                            <div className="d-grid">
                                                <button className="btn-login" type="submit"> ENTRAR </button>
                                            </div>
                                            <div>
                                                <p>Não é cliente ainda? <br /> <span> Entre em contato agora! </span></p>
                                            </div>
                                            <hr className="my-4" />
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </IntroSection>

            <Footer></Footer>
        </div>
    );
}