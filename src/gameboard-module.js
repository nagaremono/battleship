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
      if (this.grid[horizontal][vertical]) {
        let shipLocation = this.grid[horizontal][vertical].location
      }
    },
  }

  const placeShip = {
    placeShip: function placeShip(start, length, direction) {
      const toBePlaced = ship(length)
      toBePlaced.location = start

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

  const isAllSunk = {
    isAllSunk: function isAllSunk() {
      return true
    },
  }

  return Object.assign({}, grid, receiveAttack, placeShip, isAllSunk)
}

export { gameboard }
