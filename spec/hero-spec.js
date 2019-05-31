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
  })

  describe(".hitPoints", () => {
    it("defaults to 5", () => {
      expect(this.subject.hitPoints).toBe(5)
    })
  })
})
