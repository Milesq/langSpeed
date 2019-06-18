const factorial = require('./factorial');

for (let i=__ITERS__;i>1;--i) {
    factorial(i);
}

console.log('end');
