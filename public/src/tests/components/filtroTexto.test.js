import React from "react";
import "react-dates/initialize";
import { DateRangePicker } from "react-dates";
import { FiltroTexto } from "../../components/filtroTexto";
import { filtro, altFiltro } from "../fixtures/filtros";
import { shallow } from "enzyme";
import { start } from "repl";
let func, ordenarPor, actualizaInicio, actualizaFin, wrapper;

beforeEach(() => {
  func = jest.fn();
  ordenarPor = jest.fn();
  actualizaInicio = jest.fn();
  actualizaFin = jest.fn();

  wrapper = shallow(
    <FiltroTexto
      {...filtro}
      func={func}
      ordenarPor={ordenarPor}
      actualizaInicio={actualizaInicio}
      actualizaFin={actualizaFin}
    />
  );
});

describe("Filtro texto COMPONENTE", () => {
  test("Snap shot", () => {
    expect(wrapper).toMatchSnapshot();
  });
  test("cambiar filtro y propiedades", () => {
    wrapper.setProps({
      inicio: altFiltro.inicio,
      fin: altFiltro.fin,
      texto: altFiltro.texto
    });
    expect(wrapper).toMatchSnapshot();
  });
  test("Modificar texto de busqueda", () => {
    wrapper.find("input").simulate("change", {
      target: { value: "hola" }
    });
    expect(func).toHaveBeenCalledWith("hola");
  });
  test("Cambiar metodo de ordenamiento a monto", () => {
    wrapper.find("select").simulate("change", {
      target: { value: "monto" }
    });
    expect(ordenarPor).toHaveBeenCalledWith("monto");
  });
  test("Cambiar metodo de ordenamiento a fecha", () => {
    wrapper.find("select").simulate("change", {
      target: { value: "fecha" }
    });
    expect(ordenarPor).toHaveBeenCalledWith("fecha");
  });
  test("Cambiar rango de busqueda inicio", () => {
    wrapper.find(DateRangePicker).prop("onDatesChange")({
      startDate: altFiltro.inicio,
      endDate: altFiltro.fin
    });
    expect(actualizaInicio).toHaveBeenCalledWith(altFiltro.inicio);
  });
  test("Cambiar rango de busqueda fin", () => {
    wrapper.find(DateRangePicker).prop("onDatesChange")({
      startDate: altFiltro.inicio,
      endDate: altFiltro.fin
    });
    expect(actualizaFin).toHaveBeenCalledWith(altFiltro.fin);
  });
});
