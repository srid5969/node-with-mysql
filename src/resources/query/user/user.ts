export const getAllUsers = "select * from [user]";
export const insertUser = "INSERT INTO [user] ([id],[name] ,[password]) VALUES (@id, @name, @password)";
export const editUserQuery = "UPDATE [user] SET  name= @name where id=@id";
export const deleteUserQuery = "DELETE FROM [user] WHERE id=@id";
export const getUserByIdQuery = "SELECT * FROM [user] WHERE id=@id ";
export const CREATE_USERS_TABLE_QUERY = "CREATE TABLE IF NOT exists user (id  VARCHAR(40) DEFAULT (uuid()) ,name VARCHAR(50),password VARCHAR(50))";
