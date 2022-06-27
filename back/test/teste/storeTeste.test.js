const testeController = require('../../src/controllers/TesteController');
const { getMockReq, getMockRes } = require('@jest-mock/express');

jest.mock('../../src/models/Teste', () => {
  const SequelizeMock = require('sequelize-mock');
  const dbMock = new SequelizeMock();
  return dbMock.define('Teste')
});

describe('store teste', () => {
  describe('testes de validação', () => {
    it('deve guardar o teste', async () => {
      const req = getMockReq({ body: { nome: 'Diego Test', perguntas: ['Pergunta 1', 'Pergunta 2'] } });
      const { res } = getMockRes();

      await testeController.store(req, res);

      expect(res.json).toHaveBeenCalledWith(expect.objectContaining({
        nome: 'Diego Test',
        perguntas: ['Pergunta 1', 'Pergunta 2'],
      }));
    })
  });

  describe('testes de defeito', () => {
    it('deve falhar para problemas com o banco de dados', async () => {
      const Teste = require('../../src/models/Teste');
      Teste.create = async () => { throw new Error(); };

      const req = getMockReq();
      const { res } = getMockRes();

      try {
        await testeController.aplicar(req, res);
      } catch (error) {
        expect(error).toBeDefined();
      }
      expect.assertions(1);
    });
  });
});