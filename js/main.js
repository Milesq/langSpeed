const isFirst = require('./isFirst');

for (let i=__ITERS__;i>1;--i) {
    isFirst(i);
}

console.log('end');