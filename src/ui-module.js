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
        row.appendChild(box)
      }

      table.appendChild(row)
    }
    grid.appendChild(table)
  })
})()

export { render }
