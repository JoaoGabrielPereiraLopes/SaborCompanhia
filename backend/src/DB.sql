CREATE TABLE IF NOT EXISTS
  `Users` (
    `id` int NOT NULL AUTO_INCREMENT,
    `Name` varchar(255) NOT NULL,
    `Created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
    `UpdatedAt` timestamp NULL DEFAULT NULL,
    `Email` varchar(255) NOT NULL,
    `Password` text NOT NULL,
    `Admin` tinyint(1) NOT NULL DEFAULT '0',
    PRIMARY KEY (`id`),
    UNIQUE KEY `UniqueEmail` (`Email`)
) ENGINE = InnoDB AUTO_INCREMENT = 3 DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci
CREATE TABLE IF NOT EXISTS `Dishes` (
    `id` int unsigned NOT NULL AUTO_INCREMENT,
    `Type` enum('dish', 'combo', 'drink') NOT NULL,
    `Name` char(255) NOT NULL,
    `Value` int NOT NULL,
    `Description` text NOT NULL,
    `Dishes` json DEFAULT NULL,
    `DataLimit` date NOT NULL,
    `CreatedAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
    `UpdatedAt` timestamp NULL DEFAULT NULL,
    PRIMARY KEY (`id`)
  ) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci;
  CREATE TABLE IF NOT EXISTS `Ingredient` (
    `id` int unsigned NOT NULL AUTO_INCREMENT,
    `Name` varchar(255) NOT NULL,
    `Type` enum(
      'meat',
      'seafood',
      'vegetable',
      'fruit',
      'grain',
      'legume',
      'dairy',
      'egg',
      'bread',
      'seasoning',
      'sauce',
      'oil'
    ) NOT NULL,
    `Measure` decimal(10, 3) NOT NULL DEFAULT '0.000',
    `Unit` varchar(255) NOT NULL,
    PRIMARY KEY (`id`)
  ) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci;
  CREATE TABLE IF NOT EXISTS `Employees` (
    `id` int unsigned NOT NULL AUTO_INCREMENT,
    `Name` varchar(255) NOT NULL,
    `Salary` decimal(10, 2) NOT NULL,
    `Workload` varchar(255) NOT NULL,
    `Password` varchar(255) NOT NULL,
    PRIMARY KEY (`id`)
  ) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci;
  CREATE TABLE IF NOT EXISTS
  `Log` (
    `id` int unsigned NOT NULL AUTO_INCREMENT,
    `Table` enum('Users', 'Employees') NOT NULL,
    `AgentId` enum('Users', 'Admins', 'Employees') NOT NULL,
    `Action` varchar(255) NOT NULL,
    `Descrition` text NOT NULL,
    `Datetime` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (`id`)
  ) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci;
  CREATE TABLE IF NOT EXISTS
  `Acquisition` (
    `id` int unsigned NOT NULL AUTO_INCREMENT,
    `Date` date NOT NULL,
    `Quantitaty` decimal(10, 2) NOT NULL,
    `Value` decimal(10, 2) NOT NULL,
    `Ingredient` int NOT NULL,
    PRIMARY KEY (`id`)
  ) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci;
  CREATE TABLE IF NOT EXISTS
  `Ingredient-Dishe` (
    `Dieshes` int NOT NULL,
    `Ingredient` int NOT NULL,
    `measurement` decimal(10, 2) NOT NULL,
    PRIMARY KEY (`Dieshes`, `Ingredient`),
    KEY `FK_Ingredient` (`Ingredient`),
    CONSTRAINT `FK_Dishe` FOREIGN KEY (`Dieshes`) REFERENCES `Dishes` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT `FK_Ingredient` FOREIGN KEY (`Ingredient`) REFERENCES `Ingredient` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
  ) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci;
  CREATE TABLE IF NOT EXISTS
  `Order` (
    `id` int NOT NULL AUTO_INCREMENT,
    `User` int NOT NULL,
    `Step` enum(
      'In the quee',
      'Preparing',
      'On the way',
      'Finished'
    ) NOT NULL,
    `Location` text NOT NULL,
    `Vulue` decimal(10, 2) NOT NULL,
    `DateTime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (`id`),
    KEY `User_FK` (`User`),
    CONSTRAINT `User_FK` FOREIGN KEY (`User`) REFERENCES `Users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
  ) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci;
  CREATE TABLE IF NOT EXISTS
  `OrderItem` (
    `Dishe` int NOT NULL,
    `Quantaty` int NOT NULL,
    `Order` int NOT NULL,
    `UnityPrice` decimal(10, 2) NOT NULL,
    PRIMARY KEY (`Dishe`, `Order`),
    KEY `OrderItem_FK_Order` (`Order`),
    CONSTRAINT `OrderItem_FK_Dishe` FOREIGN KEY (`Dishe`) REFERENCES `Dishes` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT `OrderItem_FK_Order` FOREIGN KEY (`Order`) REFERENCES `Order` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
  ) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci;