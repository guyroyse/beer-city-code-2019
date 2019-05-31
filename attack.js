class Attack {
  constructor(defender) {
    this._defender = defender
  }
  attack(roll) {
    let hit = roll >= this._defender.armorClass
    let critical = roll === 20
    if (hit) this._defender.damage(1)
    if (critical) this._defender.damage(1)
    return hit
  }
}

module.exports = Attack
