const usuarioController = require('../../src/controllers/UsuarioController');
const { getMockReq, getMockRes } = require('@jest-mock/express');

jest.mock('../../src/models/Usuario', () => {
  const SequelizeMock = require('sequelize-mock');
  const dbMock = new SequelizeMock();
  return dbMock.define('Usuario')
});

describe('arquivar usuario', () => {
  describe('testes de validação', () => {
    it('deve arquivar o usuário caso ele for encontrado', async () => {
      const Usuario = require('../../src/models/Usuario');
      Usuario.findOne = async () => { return { id: 1 } };

      const req = getMockReq({ body: { user: 1, data: 'Ativo' } });
      const { res } = getMockRes();

      await usuarioController.arquivar(req, res);

      expect(res.status).toHaveBeenCalledWith(200);
    })
  });

  describe('testes de defeito', () => {
    it('deve falhar para usuário inexistente', async () => {
      const Usuario = require('../../src/models/Usuario');
      Usuario.findOne = async () => { return null };

      const req = getMockReq({ body: { user: 1, data: 'Ativo' } });
      const { res } = getMockRes();

      await usuarioController.arquivar(req, res);

      expect(res.status).toHaveBeenCalledWith(401);
    });
  });
});