import app from "../src/app";
import request from "supertest";
// Required for async testing
import regeneratorRuntime from "regenerator-runtime";

test("index works", async () => {
  let result = await request(app).get("/");
  expect(result.body.message).toBe("Hello world");
});
