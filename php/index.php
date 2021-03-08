<a href="connection.php" >Go to Question 2</a>

<pre id="json">
<?php

$api_url = 'http://ftp.geoinfo.msl.mt.gov/Documents/Metadata/GIS_Inventory/35524afc-669b-4614-9f44-43506ae21a1d.xml';

// Read JSON file
$xml_string = file_get_contents($api_url);

$xml = simplexml_load_string($xml_string);

$json = json_encode($xml, JSON_PRETTY_PRINT);

echo $json;

?>

</pre>