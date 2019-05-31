const Hero = require("../hero")

describe("Hero", () => {
  beforeEach(() => {
    this.subject = new Hero()
  })

  describe(".name", () => {
    it("defaults to empty string", () => {
      expect(this.subject.name).toBe("")
    })

    it("can be changed", () => {
      this.subject.name = "Brah the Barbarian"
      expect(this.subject.name).toBe("Brah the Barbarian")
    })
  })

  describe(".alignment", () => {
    it("defaults to NEUTRAL", () => {
      expect(this.subject.alignment).toBe("NEUTRAL")
    })

    it("can be GOOD", () => {
      this.subject.alignment = "GOOD"
      expect(this.subject.alignment).toBe("GOOD")
    })

    it("can be EVIL", () => {
      this.subject.alignment = "EVIL"
      expect(this.subject.alignment).toBe("EVIL")
    })

    it("can be NEUTRAL", () => {
      this.subject.alignment = "GOOD"
      this.subject.alignment = "NEUTRAL"
      expect(this.subject.alignment).toBe("NEUTRAL")
    })

    it("can't be CHOLERIC", () => {
      expect(() => {
        this.subject.alignment = "CHOLERIC"
      }).toThrow("Alignment cannot be CHOLERIC")
    })
  })

  describe(".armorClass", () => {
    it("defaults to 10", () => {
      expect(this.subject.armorClass).toBe(10)
    })

    it("includes the dexterity modifier", () => {
      this.subject.dexterity.score = 14
      expect(this.subject.armorClass).toBe(12)
    })
  })

  describe(".attackModifier", () => {
    it("defaults to 0", () => {
      expect(this.subject.attackModifier).toBe(0)
    })

    it("included the strength modifier", () => {
      this.subject.strength.score = 14
      expect(this.subject.attackModifier).toBe(2)
    })
  })

  describe(".attackDamage", () => {
    it("defaults to 1", () => {
      expect(this.subject.attackDamage).toBe(1)
    })

    it("included the strength modifier", () => {
      this.subject.strength.score = 14
      expect(this.subject.attackDamage).toBe(3)
    })

    it("cannot be less than 1", () => {
      this.subject.strength.score = 6
      expect(this.subject.attackDamage).toBe(1)
    })
  })

  describe(".criticalDamage", () => {
    it("defaults to 2", () => {
      expect(this.subject.criticalDamage).toBe(2)
    })

    it("included the strength modifier", () => {
      this.subject.strength.score = 14
      expect(this.subject.criticalDamage).toBe(6)
    })

    it("cannot be less than 1", () => {
      this.subject.strength.score = 6
      expect(this.subject.criticalDamage).toBe(1)
    })
  })

  describe(".hitPoints", () => {
    it("defaults to 5", () => {
      expect(this.subject.hitPoints).toBe(5)
    })
  })

  describe(".currentHitPoints", () => {
    it("defaults to 5", () => {
      expect(this.subject.currentHitPoints).toBe(5)
    })

    it("goes down when damaged", () => {
      this.subject.damage(2)
      expect(this.subject.currentHitPoints).toBe(3)
    })
  })

  describe(".isDead", () => {
    it("defaults to false", () => {
      expect(this.subject.isDead).toBe(false)
    })

    it("is false after damage", () => {
      this.subject.damage(2)
      expect(this.subject.isDead).toBe(false)
    })

    it("is true when damaged to 0 hit points", () => {
      this.subject.damage(5)
      expect(this.subject.isDead).toBe(true)
    })

    it("is true when damaged below 0 hit points", () => {
      this.subject.damage(10)
      expect(this.subject.isDead).toBe(true)
    })
  })
})
