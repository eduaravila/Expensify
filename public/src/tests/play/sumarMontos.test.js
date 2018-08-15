import expensesSeleccionadas from "./expensesSeleccionadas";

let Expense = [
  {
    id: "1",
    nombre: "gg izo",
    medio: "credido",
    monto: 1000
  },
  {
    id: "2",
    nombre: "Afro",
    medio: "credido",
    monto: 9000
  },
  {
    id: "3",
    nombre: "pro poki",
    medio: "efectivo",
    monto: 17090
  }
];

describe("Sumar montos de expenses", () => {
  test("Sumar cero", () => {
    let suma = expensesSeleccionadas([]);
    expect(suma).toEqual(0);
  });
  test("Sumar un solo expense", () => {
    let suma = expensesSeleccionadas([Expense[0]]);
    expect(suma).toEqual(1000);
  });
  test("Sumar multiples expenses", () => {
    let suma = expensesSeleccionadas([Expense[0], Expense[2]]);
    expect(suma).toEqual(18090);
  });
});
