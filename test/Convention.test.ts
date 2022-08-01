import { Convention } from "../src/index"

const MACRO_CASE_VAL = "HELLO_WORLD"
const NORMAL_CASE_VAL = "hello world"
const TITLE_VAL = "Hello World"
const CAPITALIZED_VAL = "Hello world"
const CAMEL_CASE_VAL = "helloWorld"
const SNAKE_CASE_VAL = "hello_world"
const PASCAL_CASE_VAL = "HelloWorld"
const KEBAB_CASE_VAL = "hello-world"
const TRAIN_CASE_VAL = "Hello-World"
const FLAT_CASE_VAL = "helloworld"
const DOT_CASE_VAL = "hello.world"

describe("Type conversion: Macro Case", () => {
  test("single word normal string", () => {
    expect(Convention.macroCase("hello")).toBe("HELLO");
  })

  test("multi-word normal string", () => {
    expect(Convention.macroCase(NORMAL_CASE_VAL)).toBe(MACRO_CASE_VAL);
  })
  
  test("camel case to macro case", () => {
    expect(Convention.macroCase(CAMEL_CASE_VAL)).toBe(MACRO_CASE_VAL);
  })

  test("snake case to macro case", () => {
    expect(Convention.macroCase(SNAKE_CASE_VAL)).toBe(MACRO_CASE_VAL);
  })

  test("pascal case to macro case", () => {
    expect(Convention.macroCase(PASCAL_CASE_VAL)).toBe(MACRO_CASE_VAL);
  })

  test("kebab case to macro case", () => {
    expect(Convention.macroCase(KEBAB_CASE_VAL)).toBe(MACRO_CASE_VAL)
  })

  test("train case to macro case", () => {
    expect(Convention.macroCase(TRAIN_CASE_VAL)).toBe(MACRO_CASE_VAL);
  })

  test("flat case behaves like single string", () => {
    expect(Convention.macroCase(FLAT_CASE_VAL)).toBe(FLAT_CASE_VAL.toUpperCase());
  })

  test("dot case to macro case", () => {
    expect(Convention.macroCase(DOT_CASE_VAL)).toBe(MACRO_CASE_VAL);
  })
})

describe("Type conversion: Snake Case", () => {
  test("single word normal string", () => {
    expect(Convention.snakeCase("hello")).toBe("hello");
  })

  test("multi-word normal string", () => {
    expect(Convention.snakeCase(NORMAL_CASE_VAL)).toBe(SNAKE_CASE_VAL);
  })
  
  test("camel case to snake case", () => {
    expect(Convention.snakeCase(CAMEL_CASE_VAL)).toBe(SNAKE_CASE_VAL);
  })

  test("macro case to snake case", () => {
    expect(Convention.snakeCase(MACRO_CASE_VAL)).toBe(SNAKE_CASE_VAL);
  })

  test("pascal case to snake case", () => {
    expect(Convention.snakeCase(PASCAL_CASE_VAL)).toBe(SNAKE_CASE_VAL);
  })

  test("kebab case to snake case", () => {
    expect(Convention.snakeCase(KEBAB_CASE_VAL)).toBe(SNAKE_CASE_VAL)
  })

  test("train case to snake case", () => {
    expect(Convention.snakeCase(TRAIN_CASE_VAL)).toBe(SNAKE_CASE_VAL);
  })

  test("flat case behaves like single string", () => {
    expect(Convention.snakeCase(FLAT_CASE_VAL)).toBe(FLAT_CASE_VAL);
  })

  test("dot case to macro case", () => {
    expect(Convention.snakeCase(DOT_CASE_VAL)).toBe(SNAKE_CASE_VAL);
  })
})

