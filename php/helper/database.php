<?php

namespace BMTest\Classes;

use Exception;
use \PDO;
use PDOException;

/**
 * Database helper
 */
class Database
{
    /**
     * Private variable to store the connection
     * @var Object
     */
    private $connection;

    /**
     * Constructor for the database function
     * @param Array $settings List of settings
     */
    public function __construct($host, $dbname, $user, $pass)
    {
        try {
            $pdo = new PDO("mysql:host=" . $host . ";dbname=" . $dbname, $user, $pass);

            $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            $pdo->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC);

            $this->connection = $pdo;
        } catch (PDOException $e) {
            throw new Exception('Connection failed: ' . $e->getMessage());
        }
    }

    public function query($sql, $params)
    {
        try {
            $query = $this->connection->prepare($sql);
            $query->execute($params);

            return $query;
        } catch (PDOException $e) {
            throw new Exception('Query failed: ' . $e->getMessage());
        }
    }

    public function fakeQuery($sql, $params)
    {
        return 'success';
    }

}
