#ifndef IS_FIRST
#define IS_FIRST

short isFirst(int number) {
    for(int i=2;i <= number / 2;++i) {
        if (number % i == 0)
            return 0;
    }

    return 1;
}

#endif // IS_FIRST