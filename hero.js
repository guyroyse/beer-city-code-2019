const Ability = require("./ability")

class Hero {
  constructor() {
    this.name = ""
    this.alignment = "NEUTRAL"

    this._strength = new Ability()
    this._dexterity = new Ability()
    this._constitution = new Ability()

    this._damage = 0
    this._experience = 0
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

  get level() {
    return 1 + Math.floor(this.experience / 1000)
  }

  get experience() {
    return this._experience
  }

  set alignment(value) {
    if (!["GOOD", "NEUTRAL", "EVIL"].includes(value)) {
      throw `Alignment cannot be ${value}`
    }
    this._alignment = value
  }

  get strength() {
    return this._strength
  }

  get dexterity() {
    return this._dexterity
  }

  get constitution() {
    return this._constitution
  }

  get armorClass() {
    return 10 + this.dexterity.modifier
  }

  get attackModifier() {
    return this.strength.modifier
  }

  get attackDamage() {
    return Math.max(1, 1 + this.strength.modifier)
  }

  get criticalDamage() {
    return Math.max(1, 2 + this.strength.modifier * 2)
  }

  get hitPoints() {
    return Math.max(1, 5 + this.constitution.modifier)
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

  addExperience(experience) {
    this._experience += experience
  }
}

module.exports = Hero
