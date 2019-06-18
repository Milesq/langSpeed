import sys
from factorial import factorial

sys.setrecursionlimit(__ITERS__)

for x in range(__ITERS__):
    factorial(x)

print('end')
