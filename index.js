import { humanPlayer, computerPlayer } from './player-module';
import { render } from './ui-module';

var game = function () {
  var human = {};
  var computer = {};
  var currentPlayer = {};
  var opponent = {};

  var startGame = function startGame() {
    human = humanPlayer();
    computer = computerPlayer();
    currentPlayer = human;
    opponent = computer;

    initializeBoard();

    render.renderBoard('human', human.playerGameboard.grid);

    attachListeners();
  };

  var runOneRound = function runOneRound(coord) {
    currentPlayerAttack(coord);
    isGameOver();
    currentPlayerAttack();
    isGameOver();
  };

  function currentPlayerAttack(coord) {
    if (currentPlayer.type === 'human') currentPlayer.attack(opponent, coord);else if (currentPlayer.type === 'computer') currentPlayer.attack(opponent);
    render.renderBoard(opponent.type, opponent.playerGameboard.grid);
    var temp = currentPlayer;
    currentPlayer = opponent;
    opponent = temp;
  }

  function isGameOver() {
    var winner = checkWinner();
    if (winner) {
      render.renderWinner(winner);
    }
  }

  function checkWinner() {
    if (human.playerGameboard.isAllSunk() === true) return 'computer';else if (computer.playerGameboard.isAllSunk() === true) return 'human';else return null;
  }

  function initializeBoard() {
    var playerShips = JSON.parse(localStorage.getItem('form'));
    var shipLengthList = [5, 4, 3, 3, 2, 2, 2, 1, 1, 1, 1];
    var i = 0;

    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = playerShips[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var ship = _step.value;

        var coord = [ship.horizontal, +ship.vertical];
        var direction = ship.direction;

        human.playerGameboard.placeShip(coord, shipLengthList[i], direction);
        i++;
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator.return) {
          _iterator.return();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }
  }

  function attachListeners() {
    var computerGrid = document.querySelector('.computer').childNodes[0];

    var rows = computerGrid.childNodes;

    rows.forEach(function (row) {
      var boxes = row.childNodes;
      boxes.forEach(function (box) {
        box.addEventListener('click', function (event) {
          if (event.target.textContent === 'X' || event.target.style.backgroundColor === '#c4c4c4') {
            return;
          }
          var horizontal = event.target.dataset.horizontal;
          var vertical = event.target.dataset.vertical;
          var coord = [horizontal, vertical];

          game.runOneRound(coord);
        });
      });
    });
  }

  return { startGame: startGame, runOneRound: runOneRound };
}();