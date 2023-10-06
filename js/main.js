const isPrime = require("./isPrime");

for (let i = __ITERS__; i > 1; --i) {
    isPrime(i);
}

console.log("end");
