const admController = require('../../src/controllers/AdmController');
const { getMockReq, getMockRes } = require('@jest-mock/express');

jest.mock('../../src/models/Adm', () => {
  const SequelizeMock = require('sequelize-mock');
  const dbMock = new SequelizeMock();
  return dbMock.define('Adm')
});

describe('cadastro ADM', () => {
  describe('testes de validação', () => {
    it('deve cadastrar o administrador', async () => {
      const req = getMockReq({ body: { nome: 'Diego Test', senha: '123' } });
      const { res } = getMockRes();

      await admController.cadastroAdm(req, res);

      expect(res.json).toHaveBeenCalledWith(expect.objectContaining({
        id: 1,
        senha: 'e5NmxSr1yiRQLsKcaC4rJVLALSq+hHUxf8GNqCKsOQk=',
        nome: 'Diego Test',
      }));
    })
  });

  describe('testes de defeito', () => {
    it('deve falhar para problemas no banco de dados', async () => {
      const Adm = require('../../src/models/Adm');
      Adm.create = async () => { throw new Error(); };

      const req = getMockReq({ body: { nome: 'Diego Test', senha: '123' } });
      const { res } = getMockRes();

      try {
        await admController.cadastroAdm(req, res);
      } catch (error) {
        expect(error).toBeDefined();
      }
      expect.assertions(1);
    });
  });
});