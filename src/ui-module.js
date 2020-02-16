const render = (function() {
  let playerGrid = document.querySelector('.player')
  let computerGrid = document.querySelector('.computer')
  let grids = [playerGrid, computerGrid]
  let horizontalKeys = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J']

  grids.forEach(grid => {
    let table = document.createElement('table')

    let coordRow = document.createElement('tr')
    for (let i = -1; i < 10; i++) {
      let coord = document.createElement('td')
      if (i === -1) {
        coordRow.appendChild(coord)
        continue
      }
      coord.textContent = horizontalKeys[i]
      coordRow.appendChild(coord)
    }
    table.appendChild(coordRow)

    for (let i = 0; i < 10; i++) {
      let row = document.createElement('tr')
      let rowIndex = document.createElement('td')
      rowIndex.textContent = i
      row.appendChild(rowIndex)

      for (let j = 0; j < 10; j++) {
        let box = document.createElement('td')
        box.dataset.horizontal = horizontalKeys[j]
        box.dataset.vertical = i
        row.appendChild(box)
      }

      table.appendChild(row)
    }
    grid.appendChild(table)
  })

  const renderBoard = function(player, gridObject) {
    let targetBoard =
      player === 'human' ? playerGrid.childNodes[0] : computerGrid.childNodes[0]

    for (let horizontalKey in gridObject) {
      for (let verticalKey in gridObject[horizontalKey]) {
        if (gridObject[horizontalKey][verticalKey] === null) continue
        else if (gridObject[horizontalKey][verticalKey] === 'x') {
          renderBox(targetBoard, horizontalKey, verticalKey, 'missed')
        } else if (gridObject[horizontalKey][verticalKey]) {
          let ship = gridObject[horizontalKey][verticalKey]
          let shipStart = ship.location
          let shipDirection = ship.direction
          let shipPlacesHit = ship.placesHit
          let hitSpot = ''
          if (shipPlacesHit.length === 0 && player === 'human') {
            renderBox(targetBoard, horizontalKey, verticalKey, 'exist')
          }
          if (shipPlacesHit.length > 0) {
            if (shipDirection === 'vertical') {
              hitSpot = verticalKey - shipStart[1]
            } else if (shipDirection === 'horizontal') {
              hitSpot = horizontalKey.charCodeAt(0) - shipStart[0].charCodeAt(0)
            }
            shipPlacesHit.forEach(place => {
              if (place === hitSpot) {
                renderBox(targetBoard, horizontalKey, verticalKey, 'hit')
              }
            })
          }
        }
      }
    }
  }

  const renderWinner = function(winner) {
    let announcementBox = document.querySelector('.winner')

    if (announcementBox.childNodes.length > 1) return false
    let announcement = document.createElement('p')
    if (winner === 'human') {
      announcement.textContent = 'Congratulations! You Won!'
    } else if (winner === 'computer') {
      announcement.textContent = 'Too bad! You Lost!'
    }

    if (announcementBox.childNodes.length === 0) {
      announcementBox.appendChild(announcement)
    }
  }

  function renderBox(board, horizontal, vertical, marker) {
    let rows = board.childNodes

    rows.forEach(row => {
      let boxes = row.childNodes
      boxes.forEach(box => {
        if (
          box.dataset.horizontal === horizontal &&
          box.dataset.vertical === vertical
        ) {
          if (marker === 'missed') {
            box.textContent = 'X'
          } else if (marker === 'exist') {
            box.style.backgroundColor = '#c4c4c4'
          } else if (marker === 'hit') {
            box.style.backgroundColor = '#c4c4c4'
            box.textContent = 'X'
            box.style.color = '#1e1e1e'
          }
        }
      })
    })
  }

  return { renderBoard, renderWinner }
})()

export { render }
