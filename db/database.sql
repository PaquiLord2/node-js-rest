CREATE DATABASE IF NOT EXISTS comania

use comania;

CREATE TABLE empleado (
    id INT(11) NOT NULL AUTO_INCREMENT,
    nombre VARCHAR(45) DEFAULT NULL,
    salario INT(11) DEFAULT NULL,
    PRIMARY KEY(id) 
);

DESCRIBE employee

INSERT INTO empleado VALUES
(1,'Joe',1000),
(2,'Cris',1000),
(3,'Mike',1000)