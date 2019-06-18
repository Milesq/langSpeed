mod factorial;

use factorial::*;

fn main() {
    for x in 0..__ITERS__ {
        factorial(x);
    }

    println!("end");
}
