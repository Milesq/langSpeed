#ifndef IS_FIRST
#define IS_FIRST

bool isFirst(int number) {
    for(int i=2;i <= number / 2;++i) {
        if (number % i == 0)
            return false;
    }

    return true;
}

#endif // IS_FIRST