describe("Type conversion: Camel Case", () => {
  test("single word normal string", () => {
    expect(Convention.camelCase("hello")).toBe("hello");
  })

  test("multi-word normal string", () => {
    expect(Convention.camelCase(NORMAL_CASE_VAL)).toBe(CAMEL_CASE_VAL);
  })
  
  test("macro case to camel case", () => {
    expect(Convention.camelCase(MACRO_CASE_VAL)).toBe(CAMEL_CASE_VAL);
  })

  test("snake case to camel case", () => {
    expect(Convention.camelCase(SNAKE_CASE_VAL)).toBe(CAMEL_CASE_VAL);
  })

  test("pascal case to camel case", () => {
    expect(Convention.camelCase(PASCAL_CASE_VAL)).toBe(CAMEL_CASE_VAL);
  })

  test("kebab case to camel case", () => {
    expect(Convention.camelCase(KEBAB_CASE_VAL)).toBe(CAMEL_CASE_VAL)
  })

  test("train case to camel case", () => {
    expect(Convention.camelCase(TRAIN_CASE_VAL)).toBe(CAMEL_CASE_VAL);
  })

  test("flat case behaves like single string", () => {
    expect(Convention.camelCase(FLAT_CASE_VAL)).toBe(FLAT_CASE_VAL);
  })

  test("dot case to camel case", () => {
    expect(Convention.camelCase(DOT_CASE_VAL)).toBe(CAMEL_CASE_VAL);
  })
})

describe("Type conversion: Pascal Case", () => {
  test("single word normal string", () => {
    expect(Convention.pascalCase("hello")).toBe("Hello");
  })

  test("multi-word normal string", () => {
    expect(Convention.pascalCase(NORMAL_CASE_VAL)).toBe(PASCAL_CASE_VAL);
  })
  
  test("camel case to pascal case", () => {
    expect(Convention.pascalCase(CAMEL_CASE_VAL)).toBe(PASCAL_CASE_VAL);
  })

  test("snake case to pascal case", () => {
    expect(Convention.pascalCase(SNAKE_CASE_VAL)).toBe(PASCAL_CASE_VAL);
  })

  test("macro case to pascal case", () => {
    expect(Convention.pascalCase(MACRO_CASE_VAL)).toBe(PASCAL_CASE_VAL);
  })

  test("kebab case to pascal case", () => {
    expect(Convention.pascalCase(KEBAB_CASE_VAL)).toBe(PASCAL_CASE_VAL)
  })

  test("train case to pascal case", () => {
    expect(Convention.pascalCase(TRAIN_CASE_VAL)).toBe(PASCAL_CASE_VAL);
  })

  test("flat case behaves like single string", () => {
    expect(Convention.pascalCase(FLAT_CASE_VAL)).toBe(FLAT_CASE_VAL[0].toUpperCase() + FLAT_CASE_VAL.substring(1));
  })

  test("dot case to pascal case", () => {
    expect(Convention.pascalCase(DOT_CASE_VAL)).toBe(PASCAL_CASE_VAL);
  })
})

describe("Type conversion: Kebab Case", () => {
  test("single word normal string", () => {
    expect(Convention.kebabCase("hello")).toBe("hello");
  })

  test("multi-word normal string", () => {
    expect(Convention.kebabCase(NORMAL_CASE_VAL)).toBe(KEBAB_CASE_VAL);
  })
  
  test("camel case to kebab case", () => {
    expect(Convention.kebabCase(CAMEL_CASE_VAL)).toBe(KEBAB_CASE_VAL);
  })

  test("snake case to kebab case", () => {
    expect(Convention.kebabCase(SNAKE_CASE_VAL)).toBe(KEBAB_CASE_VAL);
  })

  test("pascal case to kebab case", () => {
    expect(Convention.kebabCase(PASCAL_CASE_VAL)).toBe(KEBAB_CASE_VAL);
  })

  test("macro case to kebab case", () => {
    expect(Convention.kebabCase(MACRO_CASE_VAL)).toBe(KEBAB_CASE_VAL);
  })

  test("train case to kebab case", () => {
    expect(Convention.kebabCase(TRAIN_CASE_VAL)).toBe(KEBAB_CASE_VAL);
  })

  test("flat case behaves like single string", () => {
    expect(Convention.kebabCase(FLAT_CASE_VAL)).toBe(FLAT_CASE_VAL);
  })

  test("dot case to kebab case", () => {
    expect(Convention.kebabCase(DOT_CASE_VAL)).toBe(KEBAB_CASE_VAL);
  })
})

