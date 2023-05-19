/*BASE DE DATOS PARA EL HUB DE HUMANI MUNDIAL*/


CREATE databse hub;

use hub;

/* TABLA CON LOS PROYECTOS QUE SE TIENEN HASTA EL MOMENTO */
CREATE TABLE `proyectos` (
  `id_proyectos` int(11) NOT NULL,
  `chrnombre` varchar(100) NOT NULL,
  `chrdescripcion` text NOT NULL,
  `dtfecha` date NOT NULL,
  `chrestado` varchar(100) NOT NULL,
    `chrimagen` LONGTEXT NOT NULL,
    'chrurl' varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;


/* TABLA CON la bitacora para saber que sistema esta usando el usuario */

CREATE TABLE `bitacora` (
  `id_bitacora` int(11) NOT NULL,
  `chrnombre` varchar(100) NOT NULL,
  `chrdescripcion` text NOT NULL,
  `dtfecha` date NOT NULL,
  `chrestado` varchar(100) NOT NULL,
    `chrimagen` LONGTEXT NOT NULL,
    'chrurl' varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;





