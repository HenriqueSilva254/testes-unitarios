import calculator from "calculator";

describe("calculator tests", () => {
  it("should sum two numbers", async () => {
    const n1 = random(100,10)
    const n2 = random(100,10)
    const result = calculator.sum(n1, n2)
    expect(result).toBe(n1+n2);
  });
  it("should sub two numbers", async () => {
    const n1 = random(100,10)
    const n2 = random(100,10)
    const result = calculator.sub(n1, n2)
    expect(result).toBe(n1-n2);
  });

  it("should multiple two numbers", async () => {
    const n1 = random(100,10)
    const n2 = random(100,10)
    const result = calculator.mul(n1, n2)
    expect(result).toBe(n1*n2);
  });

  it("should divide two numbers", async () => {
    const n1 = random(100,10)
    const n2 = random(100,10)
    const result = calculator.div(n1, n2)
    expect(result).toBe(n1/n2);
  });
})

export function random(max: number, min: number){
  return Math.floor(Math.random() * (max - min + 1) + min)
}