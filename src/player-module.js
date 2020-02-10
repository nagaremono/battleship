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

  const attackHistory = []

  const attack = {
    attack: function attack(player) {
      let horizontalKeys = 'ABCDEFGHIJ'
      let verticalKey = 0
      let horizontalKey = ''
      let coord = []

      do {
        horizontalKey = horizontalKeys.charAt(
          Math.floor(Math.random() * (9 - 0)) + 0
        )
        verticalKey = Math.floor(Math.random() * (9 - 0)) + 0

        coord = [horizontalKey, verticalKey]
      } while (attackHistory.find(current => current === coord))

      player.playerGameboard.receiveAttack(horizontalKey, verticalKey)
      attackHistory.push(coord)
    },
  }

  return Object.assign({}, { playerGameboard: playerGameboard }, attack)
}

export { humanPlayer, computerPlayer }
