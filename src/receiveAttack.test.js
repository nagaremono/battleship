/* eslint-disable no-undef */
import { gameboard } from './gameboard-module'
import { ship } from './ship-module'

jest.mock('./ship-module.js', () => ({
  ship: jest.fn(),
}))

describe('receiveAttack works properly', () => {
  test('receiveAttack send hit to the correct ship', () => {
    ship.mockReturnValueOnce({
      hit: jest.fn(number => number),
    })
    const test = gameboard()
    test.placeShip(['A', 2], 4, 'horizontal')
    test.receiveAttack('A', 2)
    expect(test.grid['A'][2].hit).toBeCalled()
  })
})
