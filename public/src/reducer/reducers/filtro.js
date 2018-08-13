import moment from 'moment'

export default (
    array = { tipo: "", texto: "", inicio: moment().startOf('month'), fin: moment().endOf('month')}, //? todos los expenses de este mes 
    accion
) => {
    switch (accion.type) {
        case "SET-FILTER-TEXT":
            return { ...array, texto: accion.texto };
            break;
        case "SET-FILTER-DATE":
            return { ...array, tipo: accion.tipo };
        case "SET-FILTER-MONTO":
            return { ...array, tipo: accion.tipo };
        case "SET-FIRST-DATE":
            return { ...array, inicio: accion.fecha };
        case "SET-SECOND-DATE":
            return { ...array, fin: accion.fecha };
        default:
            return array;
    }
};