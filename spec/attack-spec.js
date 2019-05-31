const Attack = require("../attack")

describe("Attack", () => {
  beforeEach(() => {
    let defender = {
      armorClass: 12
    }
    this.subject = new Attack(defender)
  })

  describe(".attack", () => {
    describe("when roll beats defender's armor class", () => {
      beforeEach(() => {
        this.attackResult = this.subject.attack(13)
      })

      it("returns true", () => {
        expect(this.attackResult).toBe(true)
      })
    })

    describe("when roll meets defender's armor class", () => {
      beforeEach(() => {
        this.attackResult = this.subject.attack(12)
      })

      it("returns true", () => {
        expect(this.attackResult).toBe(true)
      })
    })

    describe("when roll is less than defender's armor class", () => {
      beforeEach(() => {
        this.attackResult = this.subject.attack(11)
      })

      it("returns false", () => {
        expect(this.attackResult).toBe(false)
      })
    })
  })
})
