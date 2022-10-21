-- Adminer 4.7.6 MySQL dump

SET NAMES utf8;
SET time_zone = '+00:00';
SET foreign_key_checks = 0;
SET sql_mode = 'NO_AUTO_VALUE_ON_ZERO';

DROP TABLE IF EXISTS `truck`;
CREATE TABLE `truck` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `licence_plate` varchar(10) NOT NULL,
  `name` varchar(30) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO `truck` (`id`, `licence_plate`, `name`) VALUES
(1,	'ABC-123',	'Volvo'),
(2,	'XYZ-456',	'Mercedes'),
(3,	'DEF-789',	'Renault'),
(4,	'GHI-012',	'Daimler'),
(5,	'JKL-345',	'Toyota'),
(6,	'MNO-678',	'Isuzu'),
(7,	'PQR-901',	'Tata');

-- 2022-10-20 13:48:56
