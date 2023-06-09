-- Create a SQL Server login with a password
USE [master];
GO

-- Create the login
CREATE LOGIN [sridhar] WITH PASSWORD = 'sridhar';
GO

-- Optionally, grant server-level permissions to the login
-- For example, granting sysadmin role
ALTER SERVER ROLE [sysadmin] ADD MEMBER [sridhar];
GO

-- Create a user in a specific database
USE [YourDatabase];
GO

-- Create the user and associate it with the login
CREATE USER [sridhar] FOR LOGIN [sridhar];
GO

-- Optionally, grant database-level permissions to the user
-- For example, granting the user read and write access to a specific schema
GRANT SELECT, INSERT, UPDATE, DELETE ON [master].* TO [sridhar];
GO
