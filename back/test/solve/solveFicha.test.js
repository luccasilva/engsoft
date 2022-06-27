const solveController = require('../../src/controllers/SolveController');
const { getMockReq, getMockRes } = require('@jest-mock/express');

describe('solve ficha', () => {
  describe('testes de validação', () => {
    it('deve resolver a ficha', async () => {
      const response = await solveController.solveFICHA({ ficha_resposta_1: 1, ficha_resposta_2: 2 });

      expect(response).toEqual({ ficha_resposta_1: 1, ficha_resposta_2: 2 });
    })
  });
});