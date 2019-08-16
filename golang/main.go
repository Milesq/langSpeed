package main

import (
	"fmt"

	"./isfirst"
)

func main() {
	for i := 0; i < __ITERS__; i++ {
		isfirst.Isfirst(i)
	}

	fmt.Println("end")
}
