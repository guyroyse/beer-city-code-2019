class Attack {
  constructor(defender) {
    this._defender = defender
  }
  attack(roll) {
    return roll >= this._defender.armorClass
  }
}

module.exports = Attack
