1. Open docker software and terminal in folder docker and run
   docker compose -f CRUDNodeJS.yml -p nodejs-sql up -d

2. Open DBeaver and create new database connection and choose MySQL with :
   port : 3308;
   database : haitoan98 (you can modify in CRUDNodeJS.yml)
   User name : root;
   Password :291098 (you can modify in CRUDNodeJS.yml)
   Then click Test connection and finish , if this is your first time you will have to install driver for Mysql just above Test connect button

3. Right click on the database you just added and click sql editor,right click on the database you just added and click sql editor, a tab will appear for you to write SQL statements

4. Write the following statement to create a new table describing the courses
   CREATE TABLE Courses (
   id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
   name varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
   description varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
   slug varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
   image varchar(255),
   videoID varchar(255),
   isDeleted INT DEFAULT 0,
   created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
   updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
   );

5 OK, now you VS code and run npm i in terminal then npm start to run application
