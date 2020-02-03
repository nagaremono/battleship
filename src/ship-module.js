const ship = number => {
  const length = { length: number }
  const placesHit = { placesHit: [] }
  const isSunk = {
    isSunk: function isSunk() {
      if (this.placesHit.length < this.length) return false
      else return true
    },
  }
  const hit = {
    hit: function hit(number) {
      if (number < this.length) {
        const duplicateCheck = this.placesHit.find(current => {
          if (current === number) return current
        })

        if (!duplicateCheck) {
          this.placesHit.push(number)
        }
      }
    },
  }

  return Object.assign({}, length, placesHit, isSunk, hit)
}

export { ship }
