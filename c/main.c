#include <stdio.h>
#include "isPrime.h"

int main ()
{
	for (int i=__ITERS__;i>1;--i) {
		isPrime(i);
	}

	printf("end");
	return 0;
}