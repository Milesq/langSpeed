package Factorial

fun factorial(x: Int): Int =
    when (x) {
        2    -> 2
        else -> x * factorial(x - 1)
    }
