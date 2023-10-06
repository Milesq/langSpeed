package main

import (
	"fmt"

	"./isprime"
)

func main() {
	for i := 0; i < __ITERS__; i++ {
		isprime.Isprime(i)
	}

	fmt.Println("end")
}
