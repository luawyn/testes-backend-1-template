import { fixacao } from "../src/fixacao";

describe("teste do arquivo fixacao.ts", () => {
  test("a funcao deve separar a palavra DEV em ['D','E','V']", () => {
    const result = fixacao("DEV");
    expect(result).toEqual(["D", "E", "V"]);
  });
});
