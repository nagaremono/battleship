import { humanPlayer, computerPlayer } from './player-module'
import { render } from './ui-module'

const game = (function() {
  let human = {}
  let computer = {}
  let currentPlayer = {}
  let opponent = {}

  const startGame = function() {
    human = humanPlayer()
    computer = computerPlayer()
    currentPlayer = human
    opponent = computer

    human.playerGameboard.placeShip(['A', 0], 5, 'horizontal')
    human.playerGameboard.placeShip(['A', 1], 4, 'horizontal')
    human.playerGameboard.placeShip(['F', 0], 3, 'horizontal')
    human.playerGameboard.placeShip(['F', 1], 3, 'vertical')
    human.playerGameboard.placeShip(['B', 7], 2, 'horizontal')
    human.playerGameboard.placeShip(['B', 8], 2, 'horizontal')
    human.playerGameboard.placeShip(['B', 9], 2, 'horizontal')
    human.playerGameboard.placeShip(['G', 9], 1, 'horizontal')
    human.playerGameboard.placeShip(['H', 9], 1, 'horizontal')
    human.playerGameboard.placeShip(['I', 9], 1, 'horizontal')
    human.playerGameboard.placeShip(['J', 9], 1, 'horizontal')

    render.renderBoard('human', human.playerGameboard.grid)
  }

  return { startGame }
})()

game.startGame()
