mod is_first;

use is_first::*;

fn main() {
    for x in 0..__ITERS__ {
        is_first(x);
    }

    println!("end");
}