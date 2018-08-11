export default (array = [], accion) => {
  switch (accion.type) {
    case "ADD-TODO":
      return [...array, accion.expense];
      break;
    case "DEL-TODO":
      return array.filter(i => i.id !== accion.id);
      break;
    case "EDIT-TODO":
      return array.map(
        i => (i.id === accion.id ? { ...i, ...accion.propiedades } : i)
      );

    default:
      return array;
  }
};
