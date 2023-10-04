import { InfractionsRepository } from "infractions-repository";
import { getInfractionsFrom } from "infractions-service";
import { userRepository } from "users-repository";

describe("Infractions Service Tests", () => {
  it("should get infractions from user", async () => {
    const order = await getInfractionsFrom(`2`)

    jest.spyOn(userRepository, "getUserByDocument").mockImplementationOnce((): any => {
      return {
        id: 2,
        firstName: 'joao',
        lastName: 'gomes',
        licenseId: '2'
      }
    })

    jest.spyOn(InfractionsRepository, "getInfractionsFrom").mockImplementationOnce((): any => {
      return {
        id: 2,
        date: new Date,
        description: 'texto',
        cost: 100,
        level: 'SEVERE',
        userId: 2
      }
    })

    expect(order).toEqual({
      id: 2,
      firstName: 'joao',
      lastName: 'gomes',
      licenseId: '2',
      infractios: {
        id: 2,
        date: new Date,
        description: 'texto',
        cost: 100,
        level: 'SEVERE',
        userId: 2
      }
    });
  });

  it("should throw an error when driver license does not exists", async () => {
    const order = await getInfractionsFrom(`2`)

    jest.spyOn(userRepository, "getUserByDocument").mockImplementationOnce((): any => {
      return undefined
    })

    expect(order).toEqual({
      type: "NOT_FOUND", 
      message: "Driver not found."
    });
  })
});