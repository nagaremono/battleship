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

  const renderBoard = function(playerGrid, player) {
    let targetBoard =
      player === 'human' ? playerGrid.childNodes[0] : computerGrid.childNodes[0]

    for (let horizontalKey in playerGrid) {
      for (let verticalKey in playerGrid[horizontalKey]) {
        if (playerGrid[horizontalKey][verticalKey] === null) continue
        else if (playerGrid[horizontalKey][verticalKey] === 'x') {
          renderBox(targetBoard, horizontalKey, verticalKey, 'X')
        } else if (playerGrid[horizontalKey][verticalKey]) {
          let box = document.createElement('div')
          box.style.backgroundColor = '#1e1e1e'

          renderBox(targetBoard, horizontalKey, verticalKey, box)
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
          box.innerHtml = marker
        }
      })
    })
  }

  return { renderBoard }
})()

export { render }
