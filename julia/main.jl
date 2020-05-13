include("isfirst.jl")

using .isFirst

for i = 1:__ITERS__
    isfirst(i)
end

println("end")
