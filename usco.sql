-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 23-04-2022 a las 01:55:46
-- Versión del servidor: 10.1.38-MariaDB
-- Versión de PHP: 7.3.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `usco`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `admin`
--

CREATE TABLE `admin` (
  `id` int(20) NOT NULL,
  `nombre` int(20) NOT NULL,
  `rol` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `citas`
--

CREATE TABLE `citas` (
  `id` int(20) NOT NULL,
  `id_medico` int(20) NOT NULL,
  `id_paciente` int(20) NOT NULL,
  `id_consultorio` int(20) NOT NULL,
  `fecha` varchar(20) NOT NULL,
  `hora` varchar(20) NOT NULL,
  `estado` varchar(20) NOT NULL,
  `observacion` varchar(40) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `citas`
--

INSERT INTO `citas` (`id`, `id_medico`, `id_paciente`, `id_consultorio`, `fecha`, `hora`, `estado`, `observacion`) VALUES
(1, 26441226, 1079390759, 1, '22-04-2022', '14:00', 'Pendiente', ''),
(2, 26441226, 1079390759, 1, '22-04-2022', '14:00', 'Pendiente', ''),
(3, 26441226, 1079390759, 1, '28-04-2022', '10:00', 'Cancelada', 'Se cancela porque si'),
(4, 1079391798, 89053525, 1, '28-05-45', '2:00', 'Pendiente', ''),
(5, 1079391798, 89053525, 2, '2022-04-27', '18:13', 'Pendiente', ''),
(6, 26441226, 1079390759, 1, '2022-04-21', '18:57', 'Pendiente', '');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `consultorio`
--

CREATE TABLE `consultorio` (
  `id` int(20) NOT NULL,
  `departamento` varchar(20) NOT NULL,
  `municipio` varchar(20) NOT NULL,
  `direccion` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `consultorio`
--

INSERT INTO `consultorio` (`id`, `departamento`, `municipio`, `direccion`) VALUES
(1, 'Huila', 'Garzon', 'Calle 50 85 30'),
(2, 'Caldas', 'Manizales', '85 359651');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `medico`
--

CREATE TABLE `medico` (
  `id` int(30) NOT NULL,
  `nombre` varchar(20) NOT NULL,
  `apellido` varchar(20) NOT NULL,
  `direccion` varchar(20) NOT NULL,
  `telefono` varchar(20) NOT NULL,
  `rol` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `medico`
--

INSERT INTO `medico` (`id`, `nombre`, `apellido`, `direccion`, `telefono`, `rol`) VALUES
(99050, 'Juanca', 'Almario', 'cr 5 85 39', '3154569874', 'Medico'),
(26441226, 'Mercedes', 'Alvarado', 'Cra 16c 50 33', '325956487', 'Medico'),
(48563625, 'Jose', 'Arrigui', 'calle 8 9 50', '3548601258', 'Medico'),
(48569685, 'David', 'Alvarado', 'Cra 253 50 33', '32595886', 'Medico'),
(86547254, 'Mario', 'Casas', '85 365 41', '321548965', 'Medico'),
(1079391798, 'Helman', 'Sierra', 'Cra 5 9 30', '3154597957', 'Medico');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `paciente`
--

CREATE TABLE `paciente` (
  `id` int(20) NOT NULL,
  `nombre` varchar(20) NOT NULL,
  `apellido` varchar(20) NOT NULL,
  `direccion` varchar(20) NOT NULL,
  `telefono` varchar(20) NOT NULL,
  `rol` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `paciente`
--

INSERT INTO `paciente` (`id`, `nombre`, `apellido`, `direccion`, `telefono`, `rol`) VALUES
(89053525, 'Arnulfo', 'Rodriguez', 'cra 15 58 96', '3154598525', 'Paciente'),
(1079390759, 'Ricardo', 'Sierra', 'calle 5 9 60', '3103147266', 'Paciente');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `citas`
--
ALTER TABLE `citas`
  ADD PRIMARY KEY (`id`),
  ADD KEY `citasMedico` (`id_medico`),
  ADD KEY `citasConsultorio` (`id_consultorio`),
  ADD KEY `citasPaciente` (`id_paciente`);

--
-- Indices de la tabla `consultorio`
--
ALTER TABLE `consultorio`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `medico`
--
ALTER TABLE `medico`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `paciente`
--
ALTER TABLE `paciente`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `citas`
--
ALTER TABLE `citas`
  MODIFY `id` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `citas`
--
ALTER TABLE `citas`
  ADD CONSTRAINT `citasConsultorio` FOREIGN KEY (`id_consultorio`) REFERENCES `consultorio` (`id`),
  ADD CONSTRAINT `citasMedico` FOREIGN KEY (`id_medico`) REFERENCES `medico` (`id`),
  ADD CONSTRAINT `citasPaciente` FOREIGN KEY (`id_paciente`) REFERENCES `paciente` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
