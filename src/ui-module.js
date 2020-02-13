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

    if (player === 'human') {
      for (let horizontalKey in gridObject) {
        for (let verticalKey in gridObject[horizontalKey]) {
          let box = document.createElement('div')
          box.style.width = '100%'
          box.style.height = '100%'
          if (gridObject[horizontalKey][verticalKey] === null) continue
          else if (gridObject[horizontalKey][verticalKey] === 'x') {
            box.textContent = 'X'
            box.style.fontSize = '25px'
            box.style.textAlign = 'center'
            box.style.lineHeight = '100%'
            box.style.color = '#1e1e1e'

            renderBox(targetBoard, horizontalKey, verticalKey, box)
          } else if (gridObject[horizontalKey][verticalKey]) {
            box.style.backgroundColor = '#c4c4c4'

            let shipStart = gridObject[horizontalKey][verticalKey].location
            let shipDirection = gridObject[horizontalKey][verticalKey].direction
            let shipPlacesHit = gridObject[horizontalKey][verticalKey].placesHit
            let hitSpot = 0

            if (shipDirection === 'vertical') {
              hitSpot = verticalKey - shipStart[1] + 1
            } else if (shipDirection === 'horizontal') {
              hitSpot =
                horizontalKey.charCodeAt(0) - shipStart[0].charCodeAt(0) + 1
            }

            shipPlacesHit.forEach(place => {
              if (place === hitSpot) {
                box.textContent = 'X'
                box.style.fontSize = '25px'
                box.style.textAlign = 'center'
                box.style.lineHeight = '100%'
                box.style.color = '#1e1e1e'
              }
            })

            renderBox(targetBoard, horizontalKey, verticalKey, box)
          }
        }
      }
    } else if (player === 'computer') {
      for (let horizontalKey in gridObject) {
        for (let verticalKey in gridObject[horizontalKey]) {
          let box = document.createElement('div')
          box.style.width = '100%'
          box.style.height = '100%'
          if (gridObject[horizontalKey][verticalKey] === null) continue
          else if (gridObject[horizontalKey][verticalKey] === 'x') {
            box.textContent = 'X'
            box.style.fontSize = '25px'
            box.style.textAlign = 'center'
            box.style.lineHeight = '100%'
            box.style.color = '#1e1e1e'

            renderBox(targetBoard, horizontalKey, verticalKey, box)
          } else if (gridObject[horizontalKey][verticalKey]) {
            box.style.backgroundColor = '#c4c4c4'

            let shipStart = gridObject[horizontalKey][verticalKey].location
            let shipDirection = gridObject[horizontalKey][verticalKey].direction
            let shipPlacesHit = gridObject[horizontalKey][verticalKey].placesHit
            let hitSpot = 0

            if (shipDirection === 'vertical') {
              hitSpot = verticalKey - shipStart[1] + 1
            } else if (shipDirection === 'horizontal') {
              hitSpot =
                horizontalKey.charCodeAt(0) - shipStart[0].charCodeAt(0) + 1
            }

            shipPlacesHit.forEach(place => {
              if (place === hitSpot) {
                box.textContent = 'X'
                box.style.fontSize = '25px'
                box.style.textAlign = 'center'
                box.style.lineHeight = '100%'
                box.style.color = '#1e1e1e'

                renderBox(targetBoard, horizontalKey, verticalKey, box)
              }
            })
          }
        }
      }
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
          box.appendChild(marker)
          if (box.childNodes.length > 1) {
            box.removeChild(box.childNodes[0])
          }
        }
      })
    })
  }

  return { renderBoard }
})()

export { render }
