pub fn factorial(number: i128) -> i128 {
    match number {
        2 => 2,
        _ => number * factorial(number - 1)
    }
}
