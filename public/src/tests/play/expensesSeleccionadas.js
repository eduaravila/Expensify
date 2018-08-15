export default expense => expense.map(i => i.monto).reduce((a, b) => a + b, 0);
