const Attack = require("../attack")
const Hero = require("../hero")

describe("Attack", () => {
  beforeEach(() => {
    this.defender = new Hero()
    this.subject = new Attack(this.defender)
  })

  describe(".attack", () => {
    describe("when roll is less than defender's armor class", () => {
      beforeEach(() => {
        this.attackResult = this.subject.attack(9)
      })

      it("returns false", () => {
        expect(this.attackResult).toBe(false)
      })

      it("does not deal a point of damage to the defender", () => {
        expect(this.defender.currentHitPoints).toBe(5)
      })
    })

    describe("when roll meets defender's armor class", () => {
      beforeEach(() => {
        this.attackResult = this.subject.attack(10)
      })

      it("returns true", () => {
        expect(this.attackResult).toBe(true)
      })

      it("deals a point of damage to the defender", () => {
        expect(this.defender.currentHitPoints).toBe(4)
      })
    })

    describe("when roll beats defender's armor class", () => {
      beforeEach(() => {
        this.attackResult = this.subject.attack(11)
      })

      it("returns true", () => {
        expect(this.attackResult).toBe(true)
      })

      it("deals a point of damage to the defender", () => {
        expect(this.defender.currentHitPoints).toBe(4)
      })
    })

    describe("when roll is a natural 20", () => {
      beforeEach(() => {
        this.attackResult = this.subject.attack(20)
      })

      it("returns true", () => {
        expect(this.attackResult).toBe(true)
      })

      it("deals two points of damage to the defender", () => {
        expect(this.defender.currentHitPoints).toBe(3)
      })
    })
  })
})
