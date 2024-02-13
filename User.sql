SELECT * FROM testdb.USERs;

ALTER TABLE `testdb`.`USERs` 
CHANGE COLUMN `createdAt` `createdAt` DATETIME NULL ,
CHANGE COLUMN `updatedAt` `updatedAt` DATETIME NULL ;

DROP TABLE `testdb`.`USERs`;
TRUNCATE TABLE `testdb`.`USERs` ;

INSERT INTO testdb.USERs (username,email, password) VALUES ('user1','user1@gmail', 'dd');
