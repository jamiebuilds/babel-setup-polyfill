require('babel-polyfill');

var symbol = Symbol('foo');
var obj = {};

obj[symbol] = 'bar';

console.log(obj[symbol]);
