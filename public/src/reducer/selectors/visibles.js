import moment from "moment";
export const TodosVisibles = (Todos, { tipo, texto, inicio, fin, accion }) =>
  Todos.filter(i => {
    const esMayorInicio = inicio
      ? moment(inicio).isSameOrBefore(i.creadoEl)   // ? inicio esta antes que la fecha de creacion de elemento 
      : true;
    const esMenorFin = fin ? moment(fin).isSameOrAfter(i.creadoEl) : true;
    const textoEsIgual = i.nombre
      .toLowerCase()
      .trim()
      .includes(texto.toLowerCase());

    return esMayorInicio && esMenorFin && textoEsIgual;
  }).sort((a, b) => {
    if (tipo === "monto") {
      return a.monto < b.monto ? 1 : -1;
    } else if (tipo === "fecha") {
      return a.creadoEl < b.creadoEl ? 1 : -1;
    }
  });
