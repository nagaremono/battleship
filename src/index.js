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

    initializeBoard()

    render.renderBoard('human', human.playerGameboard.grid)

    attachListeners()
  }

  const runOneRound = function(coord) {
    currentPlayerAttack(coord)
    isGameOver()
    currentPlayerAttack()
    isGameOver()
  }

  function currentPlayerAttack(coord) {
    if (currentPlayer.type === 'human') currentPlayer.attack(opponent, coord)
    else if (currentPlayer.type === 'computer') currentPlayer.attack(opponent)
    render.renderBoard(opponent.type, opponent.playerGameboard.grid)
    let temp = currentPlayer
    currentPlayer = opponent
    opponent = temp
  }

  function isGameOver() {
    let winner = checkWinner()
    if (winner) {
      render.renderWinner(winner)
    }
  }

  function checkWinner() {
    if (human.playerGameboard.isAllSunk() === true) return 'computer'
    else if (computer.playerGameboard.isAllSunk() === true) return 'human'
    else return null
  }

  function initializeBoard() {
    const playerShips = JSON.parse(localStorage.getItem('form'))
    const shipLengthList = [5, 4, 3, 3, 2, 2, 2, 1, 1, 1, 1]
    let i = 0

    for (let ship of playerShips) {
      let coord = [ship.horizontal, +ship.vertical]
      let direction = ship.direction

      human.playerGameboard.placeShip(coord, shipLengthList[i], direction)
      i++
    }
  }

  function attachListeners() {
    let computerGrid = document.querySelector('.computer').childNodes[0]

    let rows = computerGrid.childNodes

    rows.forEach(row => {
      let boxes = row.childNodes
      boxes.forEach(box => {
        box.addEventListener('click', event => {
          if (
            event.target.textContent === 'X' ||
            event.target.style.backgroundColor === '#c4c4c4'
          ) {
            return
          }
          let horizontal = event.target.dataset.horizontal
          let vertical = event.target.dataset.vertical
          let coord = [horizontal, vertical]

          game.runOneRound(coord)
        })
      })
    })
  }

  return { startGame, runOneRound }
})()

game.startGame()
