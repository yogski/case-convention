import { Convention } from "../src/Convention"

const BASE_TEST_STRING = "hello world"

describe("String Format Handling", () => {
  test("empty string conversion returns empty string", () => {
    expect(Convention.trainCase("")).toBe("");
    expect(Convention.camelCase("")).toBe("");
    expect(Convention.snakeCase("")).toBe("");
    expect(Convention.macroCase("")).toBe("");
    expect(Convention.dotCase("")).toBe("");
    expect(Convention.flatCase("")).toBe("");
    expect(Convention.normalize("")).toBe("");
    expect(Convention.capitalized("")).toBe("");
    expect(Convention.title("")).toBe("");
    expect(Convention.slug("")).toBe("");
  })

  test("string consisting repeated single separators returns empty string", () => {
    expect(Convention.trainCase("___")).toBe("");
    expect(Convention.capitalized("---")).toBe("");
    expect(Convention.snakeCase("   ")).toBe("");
    expect(Convention.camelCase("...")).toBe("");
  })

  test("string with multiple separators returns empty string", () => {
    expect(Convention.slug("hello_world.again")).toBe("");
    expect(Convention.title("Hello.World v2")).toBe("");
  })
  
})