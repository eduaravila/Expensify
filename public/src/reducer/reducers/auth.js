export default (array = {}, accion) => {
  switch (accion.type) {
    case "LOGIN":
      return { uuid: accion.uuid };
      break;
    case "LOGOUT":
      return {};
    default:
      return array;
      break;
  }
};
