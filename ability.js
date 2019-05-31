class Ability {
  constructor() {
    this.score = 10
  }

  get score() {
    return this._score
  }

  set score(value) {
    if (value < 1) throw "Score cannot be less than 1"
    if (value > 20) throw "Score cannot be more than 20"
    this._score = value
  }

  get modifier() {
    return Math.floor(this.score / 2 - 5)
  }
}

module.exports = Ability
