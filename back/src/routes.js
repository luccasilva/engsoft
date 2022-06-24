const express = require('express');
const cors = require('cors');

const UsuarioController = require('./controllers/UsuarioController')
const AuthController =  require('./controllers/AuthController');
const ADMController =  require('./controllers/AdmController');
const TesteController =  require('./controllers/TesteController');
const ProvaController =  require('./controllers/ProvaController');
const ProfissoesController = require('./controllers/ProfissoesController');

const { verifyJWT } = require('./controllers/AuthController');
const { verifyJWTADM } = require('./controllers/AdmController');

const routes = express.Router();

routes.use(cors());

routes.post('/cadastro', verifyJWTADM, UsuarioController.cadastro);

routes.post('/cadastro/adm', verifyJWTADM, ADMController.cadastroAdm);

routes.post('/login', AuthController.login);

routes.post('/loginADM', ADMController.loginADM);

// routes.post('/cadastro/teste', TesteController.store);

routes.post('/aplicar/teste', verifyJWTADM, ProvaController.aplicar);

routes.post('/cancelar/teste', verifyJWTADM, ProvaController.cancelar);

routes.post('/resultado', verifyJWTADM, ProvaController.resultado);

routes.post('/verUsuario', verifyJWTADM, UsuarioController.verUsuario);

routes.get('/testes', verifyJWT, ProvaController.listar);

routes.get('/usuarios', verifyJWTADM, UsuarioController.listar);

routes.post('/arquivados', verifyJWTADM, UsuarioController.arquivados);

routes.post('/responder', verifyJWT, ProvaController.responder);

routes.post('/atualizar', verifyJWTADM, ProvaController.atualizar);

routes.post('/arquivar', verifyJWTADM, UsuarioController.arquivar);

routes.post('/deletar', verifyJWTADM, UsuarioController.deletar);

routes.get('/profissoes', ProfissoesController.listarProfissoes);

routes.post('/cadastrar/profissao', verifyJWTADM, ProfissoesController.cadastrarProfissao);

routes.post('/atualizar/profissao', verifyJWTADM, ProfissoesController.atualizarProfissao);

routes.post('/apagar/profissao', verifyJWTADM, ProfissoesController.apagarProfissao);

routes.post('/verProfissao', verifyJWTADM, ProfissoesController.verProfissao);

module.exports = routes;