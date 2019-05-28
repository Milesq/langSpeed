<?php
$is_first = include 'isFirst.php';

for ($i=__ITERS__;$i>1;--$i) {
    $is_first($i);
}

echo 'php end';