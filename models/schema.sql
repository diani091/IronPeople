DROP DATABASE IF EXISTS nudestudio;
CREATE DATABASE nudestudio;

USE nudestudio;

CREATE TABLE User(
id int NOT NULL AUTO_INCREMENT,
name VARCHAR (50),
last_name VARCHAR (50),
session VARCHAR (250),
PRIMARY KEY (id)
);

CREATE TABLE Carts(
item_id INT NOT NULL AUTO_INCREMENT,
brand VARCHAR(100),
type VARCHAR (100),
size VARCHAR(100),
quantity INTEGER,
regular_price DECIMAL,
discount DECIMAL,
total_price DECIMAL,
customer_name VARCHAR(100),
session VARCHAR (250),
PRIMARY KEY (item_id)
);

CREATE TABLE Products(
item_id INT NOT NULL AUTO_INCREMENT,
brand VARCHAR(100),
type VARCHAR(100),
size VARCHAR(100),
quantity INTEGER,
cost DECIMAL,
regular_price DECIMAL,
discount INTEGER,
pre_order INTEGER,
PRIMARY KEY (item_id)
);

CREATE TABLE Ventas (
item_id INT NOT NULL AUTO_INCREMENT,
brand VARCHAR(100),
type VARCHAR(100),
size VARCHAR(100),
quantity INTEGER,
regular_price DECIMAL,
discount DECIMAL,
payment VARCHAR (100),
total_sales DECIMAL,
customer_name VARCHAR(200),
sales_person VARCHAR(200),
PRIMARY KEY (item_id)
);


