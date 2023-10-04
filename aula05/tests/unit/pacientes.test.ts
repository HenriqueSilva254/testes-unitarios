import { generateProtocolForPacient } from "protocols-generator";

describe("protocol tests", () => {
  it("should generate", async () => {

    const result = generateProtocolForPacient("Joao", "Batista", true)
    expect(result).toEqual({
      priority: true,
      date: expect.any(Date),
      pacient: 'Joao Batista',
      protocol: 'protocol fake',
    });
  });
});