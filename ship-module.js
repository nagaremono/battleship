var ship = function ship(number) {
  var length = { length: number };
  var placesHit = { placesHit: [] };
  var isSunk = {
    isSunk: function isSunk() {
      if (this.placesHit.length < this.length) return false;else return true;
    }
  };
  var hit = {
    hit: function hit(number) {
      if (number < this.length) {
        var duplicateCheck = this.placesHit.find(function (current) {
          if (current === number) return current;
        });

        if (!duplicateCheck) {
          this.placesHit.push(number);
        }
      }
    }
  };

  return Object.assign({}, length, placesHit, isSunk, hit);
};

export { ship };