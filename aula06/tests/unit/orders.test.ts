import { faker } from "@faker-js/faker";

import { createOrder, getOrderByProtocol } from "../../src/order-service";
import * as orderRepository from "../../src/order-repository";
import { OrderInput } from "../../src/validator";

beforeEach(() => {
  jest.clearAllMocks();
});

describe("Order Service Tests", () => {
  it("should create an order", async () => {
    const orderInput = {
      client: faker.person.fullName(),
      description: faker.commerce.productDescription(),
    }

    jest.spyOn(orderRepository, "create").mockImplementationOnce((): any => {
      return {
        protocol: "dados mokados",
        status: "IN_PREPARATION"
      }
    })
    const order = await createOrder(orderInput)
    
    expect(order).toEqual({
      protocol: expect.any(String),
      status: "IN_PREPARATION"
    });
  });

  it("should return an order based on the protocol", async () => {
    // TODO
    jest.spyOn(orderRepository, "getByProtocol").mockImplementationOnce((): any => {
      return {
        id: 1,
        client: "joao",
        description: "aaa",
        protocol: 'dados mokados',
        status: "Valid"
      }
    })
    const order = await getOrderByProtocol("dados mokados")
    expect(order).toEqual({
      id: 1,
        client: "joao",
        description: "aaa",
        protocol: 'dados mokados',
        status: "Valid"
    });
  });

  it("should return status INVALID when protocol doesn't exists", async () => {
    // TODO
    jest.spyOn(orderRepository, "getByProtocol").mockImplementationOnce((): any => {
      return null
    })
    const order = await getOrderByProtocol("dados mokados")
    expect(order).toEqual({
      protocol: "dados mokados",
      status: "INVALID"
    });
  });
});