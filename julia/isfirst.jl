module isFirst
export isfirst

function isfirst(number::Int)::Bool
    for i in 2:(number / 2) + 1
        if number % i == 0
            return false
        end
    end

    true
end

end
