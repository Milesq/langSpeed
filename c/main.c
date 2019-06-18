#include <stdio.h>
#include "factorial.h"

int main ()
{
	for (int i=__ITERS__;i>1;--i) {
		factorial(i);
	}

	printf("end");
	return 0;
}
