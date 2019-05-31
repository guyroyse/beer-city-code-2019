class Hero {
  constructor() {
    this.name = ""
    this.alignment = "NEUTRAL"

    this._damage = 0
  }

  get name() {
    return this._name
  }

  set name(value) {
    this._name = value
  }

  get alignment() {
    return this._alignment
  }

  set alignment(value) {
    if (!["GOOD", "NEUTRAL", "EVIL"].includes(value)) {
      throw `Alignment cannot be ${value}`
    }
    this._alignment = value
  }

  get armorClass() {
    return 10
  }

  get hitPoints() {
    return 5
  }

  get currentHitPoints() {
    return this.hitPoints - this._damage
  }

  get isDead() {
    return this.currentHitPoints <= 0
  }

  damage(points) {
    this._damage += points
  }
}

module.exports = Hero
