CREATE DATABASE burgerstwo_DB;

USE burgerstwo_DB;

CREATE TABLE burgers (
	id INT NOT NULL AUTO_INCREMENT,
    PRIMARY KEY (id),
    burger_name VARCHAR(50) NULL,
    burger_devoured BOOLEAN DEFAULT FALSE
);