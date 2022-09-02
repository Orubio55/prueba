import { totalPageFunc } from "utils/pagination";
import { isNotEmpty, isComplete } from "utils/validations";

describe("Total paginas", () => {
  test("Elementos justos", () => expect(totalPageFunc(16, 8)).toBe(2));
  test("Elementos no justos", () => expect(totalPageFunc(17, 8)).toBe(3));
});

describe("Elemento vacio", () => {
  test("Null", () => expect(isNotEmpty(null)).toBe(false));
  test("String Vacio", () => expect(isNotEmpty("")).toBe(false));
  test("Undefined", () => expect(isNotEmpty(undefined)).toBe(false));
  test("Con valor", () => expect(isNotEmpty("prueba")).toBe(true));
});

describe("Formulario completo", () => {
  test("Completo", () =>
    expect(
      isComplete({
        name: "re",
        path: "hht",
        publicPath: "publicPath",
        key: "key",
        description: "jdh",
      })
    ).toBe(true));
  test("Not complete", () =>
    expect(
      isComplete({
        name: "re",
        path: "hht",
        publicPath: "publicPath",
        key: "key",
        description: "",
      })
    ).toBe(false));
  test("Empty", () =>
    expect(
      isComplete({
        name: "",
        path: "",
        publicPath: "",
        key: "",
        description: "",
      })
    ).toBe(false));
});
