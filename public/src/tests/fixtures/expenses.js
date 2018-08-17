import moment from "moment";

export default [
  {
    id: "1",
    nombre: "Afro",
    descripcion: "Algo perron",
    monto: 100,
    creadoEl: moment(0)
      .add(7, "days")
      .valueOf()
  },
  {
    id: "2",
    nombre: "Poky",
    descripcion: "GG izi",
    monto: 200,
    creadoEl: moment(0)
      .subtract(7, "days")
      .valueOf()
  },
  {
    id: "3",
    nombre: "Tupak",
    descripcion: "Algo chido",
    monto: 300,
    creadoEl: moment(0).valueOf()
  }
];
