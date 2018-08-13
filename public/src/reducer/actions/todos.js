import uuidv1 from "uuid/v1";

export const agregarTodo = ({
  descripcion = "",
  monto = 0,
  creadoEl = 0,
  nombre = ""
} = {}) => ({
  type: "ADD-TODO",
  expense: {
    descripcion,
    id: uuidv1(),
    creadoEl,
    monto,
    nombre
  }
});

export const eliminarTodo = ({ id } = {}) => ({
  type: "DEL-TODO",
  id
});

export const editarTodo = ({ id, propiedades = {} } = {}) => ({
  type: "EDIT-TODO",
  id,
  propiedades
});
