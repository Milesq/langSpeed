<?php
$factorial = include 'factorial.php';

for ($i=__ITERS__;$i>1;--$i) {
    $factorial($i);
}

echo 'end';