describe("Type conversion: Train Case", () => {
  test("single word normal string", () => {
    expect(Convention.trainCase("hello")).toBe("Hello");
  })

  test("multi-word normal string", () => {
    expect(Convention.trainCase(NORMAL_CASE_VAL)).toBe(TRAIN_CASE_VAL);
  })
  
  test("camel case to train case", () => {
    expect(Convention.trainCase(CAMEL_CASE_VAL)).toBe(TRAIN_CASE_VAL);
  })

  test("snake case to train case", () => {
    expect(Convention.trainCase(SNAKE_CASE_VAL)).toBe(TRAIN_CASE_VAL);
  })

  test("pascal case to train case", () => {
    expect(Convention.trainCase(PASCAL_CASE_VAL)).toBe(TRAIN_CASE_VAL);
  })

  test("kebab case to train case", () => {
    expect(Convention.trainCase(KEBAB_CASE_VAL)).toBe(TRAIN_CASE_VAL)
  })

  test("macro case to train case", () => {
    expect(Convention.trainCase(MACRO_CASE_VAL)).toBe(TRAIN_CASE_VAL);
  })

  test("flat case behaves like single string", () => {
    expect(Convention.trainCase(FLAT_CASE_VAL)).toBe(FLAT_CASE_VAL[0].toUpperCase() + FLAT_CASE_VAL.substring(1));
  })

  test("dot case to train case", () => {
    expect(Convention.trainCase(DOT_CASE_VAL)).toBe(TRAIN_CASE_VAL);
  })
})

describe("Type conversion: Dot Case", () => {
  test("single word normal string", () => {
    expect(Convention.dotCase("hello")).toBe("hello");
  })

  test("multi-word normal string", () => {
    expect(Convention.dotCase(NORMAL_CASE_VAL)).toBe(DOT_CASE_VAL);
  })
  
  test("camel case to dot case", () => {
    expect(Convention.dotCase(CAMEL_CASE_VAL)).toBe(DOT_CASE_VAL);
  })

  test("snake case to dot case", () => {
    expect(Convention.dotCase(SNAKE_CASE_VAL)).toBe(DOT_CASE_VAL);
  })

  test("pascal case to dot case", () => {
    expect(Convention.dotCase(PASCAL_CASE_VAL)).toBe(DOT_CASE_VAL);
  })

  test("kebab case to dot case", () => {
    expect(Convention.dotCase(KEBAB_CASE_VAL)).toBe(DOT_CASE_VAL)
  })

  test("train case to dot case", () => {
    expect(Convention.dotCase(TRAIN_CASE_VAL)).toBe(DOT_CASE_VAL);
  })

  test("flat case behaves like single string", () => {
    expect(Convention.dotCase(FLAT_CASE_VAL)).toBe(FLAT_CASE_VAL);
  })

  test("macro case to dot case", () => {
    expect(Convention.dotCase(MACRO_CASE_VAL)).toBe(DOT_CASE_VAL);
  })
})

describe("Type conversion: Flat Case", () => {
  test("single word normal string", () => {
    expect(Convention.flatCase("hello")).toBe("hello");
  })

  test("multi-word normal string", () => {
    expect(Convention.flatCase(NORMAL_CASE_VAL)).toBe(FLAT_CASE_VAL);
  })
  
  test("camel case to flat case", () => {
    expect(Convention.flatCase(CAMEL_CASE_VAL)).toBe(FLAT_CASE_VAL);
  })

  test("snake case to flat case", () => {
    expect(Convention.flatCase(SNAKE_CASE_VAL)).toBe(FLAT_CASE_VAL);
  })

  test("pascal case to flat case", () => {
    expect(Convention.flatCase(PASCAL_CASE_VAL)).toBe(FLAT_CASE_VAL);
  })

  test("kebab case to flat case", () => {
    expect(Convention.flatCase(KEBAB_CASE_VAL)).toBe(FLAT_CASE_VAL)
  })

  test("train case to flat case", () => {
    expect(Convention.flatCase(TRAIN_CASE_VAL)).toBe(FLAT_CASE_VAL);
  })

  test("macro case to flat case", () => {
    expect(Convention.flatCase(MACRO_CASE_VAL)).toBe(FLAT_CASE_VAL);
  })

  test("dot case to flat case", () => {
    expect(Convention.flatCase(DOT_CASE_VAL)).toBe(FLAT_CASE_VAL);
  })
})

