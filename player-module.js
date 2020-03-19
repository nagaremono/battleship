import { gameboard } from './gameboard-module';

var humanPlayer = function humanPlayer() {
  var playerGameboard = gameboard();

  var type = { type: 'human' };

  var attack = {
    attack: function attack(player, coordArray) {
      player.playerGameboard.receiveAttack(coordArray[0], coordArray[1]);
    }
  };

  return Object.assign({}, { playerGameboard: playerGameboard }, attack, type);
};

var computerPlayer = function computerPlayer() {
  var playerGameboard = gameboard();

  var type = { type: 'computer' };(function fillComputerBoard() {
    placeComputerShip(5);
    placeComputerShip(4);

    for (var i = 0; i < 2; i++) {
      placeComputerShip(3);
    }

    for (var _i = 0; _i < 3; _i++) {
      placeComputerShip(2);
    }

    for (var _i2 = 0; _i2 < 4; _i2++) {
      placeComputerShip(1);
    }
  })();

  var attackHistory = [];

  var attack = {
    attack: function attack(player) {
      var horizontalKeys = 'ABCDEFGHIJ';
      var verticalKey = 0;
      var horizontalKey = '';
      var coord = [];

      do {
        var min = Math.ceil(0);
        var max = Math.floor(9);
        horizontalKey = horizontalKeys.charAt(Math.floor(Math.random() * (max - min + 1)) + min);
        verticalKey = Math.floor(Math.random() * (max - min + 1)) + min;

        coord = [horizontalKey, verticalKey];
      } while (attackHistory.find(function (current) {
        return current === coord;
      }));

      player.playerGameboard.receiveAttack(horizontalKey, verticalKey);
      attackHistory.push(coord);
    }
  };

  function generateRandomSpot() {
    var horizontalKeys = 'ABCDEFGHIJ';
    var verticalKey = 0;
    var horizontalKey = '';

    var min = Math.ceil(0);
    var max = Math.floor(9);

    horizontalKey = horizontalKeys.charAt(Math.floor(Math.random() * (max - min + 1)) + min);
    verticalKey = Math.floor(Math.random() * (max - min + 1)) + min;

    return [horizontalKey, verticalKey];
  }

  function generateRandomDirection() {
    var min = Math.ceil(0);
    var max = Math.floor(1);
    var number = Math.floor(Math.random() * (max - min + 1)) + min;
    if (number === 0) return 'horizontal';else return 'vertical';
  }

  function isOccupied(coord, length, direction) {
    if (direction === 'vertical') {
      for (var i = 0; i < length; i++) {
        if (playerGameboard.grid[coord[0]][coord[1] + i]) return true;else continue;
      }
      return false;
    } else if (direction === 'horizontal') {
      for (var _i3 = 0; _i3 < length; _i3++) {
        var horizontalKey = coord[0].charCodeAt(0) + _i3;

        try {
          playerGameboard.grid[String.fromCharCode(horizontalKey)][coord[1]];
        } catch (error) {
          return true;
        }

        if (playerGameboard.grid[String.fromCharCode(horizontalKey)][coord[1]]) {
          return true;
        } else continue;
      }
      return false;
    }
  }

  function placeComputerShip(length) {
    var coord = [];
    var direction = '';

    do {
      coord = generateRandomSpot();
      direction = generateRandomDirection();
    } while (isOccupied(coord, length, direction));

    playerGameboard.placeShip(coord, length, direction);
  }
  return Object.assign({}, { playerGameboard: playerGameboard }, attack, type);
};

export { humanPlayer, computerPlayer };