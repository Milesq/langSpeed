mod is_prime;

use is_prime::*;

fn main() {
    for x in 0..__ITERS__ {
        is_prime(x);
    }

    println!("end");
}
