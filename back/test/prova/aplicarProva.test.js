const provaController = require('../../src/controllers/ProvaController');
const { getMockReq, getMockRes } = require('@jest-mock/express');

jest.mock('../../src/models/Prova', () => {
  const SequelizeMock = require('sequelize-mock');
  const dbMock = new SequelizeMock();
  return dbMock.define('Prova')
});

describe('aplicar prova', () => {
  describe('testes de validação', () => {
    it('deve aplicar a prova', async () => {
      const req = getMockReq({ body: { usuario_id: 1, teste_id: 2 } });
      const { res } = getMockRes();

      await provaController.aplicar(req, res);

      expect(res.json).toHaveBeenCalledWith(expect.objectContaining({
        usuario_id: 1,
        teste_id: 2,
        status: "APLICADO",
        respostas: null,
        resultado: null
      }));
    })
  });

  describe('testes de defeito', () => {
    it('deve falhar para problemas com o banco de dados', async () => {
      const Prova = require('../../src/models/Prova');
      Prova.create = async () => { throw new Error(); };

      const req = getMockReq();
      const { res } = getMockRes();

      try {
        await provaController.aplicar(req, res);
      } catch (error) {
        expect(error).toBeDefined();
      }
      expect.assertions(1);
    });
  });
});