/* eslint-disable no-undef */
import { humanPlayer, computerPlayer } from './player-module';
import { gameboard } from './gameboard-module';

jest.mock('./gameboard-module', function () {
  return {
    gameboard: jest.fn()
  };
});

describe('test humanPlayer object', function () {
  gameboard.mockReturnValue({
    receiveAttack: jest.fn(function (horizontal, vertical) {
      return horizontal + vertical;
    })
  });
  test('attack success', function () {
    var player1 = humanPlayer();
    var player2 = humanPlayer();
    player2.attack(player1, ['A', 2]);
    expect(player1.playerGameboard.receiveAttack).toHaveBeenCalledWith('A', 2);
  });
});

describe('test computerPlayer object', function () {
  gameboard.mockReturnValue({
    receiveAttack: jest.fn(function (horizontal, vertical) {
      return horizontal + vertical;
    })
  });
  test('attack success', function () {
    var player1 = humanPlayer();
    var computer = computerPlayer();
    computer.attack(player1);
    expect(player1.playerGameboard.receiveAttack).toBeCalled();
  });
});