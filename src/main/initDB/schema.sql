SET NAMES utf8;
SET time_zone = '+00:00';
SET foreign_key_checks = 0;
SET sql_mode = 'NO_AUTO_VALUE_ON_ZERO';

SET NAMES utf8mb4;

CREATE DATABASE `Blog`
USE `Blog`;

CREATE TABLE `Blog`.`users` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `username` VARCHAR(45) NULL,
  `email` VARCHAR(45) NULL,
  `password` VARCHAR(45) NULL,
  PRIMARY KEY (`id`));
  
CREATE TABLE `Blog`.`posts` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `user_id` INT NULL,
  `title` VARCHAR(45) NULL,
  `description` VARCHAR(999) NULL,
  PRIMARY KEY (`id`));
  
CREATE TABLE `Blog`.`roles` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `user_id` INT NULL,
  `role` VARCHAR(999) NULL,
  PRIMARY KEY (`id`));