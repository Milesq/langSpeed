#include <iostream>
#include "isFirst.hpp"

int main ()
{
	for (int i=__ITERS__;i>1;--i) {
		isFirst(i);
	}

	std::cout << "end";
	return 0;
}