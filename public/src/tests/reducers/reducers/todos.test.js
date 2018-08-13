import todo from '../../../reducer/reducers/todos'
import expenses from '../../fixtures/expenses'

describe('REDUCER TODO', () => {
    test('Inicio', () => {
        let final = todo(undefined,{type:'@@INIT'});
        expect(final).toEqual([])
    });
    it('ADD-TODO', () => {
        let final = todo([],{type:'ADD-TODO',expense:expenses[0]})
        expect(final).toEqual([expenses[0]]);
    });
    test('Retornar un arreglo vacio', () => {
        let final = todo([],{type:'gg'});
        expect(final).toEqual([]);
    });
    test('DEL-TODO', () => {
        let final = todo(expenses,{type:'DEL-TODO',id:'1'})
        expect(final).toEqual([expenses[1],expenses[2]]);
    });
    test('! DEL TODO', () => {
        let final = todo(expenses,{type:'DEL-TODO',id:'fff'})
        expect(final).toEqual(expenses);
    });
    test('EDIT TODO', () => {
        let final = todo([expenses[0]],{type:'EDIT-TODO',id:'1',propiedades:{...expenses[0],nombre:'JONN'}});
        expect(final).toEqual([{...expenses[0],nombre:'JONN'}]);
    });
    test('! EDIT TODO', () => {
        let final = todo([expenses[0]],{type:'EDIT-TODO',id:'ffff',propiedades:{...expenses[0],nombre:'JONN'}});
        expect(final).toEqual([expenses[0]]);

    });
});