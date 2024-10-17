-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 09, 2024 at 03:56 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.1.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `whats_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `source`
--

CREATE TABLE `source` (
  `source_id` varchar(11) NOT NULL,
  `source_name` text DEFAULT NULL,
  `source_mobile` varchar(20) DEFAULT NULL,
  `source_deviceSerial` text DEFAULT NULL,
  `source_status` char(1) DEFAULT 'N'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `source`
--

INSERT INTO `source` (`source_id`, `source_name`, `source_mobile`, `source_deviceSerial`, `source_status`) VALUES
('4001', NULL, NULL, NULL, 'N'),
('4002', 'Mazen Essam Elmohamady', '201112847004', NULL, 'N'),
('4003', 'Mazen Essam Elmohamady', '201112847004', NULL, 'N'),
('4004', NULL, NULL, NULL, 'N'),
('4005', NULL, NULL, NULL, 'N'),
('4006', 'maze', '201104', NULL, 'A');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `source`
--
ALTER TABLE `source`
  ADD PRIMARY KEY (`source_id`(4));
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
