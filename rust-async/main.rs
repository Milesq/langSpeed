mod is_prime;

use is_prime::*;
use std::thread;

fn main() {
    let mut v = Vec::new();
    const BY_X: i32 = 1000;

    for x in 0..__ITERS__ / BY_X {
        v.push(thread::spawn(move || {
            for _ in (x * BY_X)..(x * BY_X + BY_X) {
                is_prime(x);
            }
        }));
    }

    for handler in v {
        handler.join().unwrap();
    }

    println!("end");
}
