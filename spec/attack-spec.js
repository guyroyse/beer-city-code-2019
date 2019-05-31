const Attack = require("../attack")
const Hero = require("../hero")

describe("Attack", () => {
  beforeEach(() => {
    this.attacker = new Hero()
    this.defender = new Hero()
    this.subject = new Attack(this.attacker, this.defender)
  })

  describe(".attack", () => {
    describe("when roll is less than defender's armor class", () => {
      beforeEach(() => {
        this.attackResult = this.subject.attack(9)
      })

      it("is not a hit", () => {
        expect(this.attackResult.hit).toBe(false)
      })

      it("is not a critical", () => {
        expect(this.attackResult.critical).toBe(false)
      })

      it("does not deal damage to the defender", () => {
        expect(this.defender.currentHitPoints).toBe(5)
      })

      it("does not increase the attackers experience", () => {
        expect(this.attacker.experience).toBe(0)
      })
    })

    describe("when roll meets defender's armor class", () => {
      beforeEach(() => {
        this.attacker.strength.score = 14 // attack damage 3
        this.attackResult = this.subject.attack(10)
      })

      it("is a hit", () => {
        expect(this.attackResult.hit).toBe(true)
      })

      it("is not a critical", () => {
        expect(this.attackResult.critical).toBe(false)
      })

      it("deals attack damage to the defender", () => {
        expect(this.defender.currentHitPoints).toBe(2)
      })

      it("increases the attackers experience", () => {
        expect(this.attacker.experience).toBe(10)
      })
    })

    describe("when roll beats defender's armor class", () => {
      beforeEach(() => {
        this.attacker.strength.score = 14 // attack damage 3
        this.attackResult = this.subject.attack(11)
      })

      it("is a hit", () => {
        expect(this.attackResult.hit).toBe(true)
      })

      it("is not a critical", () => {
        expect(this.attackResult.critical).toBe(false)
      })

      it("deals attack damage to the defender", () => {
        expect(this.defender.currentHitPoints).toBe(2)
      })

      it("increases the attackers experience", () => {
        expect(this.attacker.experience).toBe(10)
      })
    })

    describe("when roll is a natural 20", () => {
      beforeEach(() => {
        this.attacker.strength.score = 14 // critical damage 6
        this.attackResult = this.subject.attack(20)
      })

      it("is a hit", () => {
        expect(this.attackResult.hit).toBe(true)
      })

      it("is a critical", () => {
        expect(this.attackResult.critical).toBe(true)
      })

      it("deals critical damage to the defender", () => {
        expect(this.defender.currentHitPoints).toBe(-1)
      })

      it("increases the attackers experience", () => {
        expect(this.attacker.experience).toBe(10)
      })
    })

    it("adds attack modifier to attack roll", () => {
      this.attacker.strength.score = 14 // attack modifier +2
      expect(this.subject.attack(8).hit).toBe(true)
    })
  })
})
