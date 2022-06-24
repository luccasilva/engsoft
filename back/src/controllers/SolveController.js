const Usuario = require('../models/Usuario');
const Prova = require('../models/Prova');
const configG36 = require('./config/g36');
const configAIP = require('./config/AIP');
const configAPPG = require('./config/APPG');
const configII = require('./config/II');
const configPF = require('./config/PFISTER');

module.exports = {

    async solveFICHA(data) {
        return data;
    },

    async solvePF(data) {

        let PF = {
            AZUL_1: 0,
            AZUL_2: 0,
            AZUL_3: 0,
            AZUL_4: 0,
            VERMELHO_1: 0,
            VERMELHO_2: 0,
            VERMELHO_3: 0,
            VERMELHO_4: 0,
            VERDE_1: 0,
            VERDE_2: 0,
            VERDE_3: 0,
            VERDE_4: 0,
            VIOLETA_1: 0,
            VIOLETA_2: 0,
            VIOLETA_3: 0,
            LARANJA_1: 0,
            LARANJA_2: 0,
            AMARELO_1: 0,
            AMARELO_2: 0,
            MARROM_1: 0,
            MARROM_2: 0,
            PRETO_1: 0,
            BRANCO_1: 0,
            CINZA_1: 0,
            SOMA: {
                AZUL: 0,
                VERMELHO: 0,
                VERDE: 0,
                VIOLETA: 0,
                LARANJA: 0,
                AMARELO: 0,
                MARROM: 0,
                PRETO: 0,
                BRANCO: 0,
                CINZA: 0,
            }
        };

        let respostas = Array(3);

        for (let i = 0; i < 3; i++) {
            for (const [key, value] of Object.entries(data[i])) {
                switch (configPF[key][value]) {

                    case 'azul1':
                        PF.AZUL_1 += 1;
                        PF.SOMA.AZUL += 1;
                        break;
                    case 'azul2':
                        PF.AZUL_2 += 1;
                        PF.SOMA.AZUL += 1;
                        break;
                    case 'azul3':
                        PF.AZUL_3 += 1;
                        PF.SOMA.AZUL += 1;
                        break;
                    case 'azul4':
                        PF.AZUL_4 += 1;
                        PF.SOMA.AZUL += 1;
                        break;

                    case 'vermelho1':
                        PF.VERMELHO_1 += 1;
                        PF.SOMA.VERMELHO += 1;
                        break;
                    case 'vermelho2':
                        PF.VERMELHO_2 += 1;
                        PF.SOMA.VERMELHO += 1;
                        break;
                    case 'vermelho3':
                        PF.VERMELHO_3 += 1;
                        PF.SOMA.VERMELHO += 1;
                        break;
                    case 'vermelho4':
                        PF.VERMELHO_4 += 1;
                        PF.SOMA.VERMELHO += 1;
                        break;

                    case 'verde1':
                        PF.VERDE_1 += 1;
                        PF.SOMA.VERDE += 1;
                        break;
                    case 'verde2':
                        PF.VERDE_2 += 1;
                        PF.SOMA.VERDE += 1;
                        break;
                    case 'verde3':
                        PF.VERDE_3 += 1;
                        PF.SOMA.VERDE += 1;
                        break;
                    case 'verde4':
                        PF.VERDE_4 += 1;
                        PF.SOMA.VERDE += 1;
                        break;

                    case 'violeta1':
                        PF.VIOLETA_1 += 1;
                        PF.SOMA.VIOLETA += 1;
                        break;
                    case 'violeta2':
                        PF.VIOLETA_2 += 1;
                        PF.SOMA.VIOLETA += 1;
                        break;
                    case 'violeta3':
                        PF.VIOLETA_3 += 1;
                        PF.SOMA.VIOLETA += 1;
                        break;

                    case 'amarelo1':
                        PF.AMARELO_1 += 1;
                        PF.SOMA.AMARELO += 1;
                        break;
                    case 'amarelo2':
                        PF.AMARELO_2 += 1;
                        PF.SOMA.AMARELO += 1;
                        break;

                    case 'laranja1':
                        PF.LARANJA_1 += 1;
                        PF.SOMA.LARANJA += 1;
                        break;
                    case 'laranja2':
                        PF.LARANJA_2 += 1;
                        PF.SOMA.LARANJA += 1;
                        break;

                    case 'marrom1':
                        PF.MARROM_1 += 1;
                        PF.SOMA.MARROM += 1;
                        break;
                    case 'marrom2':
                        PF.MARROM_2 += 1;
                        PF.SOMA.MARROM += 1;
                        break;

                    case 'preto':
                        PF.PRETO_1 += 1;
                        PF.SOMA.PRETO += 1;
                        break;
                    case 'branco':
                        PF.BRANCO_1 += 1;
                        PF.SOMA.BRANCO += 1;
                        break;
                    case 'cinza':
                        PF.CINZA_1 += 1;
                        PF.SOMA.CINZA += 1;
                        break;

                    default:
                        break;
                }
            }

            respostas[i] = PF;

            PF = {
                AZUL_1: 0,
                AZUL_2: 0,
                AZUL_3: 0,
                AZUL_4: 0,
                VERMELHO_1: 0,
                VERMELHO_2: 0,
                VERMELHO_3: 0,
                VERMELHO_4: 0,
                VERDE_1: 0,
                VERDE_2: 0,
                VERDE_3: 0,
                VERDE_4: 0,
                VIOLETA_1: 0,
                VIOLETA_2: 0,
                VIOLETA_3: 0,
                LARANJA_1: 0,
                LARANJA_2: 0,
                AMARELO_1: 0,
                AMARELO_2: 0,
                MARROM_1: 0,
                MARROM_2: 0,
                PRETO_1: 0,
                BRANCO_1: 0,
                CINZA_1: 0,
                SOMA: {
                    AZUL: 0,
                    VERMELHO: 0,
                    VERDE: 0,
                    VIOLETA: 0,
                    LARANJA: 0,
                    AMARELO: 0,
                    MARROM: 0,
                    PRETO: 0,
                    BRANCO: 0,
                    CINZA: 0,
                }
            }
        }

        return { respostas, data };
    },

    async solveSDS(data) {
        const ATIVIDADES = {
            R: data.R1[0].length || ""
        };

        const COMPETENCIAS = {
            R: data.R2[0].length || ""
        };

        const CARREIRAS = {
            R: data.R3[0].length || ""
        };

        const HABILIDADES = {
            MECANICA: data.MECANICA,
            CIENTIFICA: data.CIENTIFICA,
            ARTISTICA: data.ARTISTICA,
            ENSINO: data.ENSINO,
            VENDAS: data.VENDAS,
            ADMINISTRATIVA: data.ADMINISTRATIVA,
            MANUAL: data.MANUAL,
            NUMERICA: data.NUMERICA,
            MUSICAL: data.MUSICAL,
            INTERPESSOAL: data.INTERPESSOAL,
            GERENCIAL: data.GERENCIAL,
            TECNOLOGICA: data.TECNOLOGICA
        };

        const SOMA = {
            R: parseInt(ATIVIDADES.R) + parseInt(COMPETENCIAS.R) + parseInt(CARREIRAS.R) + parseInt(HABILIDADES.MECANICA) + parseInt(HABILIDADES.MANUAL),
            I: parseInt(ATIVIDADES.I) + parseInt(COMPETENCIAS.I) + parseInt(CARREIRAS.I) + parseInt(HABILIDADES.CIENTIFICA) + parseInt(HABILIDADES.NUMERICA),
            A: parseInt(ATIVIDADES.A) + parseInt(COMPETENCIAS.A) + parseInt(CARREIRAS.A) + parseInt(HABILIDADES.ARTISTICA) + parseInt(HABILIDADES.MUSICAL),
            S: parseInt(ATIVIDADES.S) + parseInt(COMPETENCIAS.S) + parseInt(CARREIRAS.S) + parseInt(HABILIDADES.ENSINO) + parseInt(HABILIDADES.INTERPESSOAL),
            E: parseInt(ATIVIDADES.E) + parseInt(COMPETENCIAS.E) + parseInt(CARREIRAS.E) + parseInt(HABILIDADES.VENDAS) + parseInt(HABILIDADES.GERENCIAL),
            C: parseInt(ATIVIDADES.C) + parseInt(COMPETENCIAS.C) + parseInt(CARREIRAS.C) + parseInt(HABILIDADES.ADMINISTRATIVA) + parseInt(HABILIDADES.TECNOLOGICA),
        };

        return { ATIVIDADES, COMPETENCIAS, CARREIRAS, HABILIDADES, SOMA };
    },

    async solveII(data) {
        let CF = 0, CB = 0, C = 0, P = 0, B = 0, S = 0, L = 0, A = 0, M = 0;
        for (const [key, value] of Object.entries(data)) {
            switch (configII[key][value]) {
                case 'CF':
                    CF += 1;
                    break;
                case 'CB':
                    CB += 1;
                    break;
                case 'C':
                    C += 1;
                    break;
                case 'P':
                    P += 1;
                    break;
                case 'B':
                    B += 1;
                    break;
                case 'S':
                    S += 1;
                    break;
                case 'L':
                    L += 1;
                    break;
                case 'A':
                    A += 1;
                    break;
                case 'M':
                    M += 1;
                    break;
                case 'X':
                    break;
                default:
                    break;
            }
        }
        return { CF, CB, C, P, B, S, L, A, M };
    },

    async solveAIP(data) {
        let A = 0, B = 0, C = 0, D = 0, E = 0, F = 0, G = 0, H = 0, I = 0, J = 0;
        for (const [key, value] of Object.entries(data)) {
            switch (configAIP[key][value]) {

                case 'A':
                    A += 1;
                    break;
                case 'B':
                    B += 1;
                    break;
                case 'C':
                    C += 1;
                    break;
                case 'D':
                    D += 1;
                    break;
                case 'E':
                    E += 1;
                    break;
                case 'F':
                    F += 1;
                    break;
                case 'G':
                    G += 1;
                    break;
                case 'H':
                    H += 1;
                    break;
                case 'I':
                    I += 1;
                    break;
                case 'J':
                    J += 1;
                    break;

                case 'A2':
                    A += 0.5;
                    break;
                case 'B2':
                    B += 0.5;
                    break;
                case 'C2':
                    C += 0.5;
                    break;
                case 'D2':
                    D += 0.5;
                    break;
                case 'E2':
                    E += 0.5;
                    break;
                case 'F2':
                    F += 0.5;
                    break;
                case 'G2':
                    G += 0.5;
                    break;
                case 'H2':
                    H += 0.5;
                    break;
                case 'I2':
                    I += 0.5;
                    break;
                case 'J2':
                    J += 0.5;
                    break;
                default:
                    break;
            }
        }
        return { A, B, C, D, E, F, G, H, I, J };
    },

    async solveAPPG(data) {
        let A = 0, B = 0, C = 0, D = 0, E = 0, F = 0, G = 0, H = 0, I = 0, J = 0;
        let K = 0, L = 0, M = 0, N = 0, O = 0, P = 0, Q = 0, R = 0, S = 0, T = 0;
        for (const [key, value] of Object.entries(data)) {
            switch (configAPPG[key][value]) {

                case 'A':
                    A += 1;
                    break;
                case 'B':
                    B += 1;
                    break;
                case 'C':
                    C += 1;
                    break;
                case 'D':
                    D += 1;
                    break;
                case 'E':
                    E += 1;
                    break;
                case 'F':
                    F += 1;
                    break;
                case 'G':
                    G += 1;
                    break;
                case 'H':
                    H += 1;
                    break;
                case 'I':
                    I += 1;
                    break;
                case 'J':
                    J += 1;
                    break;
                case 'K':
                    K += 1;
                    break;
                case 'L':
                    L += 1;
                    break;
                case 'M':
                    M += 1;
                    break;
                case 'N':
                    N += 1;
                    break;
                case 'O':
                    O += 1;
                    break;
                case 'P':
                    P += 1;
                    break;
                case 'Q':
                    Q += 1;
                    break;
                case 'R':
                    R += 1;
                    break;
                case 'S':
                    S += 1;
                    break;
                case 'T':
                    T += 1;
                    break;
                default:
                    break;
            }
        }
        return { A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T };
    },

    async solveG36(data) {
        let acertos = 0, errosA = 0, errosB = 0, errosC = 0;
        for (const [key, value] of Object.entries(data)) {
            switch (configG36[key][value]) {
                case 'A':
                    errosA += 1;
                    break;
                case 'B':
                    errosB += 1;
                    break;
                case 'C':
                    errosC += 1;
                    break;
                default:
                    acertos += 1;
                    break;
            }
        }
        return { acertos, errosA, errosB, errosC };
    }

}