import { pratica2 } from "../src/pratica2";

describe("teste do arquivo pratica2.ts", () => {
  test("a funcao recebe um parametro e retorna null caso seja diferente de 'number'", () => {
    const result = pratica2("1" as any);
    expect(result).toBeNull();
  });
  test("a funcao recebe um parametro, se for diferente de um numero inteiro retorna null", () => {
    const result = pratica2(1.1);
    expect(result).toBeNull();
  });
  test("se o numero for impar retorne false", () => {
    const result = pratica2(1);
    expect(result).toBeFalsy();
  });
  test("se o numero for par retorne true", () => {
    const result = pratica2(2);
    expect(result).toBeTruthy();
  });
});
