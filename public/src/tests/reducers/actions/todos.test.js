import {
  agregarTodo,
  eliminarTodo,
  editarTodo
} from "../../../reducer/actions/todos";
import expense from "../../fixtures/expenses";
import expenses from "../../fixtures/expenses";
describe("ACCIONES TODOS >>>>", () => {
  test("Agregar un TODO", () => {
    let final = agregarTodo(expenses[0]);
    expect(final.expense.nombre).toBe('Afro');
  });
  test("Agregar TODO vacio", () => {
    let final = agregarTodo();
    expect(final).toMatchObject({
      type: "ADD-TODO",
      expense: { descripcion:'',monto:0,creadoEl:0,nombre:'' }
    });
  });
  test('Eliminar un TODO', () => {
      let final = eliminarTodo({id:'111'});
      expect(final).toEqual({type:'DEL-TODO',id:'111'});
  });
  test('Editar TODO', () => {
      let final = editarTodo({id:'111',propiedades:{...expenses[0]}})
      expect(final).toEqual({type:'EDIT-TODO',id:'111',propiedades:{...expenses[0]}});
  });
});
