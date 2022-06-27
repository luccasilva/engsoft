const authController = require('../../src/controllers/AuthController');
const { getMockReq, getMockRes } = require('@jest-mock/express');

jest.mock('../../src/models/Usuario', () => {
  const SequelizeMock = require('sequelize-mock');
  const dbMock = new SequelizeMock();
  return dbMock.define('Usuario')
});

describe('auth login', () => {
  describe('testes de validação', () => {
    it('deve logar', async () => {
      const Usuario = require('../../src/models/Usuario');
      Usuario.findOne = async () => { return { id: 1, nome: 'Diego Test' } };

      const req = getMockReq({ body: { senha: '123' } });
      const { res } = getMockRes();

      await authController.login(req, res);

      expect(res.json).toHaveBeenCalledWith(expect.objectContaining({ auth: true }));
    })
  });

  describe('testes de defeito', () => {
    it('deve falhar para usuário não existente', async () => {
      const Usuario = require('../../src/models/Usuario');
      Usuario.findOne = async () => { return null };

      const req = getMockReq({ body: { senha: '123' } });
      const { res } = getMockRes();

      await authController.login(req, res);

      expect(res.status).toHaveBeenCalledWith(401);
    });
  });
});