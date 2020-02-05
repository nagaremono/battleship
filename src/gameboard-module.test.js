/* eslint-disable no-undef */
import { gameboard } from './gameboard-module'
import { ship } from './ship-module'

describe('gameboard return a new gameboard', () => {
  test('gameboard have a grid', () => {
    const test = gameboard()
    expect(test).toHaveProperty('grid')
  })
  test('receiveAttack exist', () => {
    const test = gameboard()
    expect(test).toHaveProperty('receiveAttack')
  })
  test('placeship function exist', () => {
    const test = gameboard()
    expect(test).toHaveProperty('placeShip')
  })
  test('isAllSunk exist', () => {
    const test = gameboard()
    expect(test).toHaveProperty('isAllSunk')
  })
})

describe('placeShip work properly', () => {
  test('places vertical ship', () => {
    const test = gameboard()
    test.placeShip(['A', 2], 5, 'vertical')
    expect(test.grid['A'][2]).toBeTruthy()
    expect(test.grid['A'][3]).toBeTruthy()
    expect(test.grid['A'][4]).toBeTruthy()
    expect(test.grid['A'][5]).toBeTruthy()
    expect(test.grid['A'][6]).toBeTruthy()
  })
  test('places horizontal ship', () => {
    const test = gameboard()
    test.placeShip(['A', 2], 5, 'horizontal')
    expect(test.grid['A'][2]).toBeTruthy()
    expect(test.grid['B'][2]).toBeTruthy()
    expect(test.grid['C'][2]).toBeTruthy()
    expect(test.grid['D'][2]).toBeTruthy()
    expect(test.grid['E'][2]).toBeTruthy()
  })
  test('places the same ship to all coordinate', () => {
    const test = gameboard()
    test.placeShip(['A', 2], 4, 'vertical')
    expect(test.grid['A'][2]).toBe(test.grid['A'][3])
    expect(test.grid['A'][2]).toBe(test.grid['A'][4])
    expect(test.grid['A'][2]).toBe(test.grid['A'][5])
  })
})

describe('receiveAttack work properly', () => {
  test('send hit to the correct ship', () => {
    jest.mock('./ship-module')
    const test = gameboard()
    test.placeShip(['A', 2], 5, 'horizontal')
    test.receiveAttack('A', 2)
    expect(ship()).toBeTruthy()
  })
})