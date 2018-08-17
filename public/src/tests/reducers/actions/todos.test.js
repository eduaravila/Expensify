import {
  agregarTodo,
  eliminarTodo,
  editarTodo,
  agregarTodoAsync,
  setTodos,
  setTodosSync,
  editarTodoSync
  ,eliminarTodoSync
} from "../../../reducer/actions/todos";
import TODOS from "../../../reducer/reducers/todos";

import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import baseDatos from "../../../firebase/firebase";

const middle = configureStore([thunk]);

import expenses from "../../fixtures/expenses";
jest.setTimeout(30000);

beforeEach(done => {
  const misExpenses = [];
  expenses.forEach(({ id, nombre, descripcion, creadoEl, monto }) => {
    misExpenses[id] = { nombre, descripcion, creadoEl, monto };
  });
  baseDatos
    .ref("expenses")
    .set(misExpenses)
    .then(() => done());
});
describe("ACCIONES TODOS >>>>", () => {
  test("Agregar un TODO", () => {
    let final = agregarTodo(expenses[0]);
    expect(final.expense.nombre).toBe("Afro");
  });
  test("Agregar TODO vacio", () => {
    let final = agregarTodo();
    expect(final).toMatchObject({
      type: "ADD-TODO",
      expense: {}
    });
  });
  test("Eliminar un TODO", () => {
    let final = eliminarTodo({ id: "111" });
    expect(final).toEqual({ type: "DEL-TODO", id: "111" });
  });
  test("Editar TODO", () => {
    let final = editarTodo({ id: "111", propiedades: { ...expenses[0] } });
    expect(final).toEqual({
      type: "EDIT-TODO",
      id: "111",
      propiedades: { ...expenses[0] }
    });
  });
  test("Guardar expense en base de datos", done => {
    const store = middle({});
    const expense = {
      nombre: "Afro",
      descripcion: "Algo perron",
      monto: 100,
      creadoEl: 99
    };
    store.dispatch(agregarTodoAsync(expense)).then(result => {
      const acciones = store.getActions();
      expect(acciones[0].expense).toEqual({
        ...expense,
        id: expect.any(String)
      });

      return baseDatos
        .ref(`expenses/${acciones[0].expense.id}`)
        .once("value")
        .then(result => {
          expect(result.val()).toEqual(expense);
          done();
        });
    });
  });
  test("Guardar expense vacio", done => {
    const store = middle({});

    store.dispatch(agregarTodoAsync()).then(result => {
      const acciones = store.getActions();
      expect(acciones[0].expense).toEqual({
        nombre: "",
        monto: 0,
        creadoEl: 0,
        descripcion: "",
        id: expect.any(String)
      });
      done();
    });
  });
  test("Set todos ", () => {
    const final = expenses;

    expect(setTodos(expenses)).toEqual({
      type: "SET-TODOS",
      todos: [...final]
    });
  });

  test("TODOS retorna un arreglo con todas las expenses", () => {
    expect(TODOS(expenses, { todos: expenses })).toEqual(expenses);
  });
  test("Retornar los EXPENSES de la base de datos", done => {
    const store = middle({});
    store.dispatch(setTodosSync()).then(result => {
      let acciones = store.getActions();
      expect(acciones[0]).toEqual({
        type: "SET-TODOS",
        todos: [...expenses]
      });
      done();
    });
  });
  test("Editar TODOS SYNC y guardar en base de datos", done => {
    const store = middle({});
    let final = { id: 3, propiedades: { ...expenses[0] } };
    const { nombre, monto, descripcion, creadoEl } = expenses[0];
    store.dispatch(editarTodoSync(final)).then(result => {
      let estados = store.getActions();
      expect(estados[0]).toEqual({
        type: "EDIT-TODO",
        id: 3,
        propiedades: { nombre, monto, descripcion, creadoEl }
      });
      done();
    });
  });

  test("Eliminar todos de la base de datos", done => {
    const store = middle({});
    let final = { id: 3,type:'DEL-TODO'};
    
    store.dispatch(eliminarTodoSync({id:3})).then(result => {
      let estados = store.getActions();
      expect(estados[0]).toEqual(final);
      done();
    });
  });
});
