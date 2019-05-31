class Attack {
  constructor(attacker, defender) {
    this._attacker = attacker
    this._defender = defender
  }
  attack(roll) {
    let effectiveRoll = roll + this._attacker.attackModifier
    let armorClass = this._defender.armorClass
    let hit = effectiveRoll >= armorClass
    let critical = roll === 20
    if (critical) {
      this._defender.damage(this._attacker.criticalDamage)
    } else if (hit) {
      this._defender.damage(this._attacker.attackDamage)
    }
    return { hit, critical }
  }
}

module.exports = Attack
