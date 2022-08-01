import { Convention } from "../src/Convention"

const BASE_TEST_STRING = "hello world"

describe("String Format Handling", () => {
  test("empty string conversion returns empty string", () => {
    expect(Convention.trainCase("")).toBe("");
    expect(Convention.camelCase("")).toBe("");
    expect(Convention.snakeCase("")).toBe("");
    expect(Convention.macroCase("")).toBe("");
  })

  test("string consisting repeated single separators returns empty string", () => {
    expect(Convention.trainCase("___")).toBe("");
    expect(Convention.capitalized("---")).toBe("");
    expect(Convention.snakeCase("   ")).toBe("");
    expect(Convention.camelCase("...")).toBe("");
  })

  
})