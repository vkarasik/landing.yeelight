<?php
$url = 'http://b2b.cd-life.by/api/getPrice/?login=***&password=***=["SP00012249","SP00012247","SP00012248","SP00012244","SP00012245","SP00010453","SP00011446","SP00011456"]';
$result = file_get_contents ($url);
echo $result;
?>