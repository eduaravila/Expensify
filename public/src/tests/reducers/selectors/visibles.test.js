import {TodosVisibles} from '../../../reducer/selectors/visibles';
import expenses from '../../fixtures/expenses';
import moment from 'moment';

describe('SELECTORS TodosVisibles', () => {
    test('Retornar todas las expenses', () => {
        let filtro ={tipo:'monto',texto:'',fin:moment(0).add(7,'days'),inicio:moment(0).subtract(7,'days')};
        let final =TodosVisibles(expenses,filtro);

        expect(final).toEqual(expenses.reverse());
    });
    test('Filtrar por fecha de inicio', () => {
        expenses.reverse()
        let filtro ={tipo:'monto',texto:'',fin:moment(0).add(7,'days'),inicio:moment(0)};
        let final =TodosVisibles(expenses,filtro);

        expect(final).toEqual([expenses[2],expenses[0]]); 
    });
    test('Filtrar por fecha de fin', () => {
        let filtro ={tipo:'monto',texto:'',fin:moment(0),inicio:moment(0).subtract(7,'days')};
        let final =TodosVisibles(expenses,filtro);

        expect(final).toEqual([expenses[2],expenses[1]]); 
    });
    test('Filtrar por texto -afro-', () => {
        let filtro ={tipo:'monto',texto:'afro',fin:moment(0).add(7,'days'),inicio:moment(0).subtract(7,'days')};
        let final =TodosVisibles(expenses,filtro);

        expect(final).toEqual([expenses[0]]); 
    });
    test('Filtrar por texto mostrar todos expenses', () => {
        let filtro ={tipo:'monto',texto:'',fin:moment(0).add(7,'days'),inicio:moment(0).subtract(7,'days')};
        let final =TodosVisibles(expenses,filtro);

        expect(final).toEqual(expenses.reverse()); 
    });
    test('Filtrar por fecha', () => {
        expenses.reverse()
        let filtro ={tipo:'fecha',texto:'',fin:moment(0).add(7,'days'),inicio:moment(0).subtract(7,'days')};
        let final =TodosVisibles(expenses,filtro);

        expect(final).toEqual([expenses[0],expenses[2],expenses[1]]);
    });
    test('Filtrar por monto', () => {
        expenses.reverse()
        let filtro ={tipo:'monto',texto:'',fin:moment(0).add(7,'days'),inicio:moment(0).subtract(7,'days')};
        let final =TodosVisibles(expenses,filtro);

        expect(final).toEqual(expenses);
    });
});