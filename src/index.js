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

    human.playerGameBoard.placeShip(['A', 0], 5, 'horizontal')
    human.playerGameBoard.placeShip(['A', 1], 4, 'horizontal')
    human.playerGameBoard.placeShip(['F', 0], 3, 'horizontal')
    human.playerGameBoard.placeShip(['F', 1], 3, 'vertical')
    human.playerGameBoard.placeShip(['B', 7], 2, 'horizontal')
    human.playerGameBoard.placeShip(['B', 8], 2, 'horizontal')
    human.playerGameBoard.placeShip(['B', 9], 2, 'horizontal')
    human.playerGameBoard.placeShip(['G', 9], 1, 'horizontal')
    human.playerGameBoard.placeShip(['H', 9], 1, 'horizontal')
    human.playerGameBoard.placeShip(['I', 9], 1, 'horizontal')
    human.playerGameBoard.placeShip(['J', 9], 1, 'horizontal')

    render.renderBoard('human', human.playerGameBoard.grid)
  }

  return { startGame }
})()

