<?php
return function(int $number): bool {
    for($i=2;$i <= $number / 2;++$i) {
        if ($number % $i == 0)
            return false;
    }

    return true;
};
