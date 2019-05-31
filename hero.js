class Hero {
  constructor() {
    this.name = ""
    this.alignment = "NEUTRAL"
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
}

module.exports = Hero
