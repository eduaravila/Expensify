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
  return dispatch => {
    return baseDatos
      .ref("expenses")
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

export const editarTodo = ({ id, propiedades = {} } = {}) => ({
  type: "EDIT-TODO",
  id,
  propiedades
});
