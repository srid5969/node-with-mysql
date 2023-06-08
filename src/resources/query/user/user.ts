export const getAllUsers = "SELECT * FROM user";
export const insertUser = "insert into user(name,password) values";
export const editUserQuery = "UPDATE user SET ";
export const deleteUserQuery = "DELETE FROM user WHERE id=";
export const getUserByIdQuery = "SELECT * FROM user where id=";

export const CREATE_USERS_TABLE_QUERY = "CREATE TABLE IF NOT exists users (id INT PRIMARY KEY AUTO_INCREMENT,name VARCHAR(50),age INT)";
