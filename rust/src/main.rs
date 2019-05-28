mod is_first;

use is_first::*;

fn main() {
    for x in 0..1_000_000 {
        is_first(x);
    }

    println!("end");
}