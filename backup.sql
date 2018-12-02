-- MySQL dump 10.13  Distrib 5.7.24, for macos10.14 (x86_64)
--
-- Host: 127.0.0.1    Database: burgerstwo_DB
-- ------------------------------------------------------
-- Server version	5.7.24

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `burgers`
--

DROP TABLE IF EXISTS `burgers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `burgers` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `burger_name` varchar(50) DEFAULT NULL,
  `burger_devoured` tinyint(1) DEFAULT '0',
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  `PatronID` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=28 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `burgers`
--

LOCK TABLES `burgers` WRITE;
/*!40000 ALTER TABLE `burgers` DISABLE KEYS */;
INSERT INTO `burgers` VALUES (4,'One Pound Monster Burger',0,NULL,'2018-12-01 04:03:57',NULL),(7,'Taco Burger',0,'2018-12-01 03:43:02','2018-12-01 04:04:11',NULL),(8,'Grilled Chicken Burger',0,'2018-12-01 04:04:32','2018-12-01 04:04:32',NULL),(10,'Double Decker Burger',0,'2018-12-01 04:05:00','2018-12-01 04:05:00',NULL),(11,'Veggie Burger',1,'2018-12-01 04:05:13','2018-12-01 04:19:52',NULL),(12,'Low Carb Lettuce Wrap Burger',0,'2018-12-01 04:05:30','2018-12-01 04:05:30',NULL),(13,'Western Bacon Cheese Burger',0,'2018-12-01 04:05:46','2018-12-01 04:06:03',NULL),(14,'Turkey Swiss Burger',0,'2018-12-01 04:11:35','2018-12-01 04:19:54',NULL),(17,'Da Best Burger',1,'2018-12-01 04:20:02','2018-12-01 04:20:51',NULL),(18,'Kyle Burger',0,'2018-12-02 02:49:53','2018-12-02 02:49:53',NULL),(19,'Amburger',0,'2018-12-02 02:54:27','2018-12-02 02:54:27',NULL),(20,'Amburger',0,'2018-12-02 02:56:23','2018-12-02 02:56:23',NULL),(21,'Amburger',0,'2018-12-02 02:57:08','2018-12-02 02:57:08',NULL),(22,'Amburger',0,'2018-12-02 02:59:42','2018-12-02 02:59:42',NULL),(24,'Super Burger',0,'2018-12-02 18:27:32','2018-12-02 18:46:44',1),(25,'Lean Burger',0,'2018-12-02 18:29:17','2018-12-02 18:29:17',1),(26,'Chicken Avocado Burger',0,'2018-12-02 18:46:56','2018-12-02 18:47:08',1),(27,'Amburger',0,'2018-12-02 18:47:48','2018-12-02 18:47:48',2);
/*!40000 ALTER TABLE `burgers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `patrons`
--

DROP TABLE IF EXISTS `patrons`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `patrons` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `patron_name` varchar(50) DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `patrons`
--

LOCK TABLES `patrons` WRITE;
/*!40000 ALTER TABLE `patrons` DISABLE KEYS */;
INSERT INTO `patrons` VALUES (1,'Kyle','2018-12-01 20:23:52','2018-12-01 20:23:52'),(2,'Amber','2018-12-01 21:21:57','2018-12-01 21:21:57'),(3,'Bobby','2018-12-02 01:46:56','2018-12-02 01:46:56');
/*!40000 ALTER TABLE `patrons` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2018-12-02 14:05:08
