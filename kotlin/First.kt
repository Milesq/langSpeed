package Prime

fun isPrime(x: Int): Boolean {
    for (i in x / 2 + 1 downTo 2) {
        if (x % i == 0) {
            return false
        }
    }

    return true
}
