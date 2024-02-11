SELECT * FROM testdb.USERs;

ALTER TABLE `testdb`.`USERs` 
CHANGE COLUMN `createdAt` `createdAt` DATETIME NULL ,
CHANGE COLUMN `updatedAt` `updatedAt` DATETIME NULL ;

INSERT INTO testdb.USERs (username,email) VALUES ('user1','user1@gmail');