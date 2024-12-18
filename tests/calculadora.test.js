const calculadora = require("../models/calculadora.js");

test("Somar 2 + 2 deveria retornar 4", () => {
  const result = calculadora.soma(2, 2);
  expect(result).toBe(4);
});
