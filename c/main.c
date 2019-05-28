#include <stdio.h>
#include "isFirst.h"

int main ()
{
	for (int i=__ITERS__;i>1;--i) {
		isFirst(i);
	}

	printf("end");
	return 0;
}