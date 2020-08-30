include("isprime.jl")

using .isPrime

for i = 1:__ITERS__
    isprime(i)
end

println("end")
