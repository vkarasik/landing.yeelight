<?php
$data = $_POST['ids'];
$products = '["'.implode('","',$data).'"]';

$url = 'http://b2b.cd-life.by/api/getPrice/?login=****&password=****&id='.$products;
$result = file_get_contents ($url);
echo $result;
?>