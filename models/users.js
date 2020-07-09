'use strict';

module.exports = (sequelize, DataTypes) => {
  const users = sequelize.define(
    'users', 
    {
      UserId: {
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
        type: DataTypes.INTEGER,
      },
    FirstName: DataTypes.STRING,
    LastName: DataTypes.STRING,
    Username: {
      unique: true,
      type: DataTypes.STRING,
    },
    Password: DataTypes.STRING,
    Email: {
      unique: true,
     type: DataTypes.STRING
    },
    Admin: {
      defaultValue: false,
      type: DataTypes.BOOLEAN
    }, 
    Deleted: {
      defaultValue: false,
      type: DataTypes.BOOLEAN
    },
    
  }, );

  return users;
};
