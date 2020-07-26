-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le :  Dim 26 juil. 2020 à 11:13
-- Version du serveur :  5.7.23
-- Version de PHP :  7.2.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `rb_gestconsultant`
--

-- --------------------------------------------------------

--
-- Structure de la table `client`
--

DROP TABLE IF EXISTS `client`;
CREATE TABLE IF NOT EXISTS `client` (
  `id_cli` int(3) NOT NULL AUTO_INCREMENT,
  `nom` varchar(150) NOT NULL,
  `prenom` varchar(150) NOT NULL,
  `adresse` varchar(150) NOT NULL,
  `tel` varchar(150) NOT NULL,
  `mail` varchar(150) NOT NULL,
  PRIMARY KEY (`id_cli`)
) ENGINE=MyISAM AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `client`
--

INSERT INTO `client` (`id_cli`, `nom`, `prenom`, `adresse`, `tel`, `mail`) VALUES
(1, 'Hassan', 'Keren', 'Sarcelles', '0122887766', 'keren@gmail.com'),
(2, 'Naccache', 'Lisa', 'Nice', '0122887766', 'lisa@gmail.com'),
(3, 'Belkaid', 'Chaimaie', 'Nice', '0122887766', 'Chaimaie@gmail.com'),
(4, 'Canet', 'Guillaume', 'Monaco', '0122887766', 'Guil@gmail.com'),
(5, 'Cotillard', 'Manon', 'Champigni', '0122887766', 'Manon@gmail.com');

-- --------------------------------------------------------

--
-- Structure de la table `consultation`
--

DROP TABLE IF EXISTS `consultation`;
CREATE TABLE IF NOT EXISTS `consultation` (
  `id_cons` int(3) NOT NULL AUTO_INCREMENT,
  `fact` tinyint(1) NOT NULL,
  `duree` float NOT NULL,
  `prix` float NOT NULL,
  `cli_id` int(3) NOT NULL,
  `presta_id` int(3) NOT NULL,
  `fact_id` int(3) DEFAULT '1',
  `user_id` int(3) NOT NULL,
  `date` varchar(255) NOT NULL,
  PRIMARY KEY (`id_cons`) USING BTREE
) ENGINE=MyISAM AUTO_INCREMENT=43 DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `consultation`
--

INSERT INTO `consultation` (`id_cons`, `fact`, `duree`, `prix`, `cli_id`, `presta_id`, `fact_id`, `user_id`, `date`) VALUES
(1, 0, 2, 100, 1, 1, NULL, 1, '2020-08-10'),
(6, 0, 4, 600, 2, 1, NULL, 4, '2020-04-05'),
(8, 0, 2, 200, 1, 2, NULL, 1, '2017-05-05'),
(9, 0, 2, 200, 1, 2, NULL, 2, '2012-01-12'),
(22, 0, 5, 25, 2, 1, NULL, 1, '2019-12-12'),
(23, 0, 6.5, 78, 2, 3, NULL, 1, '2020-10-10'),
(25, 0, 6.5, 78, 3, 3, NULL, 1, '2020-10-14'),
(24, 0, 4, 44, 2, 1, NULL, 1, '2019-12-24'),
(42, 0, 1.25, 60, 5, 1, NULL, 1, '2020-07-17'),
(35, 0, 1.5, 200, 3, 2, NULL, 1, '2020-07-16'),
(38, 0, 1.25, 456789, 1, 1, NULL, 1, '2019-07-16'),
(36, 0, 1.25, 200, 1, 2, NULL, 1, '2020-07-16'),
(37, 0, 1.5, 200, 2, 2, NULL, 1, '2020-07-16'),
(39, 0, 2, 50, 5, 4, NULL, 1, '2020-07-17'),
(40, 0, 1.5, 576, 5, 3, NULL, 1, '2020-07-17'),
(41, 0, 1.25, 64, 5, 3, NULL, 1, '2020-07-17');

-- --------------------------------------------------------

--
-- Structure de la table `facture`
--

DROP TABLE IF EXISTS `facture`;
CREATE TABLE IF NOT EXISTS `facture` (
  `id_fact` int(3) NOT NULL AUTO_INCREMENT,
  `totht` float NOT NULL,
  `tva` float NOT NULL,
  `totttc` float NOT NULL,
  `dtfact` varchar(255) NOT NULL,
  PRIMARY KEY (`id_fact`)
) ENGINE=MyISAM AUTO_INCREMENT=15 DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `facture`
--

INSERT INTO `facture` (`id_fact`, `totht`, `tva`, `totttc`, `dtfact`) VALUES
(1, 232, 20, 321, '2020-12-20');

-- --------------------------------------------------------

--
-- Structure de la table `prestation`
--

DROP TABLE IF EXISTS `prestation`;
CREATE TABLE IF NOT EXISTS `prestation` (
  `id_presta` int(3) NOT NULL AUTO_INCREMENT,
  `lib` varchar(150) NOT NULL,
  `prixunit` varchar(255) NOT NULL,
  PRIMARY KEY (`id_presta`)
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `prestation`
--

INSERT INTO `prestation` (`id_presta`, `lib`, `prixunit`) VALUES
(1, 'Informatique', '100'),
(2, 'Maintenance', '200'),
(4, 'Droit', '300'),
(3, 'Audit', '50');

-- --------------------------------------------------------

--
-- Structure de la table `user`
--

DROP TABLE IF EXISTS `user`;
CREATE TABLE IF NOT EXISTS `user` (
  `id_user` int(3) NOT NULL AUTO_INCREMENT,
  `nom` varchar(50) NOT NULL,
  `prenom` varchar(50) NOT NULL,
  `adresse` varchar(50) NOT NULL,
  `mail` varchar(50) NOT NULL,
  `mdp` varchar(50) NOT NULL,
  `admin` tinyint(1) NOT NULL,
  PRIMARY KEY (`id_user`)
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `user`
--

INSERT INTO `user` (`id_user`, `nom`, `prenom`, `adresse`, `mail`, `mdp`, `admin`) VALUES
(1, 'Querin', 'Gerard', 'Montpellier', 'gerard@gmail.com', 'gerard', 0),
(2, 'Dupont', 'Jean', 'Vincennes', 'Jean@gmail.com', 'jean', 0),
(3, 'Cohen', 'Elie', 'Clichy', 'elie@gmail.com', 'elie', 1),
(4, 'Quejot', 'Vincent', 'Porto', 'vicent@gmail.com', 'viencent', 0);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
