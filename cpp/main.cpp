#include <iostream>
#include "factorial.hpp"

int main ()
{
	for (int i=__ITERS__;i>1;--i) {
		factorial(i);
	}

	std::cout << "end";
	return 0;
}
