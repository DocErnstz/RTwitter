import { createMocks } from "node-mocks-http";
import signup from "../pages/api/users/SignUp";

describe("/api/users/signup", () => {
  test("returns 200 status", async () => {
    const data = {
      userName: "a",
      email: "b",
      password: "c",
    };
    const { req, res } = createMocks({
      method: "POST",
      body: JSON.stringify(data),
    });
    await signup(req, res);
    expect(JSON.parse(res._getData())).toEqual(
      expect.objectContaining({
        message: expect.any(String),
      })
    );

    expect(res._getStatusCode()).toBe(400);
  });
});
