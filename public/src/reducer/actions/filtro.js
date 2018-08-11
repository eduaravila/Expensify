
export const filtrarTexto = ({ texto = "" } = {}) => ({
    type: "SET-FILTER-TEXT",
    texto
});

export const filtrarPorMonto = () => ({
    type: "SET-FILTER-MONTO",
    tipo: 'monto'
});
export const filtrarPorFecha = () => ({
    type: "SET-FILTER-DATE",
    tipo: 'fecha'
});
export const cambiarFechaInicio = ({ fecha = undefined }) => ({
    type: "SET-FIRST-DATE",
    fecha
});

export const cambiarFechaFin = ({ fecha = undefined }) => ({
    type: "SET-SECOND-DATE",
    fecha
});