<?php
$is_prime = include 'isPrime.php';

for ($i=__ITERS__;$i>1;--$i) {
    $is_prime($i);
}

echo 'php end';
