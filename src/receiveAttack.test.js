/* eslint-disable no-undef */
import { gameboard } from './gameboard-module'
import { ship } from './ship-module'

jest.mock('./ship-module.js', () => ({
  ship: jest.fn(),
}))

describe('receiveAttack works properly', () => {
  ship.mockReturnValue({
    hit: jest.fn(number => number),
  })
  test('receiveAttack send hit to the correct ship', () => {
    const test = gameboard()
    test.placeShip(['A', 2], 4, 'horizontal')
    test.receiveAttack('A', 2)
    expect(test.grid['A'][2].hit).toBeCalled()
  })
  test('receiveAttack calls hit with correct argument (horizontal)', () => {
    const test = gameboard()
    test.placeShip(['A', 2], 4, 'horizontal')
    test.receiveAttack('A', 2)
    expect(test.grid['A'][2].hit).toHaveBeenCalledWith(0)
  })
  test('receiveAttack calls hit with correct argument (vertical)', () => {
    const test = gameboard()
    test.placeShip(['A', 0], 4, 'vertical')
    test.receiveAttack('A', 0)
    expect(test.grid['A'][1].hit).toHaveBeenCalledWith(0)
  })
  test('receiveAttack records missed shots', () => {
    const test = gameboard()
    test.receiveAttack('A', 0)
    expect(test.grid['A'][0]).toBe('x')
    expect(test.missedAttacks).toStrictEqual([['A', 0]])
  })
  test('receiveAttack does not mark the same spot as hit twice', () => {
    const test = gameboard()
    test.receiveAttack('A', 0)
    test.receiveAttack('A', 0)
    expect(test.missedAttacks).toStrictEqual([['A', 0]])
    expect(test.grid['A'][0]).toBe('x')
  })
})
