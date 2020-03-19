/* eslint-disable no-undef */
import { gameboard } from './gameboard-module';

describe('gameboard return a new gameboard', function () {
  test('gameboard have a grid', function () {
    var test = gameboard();
    expect(test).toHaveProperty('grid');
  });
  test('receiveAttack exist', function () {
    var test = gameboard();
    expect(test).toHaveProperty('receiveAttack');
  });
  test('placeship function exist', function () {
    var test = gameboard();
    expect(test).toHaveProperty('placeShip');
  });
  test('isAllSunk exist', function () {
    var test = gameboard();
    expect(test).toHaveProperty('isAllSunk');
  });
});

describe('placeShip work properly', function () {
  test('places vertical ship', function () {
    var test = gameboard();
    test.placeShip(['A', 2], 5, 'vertical');
    expect(test.grid['A'][2]).toBeTruthy();
    expect(test.grid['A'][3]).toBeTruthy();
    expect(test.grid['A'][4]).toBeTruthy();
    expect(test.grid['A'][5]).toBeTruthy();
    expect(test.grid['A'][6]).toBeTruthy();
  });
  test('places horizontal ship', function () {
    var test = gameboard();
    test.placeShip(['A', 2], 5, 'horizontal');
    expect(test.grid['A'][2]).toBeTruthy();
    expect(test.grid['B'][2]).toBeTruthy();
    expect(test.grid['C'][2]).toBeTruthy();
    expect(test.grid['D'][2]).toBeTruthy();
    expect(test.grid['E'][2]).toBeTruthy();
  });
  test('places the same ship to all coordinate', function () {
    var test = gameboard();
    test.placeShip(['A', 2], 4, 'vertical');
    expect(test.grid['A'][2]).toBe(test.grid['A'][3]);
    expect(test.grid['A'][2]).toBe(test.grid['A'][4]);
    expect(test.grid['A'][2]).toBe(test.grid['A'][5]);
  });
});

describe('isAllSunk work properly', function () {
  test('return false if one ship still not sunk', function () {
    var test = gameboard();
    test.placeShip(['A', 2], 4, 'vertical');
    expect(test.isAllSunk()).toBe(false);
  });
  test('return true if every ship sank', function () {
    var test = gameboard();
    test.placeShip(['A', 2], 4, 'vertical');
    test.receiveAttack('A', 2);
    test.receiveAttack('A', 3);
    test.receiveAttack('A', 4);
    test.receiveAttack('A', 5);
    expect(test.isAllSunk()).toBe(true);
  });
});