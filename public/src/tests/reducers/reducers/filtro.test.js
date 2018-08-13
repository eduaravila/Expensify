import filtro from '../../../reducer/reducers/filtro';
import moment from "moment";
import expenses from '../../fixtures/expenses';

describe('REDUCER FILTRO >>>>>', () => {
    test('Inicializar', () => {
        let final = {tipo: "", texto: "", inicio: moment().startOf('month'), fin: moment().endOf('month')}
        let accionFiltro= filtro(undefined,{type:'@@INIT'});
        expect(accionFiltro).toEqual(final);

    });
    test('SET-FILTER-TEST', () => {
        let final = {tipo: "", texto: "FFFF", inicio: moment().startOf('month'), fin: moment().endOf('month')}
        let accionFiltro = filtro(undefined,{type:'SET-FILTER-TEXT',texto:'FFFF'});
        expect(accionFiltro).toEqual(final)
    });
    test('SET-FILTER-DATE', () => {
        let final = {tipo: "date", texto: "", inicio: moment().startOf('month'), fin: moment().endOf('month')}
        let accionFiltro = filtro(undefined,{type:'SET-FILTER-DATE',tipo:'date'});
        expect(accionFiltro).toEqual(final)
    });
    test('SET-FILTER-MONTO', () => {
        let final = {tipo: "monto", texto: "", inicio: moment().startOf('month'), fin: moment().endOf('month')}
        let accionFiltro = filtro(undefined,{type:'SET-FILTER-MONTO',tipo:'monto'});
        expect(accionFiltro).toEqual(final)
    });
    
    test('SET-FIRST-DATE', () => {
        let final = {tipo: "", texto: "", inicio: moment(0), fin: moment().endOf('month')}
        let accionFiltro = filtro(undefined,{type:'SET-FIRST-DATE',fecha:moment(0)});
        expect(accionFiltro).toEqual(final)
    });
    test('SET-SECOND-DATE', () => {
        let final = {tipo: "", texto: "", inicio: moment().startOf('month'), fin: moment(0)}

        
        let accionFiltro = filtro(undefined,{type:'SET-SECOND-DATE',fecha:moment(0)});
        expect(accionFiltro).toEqual(final)
    });
});