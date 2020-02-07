/* eslint-disable no-undef */
import { humanPlayer, computerPlayer } from './player-module'
import { gameboard } from './gameboard-module'

jest.mock('./gameboard-module', () => ({
  gameboard: jest.fn(),
}))

describe('test humanPlayer object', () => {
  gameboard.mockReturnValue({
    receiveAttack: jest.fn((horizontal, vertical) => horizontal + vertical),
  })
  test('attack success', () => {
    const player1 = humanPlayer()
    const player2 = humanPlayer()
    player2.attack(player1, ['A', 2])
    expect(player1.playerGameboard.receiveAttack).toHaveBeenCalledWith('A', 2)
  })
})

describe('test computerPlayer object', () => {
  gameboard.mockReturnValue({
    receiveAttack: jest.fn((horizontal, vertical) => horizontal + vertical),
  })
  test('attack success', () => {
    const player1 = humanPlayer()
    const computer = computerPlayer()
    computer.attack(player1)
    expect(player1.playerGameboard.receiveAttack).toBeCalled()
  })
})
