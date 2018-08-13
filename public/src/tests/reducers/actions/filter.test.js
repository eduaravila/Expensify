import {
  filtrarTexto,
  filtrarPorFecha,
  filtrarPorMonto,
  cambiarFechaFin,
  cambiarFechaInicio
} from "../../../reducer/actions/filtro";

describe("ACCIONES: FILTRO >>>>", () => {
  test("Cambiar filtro de texto", () => {
    let final = filtrarTexto({ texto: "ggg" });

    expect(final).toEqual({ type: "SET-FILTER-TEXT", texto: "ggg" });
  });
  test("Cambiar filtro de texto a ninguno", () => {
    let final = filtrarTexto();
    expect(final).toEqual({ type: "SET-FILTER-TEXT", texto: "" });
  });

  test("Filtrar por monto", () => {
    let final = filtrarPorMonto();
    expect(final).toEqual({ type: "SET-FILTER-MONTO", tipo: "monto" });
  });
  test("Filtrar por fecha", () => {
    let final = filtrarPorFecha();
    expect(final).toEqual({ type: "SET-FILTER-DATE", tipo: "fecha" });
  });
  test("Cambiar fecha de inicio", () => {
    let final = cambiarFechaInicio({ fecha: 909 });
    expect(final).toEqual({ type: "SET-FIRST-DATE", fecha: 909 });
  });
  test("Cambiar fecha a undefined", () => {
    let final = cambiarFechaInicio({});
    expect(final).toEqual({ type: "SET-FIRST-DATE" });
  });
  test('Cambiar fecha de fin', () => {
    let final = cambiarFechaFin({fecha:1});
    expect(final).toEqual({type:'SET-SECOND-DATE',fecha:1});
  });
  test('Cambiar fecha de fin a undefined', () => {
    let final = cambiarFechaFin({});
    expect(final).toEqual({type:'SET-SECOND-DATE',fecha:undefined});
  });
});
