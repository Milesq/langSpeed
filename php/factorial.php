<?php
function factorial(int $number): int {
    if ($number === 2) {
        return 2;
    } else {
        return $number * factorial($number - 1);
    }
};

return factorial;
