import uuidv1 from "uuid/v1";
import baseDatos from "../../firebase/firebase";
if (!global._babelPolyfill) {
  require("babel-polyfill");
}

export const agregarTodo = expense => ({
  type: "ADD-TODO",
  expense
});

export const agregarTodoAsync = (info = {}) => {
  const { nombre = "", monto = 0, creadoEl = 0, descripcion = "" } = info;
  const expense = { nombre, monto, creadoEl, descripcion };
  return (dispatch, getState) => {
    let uuid = getState().Auth.uuid;
    return baseDatos
      .ref(`users/${uuid}/expenses/`)
      .push(expense)
      .then(result => {
        dispatch(agregarTodo({ ...expense, id: result.key }));
      });
  };
};
export const eliminarTodo = ({ id } = {}) => ({
  type: "DEL-TODO",
  id
});

export const eliminarTodoSync = ({ id } = {}) => {
  return (dispatch, getState) => {
    let uuid = getState().Auth.uuid;
    return baseDatos
      .ref(`users/${uuid}/expenses/${id}`)
      .remove()
      .then(result => {
        dispatch(eliminarTodo({ id }));
      });
  };
};
export const editarTodo = ({ id, propiedades = {} } = {}) => ({
  type: "EDIT-TODO",
  id,
  propiedades
});

export const editarTodoSync = ({ id, propiedades = {} } = {}) => {
  const { nombre, monto, descripcion, creadoEl } = propiedades;
  return async (dispatch, getState) => {
    try {
      let uuid = getState().Auth.uuid;

      await baseDatos
        .ref(`users/${uuid}/expenses/${id}`)
        .update({ nombre, monto, descripcion, creadoEl });

      return dispatch(
        editarTodo({
          id,
          propiedades: { nombre, monto, descripcion, creadoEl }
        })
      );
    } catch (e) {
      return dispatch(editarTodo({}));
    }
  };
};
// ? set TODOS

export const setTodos = todos => ({
  type: "SET-TODOS",
  todos
});

export const setTodosSync = () => {
  return (dispatch, getState) => {
    let uuid = getState().Auth.uuid;
    console.log(uuid);
    return baseDatos
      .ref(`users/${uuid}/expenses/`)
      .once("value")
      .then(datos => {
        console.log(datos.val());

        let expenses = [];
        datos.forEach(expense => {
          expenses = [...expenses, { ...expense.val(), id: expense.key }];
        });
        dispatch(setTodos(expenses));
        console.log("HOLAAAA de nuevo bien ");
      })
      .catch(err => {
        console.log("HOLAAAA de nuevo");
      });
  };
};
