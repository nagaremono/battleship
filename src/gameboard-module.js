import { ship } from './ship-module'

const gameboard = () => {
  const grid = (function() {
    const horizontalCoord = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J']
    let gridObj = {}

    horizontalCoord.forEach(key => {
      let row = { [key]: {} }
      for (let i = 0; i < 10; i++) {
        row[key][i] = null
      }

      Object.assign(gridObj, row)
    })

    return { grid: gridObj }
  })()

  const receiveAttack = {
    receiveAttack: function receiveAttack(horizontal, vertical) {
      if (this.grid[horizontal][vertical] === 'x') {
        return false
      } else if (this.grid[horizontal][vertical]) {
        let shipStartAt = this.grid[horizontal][vertical].location
        let shipDirection = this.grid[horizontal][vertical].direction
        let locationHit = [horizontal, vertical]
        let shipHitSpot = 0

        if (shipDirection === 'vertical') {
          shipHitSpot = locationHit[1] - shipStartAt[1]
        } else {
          shipHitSpot =
            locationHit[0].charCodeAt(0) - shipStartAt[0].charCodeAt(0)
        }

        this.grid[horizontal][vertical].hit(shipHitSpot)
      } else {
        this.missedAttacks.push([horizontal, vertical])
        this.grid[horizontal][vertical] = 'x'
      }
    },
  }

  const placeShip = {
    placeShip: function placeShip(start, length, direction) {
      const toBePlaced = ship(length)
      toBePlaced.location = start
      toBePlaced.direction = direction

      if (direction === 'vertical') {
        for (let i = 0; i < length; i++) {
          this.grid[start[0]][start[1] + i] = toBePlaced
        }
      } else if (direction === 'horizontal') {
        for (let i = 0; i < length; i++) {
          let verticalCoord = start[0].charCodeAt(0) + i
          verticalCoord = String.fromCharCode(verticalCoord)

          this.grid[verticalCoord][start[1]] = toBePlaced
        }
      }
    },
  }

  const missedAttacks = { missedAttacks: [] }

  const isAllSunk = {
    isAllSunk: function isAllSunk() {
      for (let horizontalKey in this.grid) {
        for (let verticalKey in this.grid[horizontalKey]) {
          if (
            this.grid[horizontalKey][verticalKey] &&
            this.grid[horizontalKey][verticalKey] !== 'x'
          ) {
            let result = this.grid[horizontalKey][verticalKey].isSunk()
            if (result === true) continue
            else return false
          }
        }
      }
      return true
    },
  }

  return Object.assign(
    {},
    grid,
    receiveAttack,
    placeShip,
    missedAttacks,
    isAllSunk
  )
}

export { gameboard }
