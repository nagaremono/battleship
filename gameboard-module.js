function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import { ship } from './ship-module';

var gameboard = function gameboard() {
  var grid = function () {
    var horizontalCoord = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
    var gridObj = {};

    horizontalCoord.forEach(function (key) {
      var row = _defineProperty({}, key, {});
      for (var i = 0; i < 10; i++) {
        row[key][i] = null;
      }

      Object.assign(gridObj, row);
    });

    return { grid: gridObj };
  }();

  var receiveAttack = {
    receiveAttack: function receiveAttack(horizontal, vertical) {
      if (this.grid[horizontal][vertical] === 'x') {
        return false;
      } else if (this.grid[horizontal][vertical]) {
        var shipStartAt = this.grid[horizontal][vertical].location;
        var shipDirection = this.grid[horizontal][vertical].direction;
        var locationHit = [horizontal, vertical];
        var shipHitSpot = 0;

        if (shipDirection === 'vertical') {
          shipHitSpot = locationHit[1] - shipStartAt[1];
        } else {
          shipHitSpot = locationHit[0].charCodeAt(0) - shipStartAt[0].charCodeAt(0);
        }

        this.grid[horizontal][vertical].hit(shipHitSpot);
      } else {
        this.missedAttacks.push([horizontal, vertical]);
        this.grid[horizontal][vertical] = 'x';
      }
    }
  };

  var placeShip = {
    placeShip: function placeShip(start, length, direction) {
      var toBePlaced = ship(length);
      toBePlaced.location = start;
      toBePlaced.direction = direction;

      if (direction === 'vertical') {
        for (var i = 0; i < length; i++) {
          this.grid[start[0]][start[1] + i] = toBePlaced;
        }
      } else if (direction === 'horizontal') {
        for (var _i = 0; _i < length; _i++) {
          var verticalCoord = start[0].charCodeAt(0) + _i;
          verticalCoord = String.fromCharCode(verticalCoord);

          this.grid[verticalCoord][start[1]] = toBePlaced;
        }
      }
    }
  };

  var missedAttacks = { missedAttacks: [] };

  var isAllSunk = {
    isAllSunk: function isAllSunk() {
      for (var horizontalKey in this.grid) {
        for (var verticalKey in this.grid[horizontalKey]) {
          if (this.grid[horizontalKey][verticalKey] && this.grid[horizontalKey][verticalKey] !== 'x') {
            var result = this.grid[horizontalKey][verticalKey].isSunk();
            if (result === true) continue;else return false;
          }
        }
      }
      return true;
    }
  };

  return Object.assign({}, grid, receiveAttack, placeShip, missedAttacks, isAllSunk);
};

export { gameboard };