import moment from "moment";

export let filtro = {
  texto: "",
  inicio: undefined,
  fin: undefined
};

export let altFiltro = {
  texto: "",
  inicio: moment(0),
  fin: moment(900)
};
