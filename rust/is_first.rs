pub fn is_first(number: i32) -> bool {
    for i in 2..=(number / 2) {
        if number % i == 0 {
            return false;
        }
    }

    true
}
