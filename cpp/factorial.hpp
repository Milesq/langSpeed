#ifndef IS_FIRST
#define IS_FIRST

int factorial(int number) {
    if (number == 2) {
        return 2;
    } else {
        return number * factorial(number - 1);
    }
}

#endif // IS_FIRST
