#include <iostream>
#include "isPrime.hpp"

int main ()
{
	for (int i=__ITERS__;i>1;--i) {
		isPrime(i);
	}

	std::cout << "end";
	return 0;
}