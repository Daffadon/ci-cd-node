const request = require("supertest");
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello World");
});
describe("GET /", () => {
  it("should return Hello World", async () => {
    const rest = await request(app).get("/");
    expect(rest.text).toBe("Hello World");
    expect(rest.statusCode).toBe(200);  
  });
});
