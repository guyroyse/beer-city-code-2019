const Ability = require("../ability")

describe("Ability", () => {
  beforeEach(() => {
    this.subject = new Ability()
  })

  describe(".score", () => {
    it("defaults to 10", () => {
      expect(this.subject.score).toBe(10)
    })

    it("can be changed", () => {
      this.subject.score = 14
      expect(this.subject.score).toBe(14)
    })

    it("cannot be less than 1", () => {
      expect(() => {
        this.subject.score = 0
      }).toThrow("Score cannot be less than 1")
    })

    it("cannot be more than 20", () => {
      expect(() => {
        this.subject.score = 21
      }).toThrow("Score cannot be more than 20")
    })
  })

  describe(".modifier", () => {
    let scenarios = [
      { score: 1, modifier: -5 },
      { score: 2, modifier: -4 },
      { score: 3, modifier: -4 },
      { score: 4, modifier: -3 },
      { score: 5, modifier: -3 },
      { score: 6, modifier: -2 },
      { score: 7, modifier: -2 },
      { score: 8, modifier: -1 },
      { score: 9, modifier: -1 },
      { score: 10, modifier: 0 },
      { score: 11, modifier: 0 },
      { score: 12, modifier: +1 },
      { score: 13, modifier: +1 },
      { score: 14, modifier: +2 },
      { score: 15, modifier: +2 },
      { score: 16, modifier: +3 },
      { score: 17, modifier: +3 },
      { score: 18, modifier: +4 },
      { score: 19, modifier: +4 },
      { score: 20, modifier: +5 }
    ]

    scenarios.forEach((scenario) => {
      it(`is ${scenario.modifier} when score is ${scenario.score}`, () => {
        this.subject.score = scenario.score
        expect(this.subject.modifier).toBe(scenario.modifier)
      })
    })
  })
})
