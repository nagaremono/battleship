/* eslint-disable no-undef */
import { gameboard } from './gameboard-module';
import { ship } from './ship-module';

jest.mock('./ship-module.js', function () {
  return {
    ship: jest.fn()
  };
});

describe('receiveAttack works properly', function () {
  ship.mockReturnValue({
    hit: jest.fn(function (number) {
      return number;
    })
  });
  test('receiveAttack send hit to the correct ship', function () {
    var test = gameboard();
    test.placeShip(['A', 2], 4, 'horizontal');
    test.receiveAttack('A', 2);
    expect(test.grid['A'][2].hit).toBeCalled();
  });
  test('receiveAttack calls hit with correct argument (horizontal)', function () {
    var test = gameboard();
    test.placeShip(['A', 2], 4, 'horizontal');
    test.receiveAttack('A', 2);
    expect(test.grid['A'][2].hit).toHaveBeenCalledWith(0);
  });
  test('receiveAttack calls hit with correct argument (vertical)', function () {
    var test = gameboard();
    test.placeShip(['A', 0], 4, 'vertical');
    test.receiveAttack('A', 0);
    expect(test.grid['A'][1].hit).toHaveBeenCalledWith(0);
  });
  test('receiveAttack records missed shots', function () {
    var test = gameboard();
    test.receiveAttack('A', 0);
    expect(test.grid['A'][0]).toBe('x');
    expect(test.missedAttacks).toStrictEqual([['A', 0]]);
  });
  test('receiveAttack does not mark the same spot as hit twice', function () {
    var test = gameboard();
    test.receiveAttack('A', 0);
    test.receiveAttack('A', 0);
    expect(test.missedAttacks).toStrictEqual([['A', 0]]);
    expect(test.grid['A'][0]).toBe('x');
  });
});