describe("Type conversion: Normalize", () => {
  test("single word normal string", () => {
    expect(Convention.normalize("hello")).toBe("hello");
  })

  test("multi-word normal string", () => {
    expect(Convention.normalize(NORMAL_CASE_VAL)).toBe(NORMAL_CASE_VAL);
  })
  
  test("camel case to normal case", () => {
    expect(Convention.normalize(CAMEL_CASE_VAL)).toBe(NORMAL_CASE_VAL);
  })

  test("snake case to normal case", () => {
    expect(Convention.normalize(SNAKE_CASE_VAL)).toBe(NORMAL_CASE_VAL);
  })

  test("pascal case to normal case", () => {
    expect(Convention.normalize(PASCAL_CASE_VAL)).toBe(NORMAL_CASE_VAL);
  })

  test("kebab case to normal case", () => {
    expect(Convention.normalize(KEBAB_CASE_VAL)).toBe(NORMAL_CASE_VAL)
  })

  test("train case to normal case", () => {
    expect(Convention.normalize(TRAIN_CASE_VAL)).toBe(NORMAL_CASE_VAL);
  })

  test("flat case behaves like single string", () => {
    expect(Convention.normalize(FLAT_CASE_VAL)).toBe(FLAT_CASE_VAL);
  })

  test("dot case to normal case", () => {
    expect(Convention.normalize(DOT_CASE_VAL)).toBe(NORMAL_CASE_VAL);
  })
})

describe("Type conversion: Title", () => {
  test("single word normal string", () => {
    expect(Convention.title("hello")).toBe("Hello");
  })

  test("multi-word normal string", () => {
    expect(Convention.title(NORMAL_CASE_VAL)).toBe(TITLE_VAL);
  })
  
  test("camel case to title", () => {
    expect(Convention.title(CAMEL_CASE_VAL)).toBe(TITLE_VAL);
  })

  test("snake case to title", () => {
    expect(Convention.title(SNAKE_CASE_VAL)).toBe(TITLE_VAL);
  })

  test("pascal case to title", () => {
    expect(Convention.title(PASCAL_CASE_VAL)).toBe(TITLE_VAL);
  })

  test("kebab case to title", () => {
    expect(Convention.title(KEBAB_CASE_VAL)).toBe(TITLE_VAL)
  })

  test("train case to title", () => {
    expect(Convention.title(TRAIN_CASE_VAL)).toBe(TITLE_VAL);
  })

  test("flat case behaves like single string", () => {
    expect(Convention.title(FLAT_CASE_VAL)).toBe(FLAT_CASE_VAL[0].toUpperCase() + FLAT_CASE_VAL.substring(1));
  })

  test("dot case to title", () => {
    expect(Convention.title(DOT_CASE_VAL)).toBe(TITLE_VAL);
  })
})

describe("Type conversion: Capitalize", () => {
  test("single word normal string", () => {
    expect(Convention.capitalized("hello")).toBe("Hello");
  })

  test("multi-word normal string", () => {
    expect(Convention.capitalized(NORMAL_CASE_VAL)).toBe(CAPITALIZED_VAL);
  })
  
  test("camel case to capitalized", () => {
    expect(Convention.capitalized(CAMEL_CASE_VAL)).toBe(CAPITALIZED_VAL);
  })

  test("snake case to capitalized", () => {
    expect(Convention.capitalized(SNAKE_CASE_VAL)).toBe(CAPITALIZED_VAL);
  })

  test("pascal case to capitalized", () => {
    expect(Convention.capitalized(PASCAL_CASE_VAL)).toBe(CAPITALIZED_VAL);
  })

  test("kebab case to capitalized", () => {
    expect(Convention.capitalized(KEBAB_CASE_VAL)).toBe(CAPITALIZED_VAL)
  })

  test("train case to capitalized", () => {
    expect(Convention.capitalized(TRAIN_CASE_VAL)).toBe(CAPITALIZED_VAL);
  })

  test("flat case behaves like single string", () => {
    expect(Convention.capitalized(FLAT_CASE_VAL)).toBe(FLAT_CASE_VAL[0].toUpperCase() + FLAT_CASE_VAL.substring(1));
  })

  test("dot case to capitalized", () => {
    expect(Convention.capitalized(DOT_CASE_VAL)).toBe(CAPITALIZED_VAL);
  })
})