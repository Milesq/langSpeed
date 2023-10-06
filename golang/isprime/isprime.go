package isprime

func Isprime(number int) bool {
	for i := 2; i < number/2+1; i++ {
		if number%i == 0 {
			return false
		}
	}

	return true
}
