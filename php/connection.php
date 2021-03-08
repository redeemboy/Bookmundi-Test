<?php

// Mysql query wrapper
// Please load this after the db.php file

require_once 'helper/database.php';

use BMTest\Classes\Database;

$db = new Database('localhost', 'sys', 'root', '');

$result = $db->fakeQuery('', '');

echo $result;
