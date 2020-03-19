var render = function () {
  var playerGrid = document.querySelector('.player');
  var computerGrid = document.querySelector('.computer');
  var grids = [playerGrid, computerGrid];
  var horizontalKeys = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];

  grids.forEach(function (grid) {
    var table = document.createElement('table');

    var coordRow = document.createElement('tr');
    for (var i = -1; i < 10; i++) {
      var coord = document.createElement('td');
      if (i === -1) {
        coordRow.appendChild(coord);
        continue;
      }
      coord.textContent = horizontalKeys[i];
      coordRow.appendChild(coord);
    }
    table.appendChild(coordRow);

    for (var _i = 0; _i < 10; _i++) {
      var row = document.createElement('tr');
      var rowIndex = document.createElement('td');
      rowIndex.textContent = _i;
      row.appendChild(rowIndex);

      for (var j = 0; j < 10; j++) {
        var box = document.createElement('td');
        box.dataset.horizontal = horizontalKeys[j];
        box.dataset.vertical = _i;
        row.appendChild(box);
      }

      table.appendChild(row);
    }
    grid.appendChild(table);
  });

  var renderBoard = function renderBoard(player, gridObject) {
    var targetBoard = player === 'human' ? playerGrid.childNodes[0] : computerGrid.childNodes[0];

    var _loop = function _loop(horizontalKey) {
      var _loop2 = function _loop2(verticalKey) {
        if (gridObject[horizontalKey][verticalKey] === null) return 'continue';else if (gridObject[horizontalKey][verticalKey] === 'x') {
          renderBox(targetBoard, horizontalKey, verticalKey, 'missed');
        } else if (gridObject[horizontalKey][verticalKey]) {
          var ship = gridObject[horizontalKey][verticalKey];
          var shipStart = ship.location;
          var shipDirection = ship.direction;
          var shipPlacesHit = ship.placesHit;
          var hitSpot = '';
          if (shipPlacesHit.length === 0 && player === 'human') {
            renderBox(targetBoard, horizontalKey, verticalKey, 'exist');
          }
          if (shipPlacesHit.length > 0) {
            if (shipDirection === 'vertical') {
              hitSpot = verticalKey - shipStart[1];
            } else if (shipDirection === 'horizontal') {
              hitSpot = horizontalKey.charCodeAt(0) - shipStart[0].charCodeAt(0);
            }
            shipPlacesHit.forEach(function (place) {
              if (place === hitSpot) {
                renderBox(targetBoard, horizontalKey, verticalKey, 'hit');
              }
            });
          }
        }
      };

      for (var verticalKey in gridObject[horizontalKey]) {
        var _ret2 = _loop2(verticalKey);

        if (_ret2 === 'continue') continue;
      }
    };

    for (var horizontalKey in gridObject) {
      _loop(horizontalKey);
    }
  };

  var renderWinner = function renderWinner(winner) {
    var announcementBox = document.querySelector('.winner');

    if (announcementBox.childNodes.length > 1) return false;
    var announcement = document.createElement('p');
    if (winner === 'human') {
      announcement.textContent = 'Congratulations! You Won!';
    } else if (winner === 'computer') {
      announcement.textContent = 'Too bad! You Lost!';
    }

    if (announcementBox.childNodes.length === 0) {
      announcementBox.appendChild(announcement);
    }
  };

  function renderBox(board, horizontal, vertical, marker) {
    var rows = board.childNodes;

    rows.forEach(function (row) {
      var boxes = row.childNodes;
      boxes.forEach(function (box) {
        if (box.dataset.horizontal === horizontal && box.dataset.vertical === vertical) {
          if (marker === 'missed') {
            box.textContent = 'X';
          } else if (marker === 'exist') {
            box.style.backgroundColor = '#c4c4c4';
          } else if (marker === 'hit') {
            box.style.backgroundColor = '#c4c4c4';
            box.textContent = 'X';
            box.style.color = '#1e1e1e';
          }
        }
      });
    });
  }

  return { renderBoard: renderBoard, renderWinner: renderWinner };
}();

export { render };