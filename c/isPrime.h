#ifndef IS_PRIME
#define IS_PRIME

short isPrime(int number)
{
    for (int i = 2; i <= number / 2; ++i)
    {
        if (number % i == 0)
            return 0;
    }

    return 1;
}

#endif // IS_PRIME