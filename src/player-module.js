import { gameboard } from './gameboard-module'

const humanPlayer = function() {
  const playerGameboard = gameboard()

  const attack = {
    attack: function attack(player, coordArray) {
      player.playerGameboard.receiveAttack(coordArray[0], coordArray[1])
    },
  }

  return Object.assign({}, { playerGameboard: playerGameboard }, attack)
}

const computerPlayer = function() {
  const playerGameboard = gameboard()

  ;(function fillComputerBoard() {
    placeComputerShip(5)
    placeComputerShip(4)

    for (let i = 0; i < 2; i++) {
      placeComputerShip(3)
    }

    for (let i = 0; i < 3; i++) {
      placeComputerShip(2)
    }

    for (let i = 0; i < 4; i++) {
      placeComputerShip(1)
    }
  })()

  const attackHistory = []

  const attack = {
    attack: function attack(player) {
      let horizontalKeys = 'ABCDEFGHIJ'
      let verticalKey = 0
      let horizontalKey = ''
      let coord = []

      do {
        let min = Math.ceil(0)
        let max = Math.floor(9)
        horizontalKey = horizontalKeys.charAt(
          Math.floor(Math.random() * (max - min + 1)) + min
        )
        verticalKey = Math.floor(Math.random() * (max - min + 1)) + min

        coord = [horizontalKey, verticalKey]
      } while (attackHistory.find(current => current === coord))

      player.playerGameboard.receiveAttack(horizontalKey, verticalKey)
      attackHistory.push(coord)
    },
  }

  function generateRandomSpot() {
    let horizontalKeys = 'ABCDEFGHIJ'
    let verticalKey = 0
    let horizontalKey = ''

    let min = Math.ceil(0)
    let max = Math.floor(9)

    horizontalKey = horizontalKeys.charAt(
      Math.floor(Math.random() * (max - min + 1)) + min
    )
    verticalKey = Math.floor(Math.random() * (max - min + 1)) + min

    return [horizontalKey, verticalKey]
  }

  function generateRandomDirection() {
    let min = Math.ceil(0)
    let max = Math.floor(1)
    let number = Math.floor(Math.random() * (max - min + 1)) + min
    if (number === 0) return 'horizontal'
    else return 'vertical'
  }

  function isOccupied(coord, length, direction) {
    if (direction === 'vertical') {
      for (let i = 0; i < length; i++) {
        if (playerGameboard.grid[coord[0]][coord[1] + i]) return true
        else continue
      }
      return false
    } else if (direction === 'horizontal') {
      for (let i = 0; i < length; i++) {
        let horizontalKey = coord[0].charCodeAt(0) + i
        horizontalKey = String.fromCharCode(horizontalKey)

        if (playerGameboard.grid[horizontalKey][coord[1]]) {
          return true
        } else continue
      }
      return false
    }
  }

  function placeComputerShip(length) {
    let coord = []
    let direction = ''

    do {
      coord = generateRandomSpot()
      direction = generateRandomDirection()
    } while (isOccupied(coord, length, direction))

    playerGameboard.grid.placeShip(coord, length, direction)
  }
  return Object.assign({}, { playerGameboard: playerGameboard }, attack)
}

export { humanPlayer, computerPlayer }
